import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { SearchHotelService } from '@uni/search/hotels/services';

import { SearchHotelCardComponent } from './search-hotel-card/search-hotel-card.component';

@Component({
  selector: 'uni-search-hotels-result',
  standalone: true,
  imports: [AsyncPipe, SearchHotelCardComponent],
  providers: [SearchHotelService],
  templateUrl: './search-hotels-result.component.html',
  styleUrl: './search-hotels-result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelsResultComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly searchHotelService = inject(SearchHotelService);

  readonly results$ = this.activatedRoute.queryParams.pipe(switchMap((queryParams) => this.searchHotelService.findHotels(queryParams)));
}
