import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { SearchHotel } from '@uni/search/hotels/common';
import { AnchorComponent } from '@uni/ui/buttons';

import { SearchHotelViewPipe } from './search-hotel-view.pipe';

@Component({
  selector: 'uni-search-hotel-view',
  standalone: true,
  imports: [SearchHotelViewPipe, AnchorComponent],
  templateUrl: './search-hotel-view.component.html',
  styleUrl: './search-hotel-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelViewComponent {
  readonly searchHotel = input.required<SearchHotel>();
}
