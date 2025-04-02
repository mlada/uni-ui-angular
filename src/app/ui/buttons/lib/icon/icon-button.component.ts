import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DisabledDirective, ExtraSizeDirective, ModeDirective } from '@uni/ui/utils';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[uni-icon-button]',
  standalone: true,
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uni-icon-button',
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
  ],
})
export class IconButtonComponent extends ButtonBase {}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[uni-icon-button]',
  standalone: true,
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uni-icon-button',
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
  ],
})
export class IconAnchorComponent extends AnchorBase {}
