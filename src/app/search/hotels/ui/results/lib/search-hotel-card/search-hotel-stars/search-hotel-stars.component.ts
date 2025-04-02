import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { StarComponent } from '@uni/ui/icons';

@Component({
  selector: 'uni-search-hotel-stars',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './search-hotel-stars.component.html',
  styleUrl: './search-hotel-stars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelStarsComponent {
  readonly stars = input.required<number[], number>({
    transform: (value) => Array.from({ length: value }, (_, index) => index + 1),
  });
}
