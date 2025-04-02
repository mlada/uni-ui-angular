import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { SearchFlight } from '@uni/search/avia/common';
import { AnchorComponent } from '@uni/ui/buttons';
import { CardComponent } from '@uni/ui/cards';

import { SearchAviaLinePipe } from './search-avia-line.pipe';
import { SearchAviaLineComponent } from './search-avia-line/search-avia-line.component';

@Component({
  selector: 'uni-search-avia-lines',
  standalone: true,
  imports: [SearchAviaLinePipe, SearchAviaLineComponent, AnchorComponent, CardComponent, CurrencyPipe],
  templateUrl: './search-avia-lines.component.html',
  styleUrl: './search-avia-lines.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaLinesComponent {
  readonly searchFlight = input.required<SearchFlight>();
}
