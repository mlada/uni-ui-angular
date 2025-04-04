import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

import type { PathValues } from '@uni/core';
import { castQueryParams, getRoute } from '@uni/core';
import { getSearchQueryParams } from '@uni/search/common';
import { SearchGroupComponent } from '@uni/search/ui/fields';
import { ButtonComponent } from '@uni/ui/buttons';

@Component({
  selector: 'uni-search-form',
  standalone: true,
  imports: [SearchGroupComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  readonly form = input.required<FormGroup>();
  readonly redirectTo = input.required<PathValues>();
  readonly submitted = output();

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(
        tap((queryParams) => {
          const formData = castQueryParams(queryParams, Object.keys(this.form().controls));
          if (Object.keys(formData).length) {
            this.form().patchValue(formData);
          }
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  onSubmit(): void {
    this.form().markAllAsTouched();

    if (this.form().invalid) {
      return;
    }
    this.submitted.emit();

    // Note: Auto redirect
    void this.router.navigate(getRoute(this.redirectTo()), {
      queryParams: getSearchQueryParams({ ...this.activatedRoute.snapshot.queryParams, ...this.form().getRawValue() }),
    });
  }
}
