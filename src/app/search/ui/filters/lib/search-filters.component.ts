import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { startWith, tap, withLatestFrom } from 'rxjs';

import { castQueryParams } from '@uni/core';
import { ButtonComponent } from '@uni/ui/buttons';
import { CardComponent } from '@uni/ui/cards';

@Component({
  selector: 'uni-search-filters',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  readonly form = input.required<FormGroup>();

  ngOnInit(): void {
    if (!this.form()) {
      console.warn('Filters is empty');
      return;
    }
    const formData = castQueryParams(this.activatedRoute.snapshot.queryParams, Object.keys(this.form().controls));

    if (Object.keys(formData).length) {
      this.form().patchValue(formData);
    }

    this.form()
      .valueChanges.pipe(
        startWith({}),
        withLatestFrom(this.activatedRoute.queryParams),
        tap(([queryParams, baseQueryParams]) =>
          this.router.navigate([], {
            queryParams: castQueryParams({
              ...baseQueryParams,
              ...queryParams,
            }),
          }),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  onApply(): void {
    void this.router.navigate([], {
      queryParams: {
        ...this.activatedRoute.snapshot.queryParams,
        refresh: new Date().toISOString(),
      },
    });
  }

  onReset(): void {
    this.form().reset();
  }
}
