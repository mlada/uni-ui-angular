import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AlignDirective, SizeDirective } from '@uni/ui/utils';

@Component({
  selector: 'uni-headline,[uni-headline],[uniHeadline]',
  standalone: true,
  template: '<ng-content/>',
  styleUrl: './headline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uni-headline',
  },
  hostDirectives: [
    {
      directive: SizeDirective,
      inputs: ['uniSize'],
    },
    {
      directive: AlignDirective,
      inputs: ['uniAlign'],
    },
  ],
})
export class HeadlineComponent {}
