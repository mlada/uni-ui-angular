import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AlignDirective } from '@uni/ui/utils';

import { FluidDirective } from './fluid.directive';
import { MobileDirective } from './mobile.directive';

@Component({
  selector: 'uni-container',
  standalone: true,
  template: '<ng-content/>',
  styleUrl: './container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uni-container',
  },
  hostDirectives: [
    {
      directive: FluidDirective,
      inputs: ['uniFluid'],
    },
    {
      directive: MobileDirective,
      inputs: ['uniMobile'],
    },
    {
      directive: AlignDirective,
      inputs: ['uniAlign'],
    },
  ],
})
export class ContainerComponent {}
