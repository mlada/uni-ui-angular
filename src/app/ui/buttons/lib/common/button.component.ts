import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DisabledDirective, ExtraSizeDirective, ModeDirective, WidthDirective } from '@uni/ui/utils';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[uni-button]',
  standalone: true,
  template: '<ng-content />',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uni-button',
  },
  hostDirectives: [
    {
      directive: ModeDirective,
      inputs: ['uniMode'],
    },
    {
      directive: ExtraSizeDirective,
      inputs: ['uniSize'],
    },
    {
      directive: DisabledDirective,
      inputs: ['disabled'],
    },
    {
      directive: WidthDirective,
      inputs: ['uniWidth'],
    },
  ],
})
export class ButtonComponent extends ButtonBase {}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[uni-button]',
  standalone: true,
  template: '<ng-content />',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uni-button',
  },
  hostDirectives: [
    {
      directive: ModeDirective,
      inputs: ['uniMode'],
    },
    {
      directive: ExtraSizeDirective,
      inputs: ['uniSize'],
    },
    {
      directive: DisabledDirective,
      inputs: ['disabled'],
    },
    {
      directive: WidthDirective,
      inputs: ['uniWidth'],
    },
  ],
})
export class AnchorComponent extends AnchorBase {}
