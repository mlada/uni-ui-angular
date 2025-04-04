import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { AlignDirective } from '@uni/ui/utils';

@Component({
  selector: 'uni-search-avia-time',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './search-avia-time.component.html',
  styleUrl: './search-avia-time.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: AlignDirective,
      inputs: ['uniAlign'],
    },
  ],
})
export class SearchAviaTimeComponent {
  readonly place = input.required<string>();
  readonly placeShort = input.required<string>();
  readonly at = input.required<string>();
}
