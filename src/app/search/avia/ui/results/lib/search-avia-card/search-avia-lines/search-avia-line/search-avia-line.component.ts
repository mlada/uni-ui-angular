import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { SearchAviaLine } from '@uni/search/avia/common';

import { SearchAviaDurationComponent } from './search-avia-duration/search-avia-duration.component';
import { SearchAviaTimeComponent } from './search-avia-time/search-avia-time.component';

@Component({
  selector: 'uni-search-avia-line',
  standalone: true,
  imports: [SearchAviaTimeComponent, SearchAviaDurationComponent],
  templateUrl: './search-avia-line.component.html',
  styleUrl: './search-avia-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaLineComponent {
  readonly searchLine = input.required<SearchAviaLine>();
}
