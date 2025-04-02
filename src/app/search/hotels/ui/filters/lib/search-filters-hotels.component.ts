import { ChangeDetectionStrategy, Component } from '@angular/core';

import type { SearchFormOptions } from '@uni/search/common';
import type { SearchHotelFilters } from '@uni/search/hotels/common';
import { initialSearchHotelFiltersGroup } from '@uni/search/hotels/common';
import { SearchFiltersComponent } from '@uni/search/ui/filters';

import { FilterBreakfastComponent } from './filter-breakfast/filter-breakfast.component';
import { FilterFiveStarsComponent } from './filter-five-stars/filter-five-stars.component';
import { FilterFreeCancellationComponent } from './filter-free-cancellation/filter-free-cancellation.component';

@Component({
  selector: 'uni-search-filters-hotels',
  standalone: true,
  imports: [SearchFiltersComponent, FilterBreakfastComponent, FilterFreeCancellationComponent, FilterFiveStarsComponent],
  templateUrl: './search-filters-hotels.component.html',
  styleUrl: './search-filters-hotels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersHotelsComponent {
  readonly form = initialSearchHotelFiltersGroup;

  readonly options: SearchFormOptions<SearchHotelFilters> = {
    breakfast: { label: $localize`:Search Filter:Breakfast`, id: 'breakfast', name: 'breakfast' },
    fiveStars: { label: $localize`:Search Filter:Five Stars`, id: 'fiveStars', name: 'fiveStars' },
    freeCancellation: { label: $localize`:Search Filter:Free Cancellation`, id: 'freeCancellation', name: 'freeCancellation' },
  };
}
