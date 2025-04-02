import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { TitleComponent } from '@uni/ui/title';

@Component({
  selector: 'uni-search-hotel-title',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './search-hotel-title.component.html',
  styleUrl: './search-hotel-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelTitleComponent {
  readonly title = input.required<string>();
}
