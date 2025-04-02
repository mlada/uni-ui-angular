import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PATHS } from '@uni/core';
import type { SearchFormOptions } from '@uni/search/common';
import type { SearchHotelForm } from '@uni/search/hotels/common';
import { initialSearchHotelFormGroup } from '@uni/search/hotels/common';
import {
  SearchDateComponent,
  SearchDestinationComponent,
  SearchGroupComponent,
  SearchPassengersComponent,
  SearchReverseComponent,
} from '@uni/search/ui/fields';
import { SearchFormComponent } from '@uni/search/ui/form';
import { ButtonComponent } from '@uni/ui/buttons';

@Component({
  selector: 'uni-search-hotel-form',
  standalone: true,
  imports: [
    SearchFormComponent,
    SearchGroupComponent,
    SearchDestinationComponent,
    SearchReverseComponent,
    SearchDateComponent,
    SearchPassengersComponent,
    ButtonComponent,
  ],
  templateUrl: './search-hotel-form.component.html',
  styleUrl: './search-hotel-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelFormComponent {
  readonly form = initialSearchHotelFormGroup;
  readonly redirectTo = PATHS.searchHotel;

  readonly options: SearchFormOptions<SearchHotelForm> = {
    city: { label: $localize`:Search Field:City`, id: 'city', types: ['city'], key: 'name' },
    startDate: { label: $localize`:Search Field:When`, id: 'startDate' },
    endDate: { label: $localize`:Search Field:When back`, id: 'endDate', startDate: this.form.controls.startDate },
    passengers: { label: $localize`:Search Field:Guests`, id: 'passengers' },
  };
}
