import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AlignDirective, SizeDirective } from '@uni/ui/utils';

@Component({
  selector: 'uni-title,[uni-title],[uniTitle]',
  standalone: true,
  template: '<ng-content/>',
  styleUrl: './title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uni-title',
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
export class TitleComponent {}