import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { FormControl } from '@angular/forms';
import { BehaviorSubject, debounceTime, EMPTY, of, switchMap, tap } from 'rxjs';

import { ExtraClassService, toClass } from '@uni/core';
import type { SearchDestination, SearchFieldOptions } from '@uni/search/common';
import type { AutocompleteOptions } from '@uni/ui/autocomplete';
import { AutocompleteComponent } from '@uni/ui/autocomplete';

import { SearchDestinationService } from './search-destination.service';

export interface SearchDestinationOptions extends SearchFieldOptions {
  readonly types?: string[];
  readonly key?: string;
}

@Component({
  selector: 'uni-search-destination',
  standalone: true,
  imports: [AutocompleteComponent],
  templateUrl: './search-destination.component.html',
  styleUrl: './search-destination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExtraClassService, SearchDestinationService],
})
export class SearchDestinationComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly searchDestinationService = inject(SearchDestinationService);
  private readonly extraClassService = inject(ExtraClassService);

  readonly control = input.required<FormControl<string | SearchDestination>>();
  readonly options = input.required<AutocompleteOptions & SearchDestinationOptions, SearchDestinationOptions>({
    transform: (options) => {
      this.extraClassService.update('options', toClass(options.id));

      return {
        ...options,
        key: options.key ?? 'code',
        displayFn: (item: SearchDestination) => {
          return `${item.name}, ${item.code}<br>${item.country_name}, ${item.city_name ?? item.name}`;
        },
        inputDisplayFn: (item: SearchDestination | string) => {
          if (!item) {
            return '';
          }
          if (typeof item === 'string') {
            return item;
          }

          return `${item.name}, ${item.code}`;
        },
      };
    },
  });

  readonly data$ = new BehaviorSubject<SearchDestination[]>([]);

  ngOnInit(): void {
    this.control()
      .valueChanges.pipe(
        debounceTime(300),
        switchMap((query) => {
          if (!query) {
            return of([]);
          }

          if (typeof query !== 'string') {
            return EMPTY;
          }

          return this.searchDestinationService.findDestination(query, this.options().key, this.options().types);
        }),
        tap((response) => this.data$.next(response.slice(0, 6))),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
