import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AlignDirective } from '@uni/ui/utils';

import { FluidDirective } from './fluid.directive';
import { MobileDirective } from './mobile.directive';

@Component({
  selector: 'uni-container',
  standalone: true,
  imports: [RouterOutlet],
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
