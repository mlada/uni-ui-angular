import { Directive, inject, input } from '@angular/core';

import { ExtraClassService, toClass } from '@uni/core';

import type { ButtonMode } from './types';

@Directive({
  selector: '[uniMode]',
  standalone: true,
  providers: [ExtraClassService],
})
export class ModeDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly mode = input<ButtonMode, ButtonMode>(undefined, {
    alias: 'uniMode',
    transform: (value) => {
      this.extraClassService.update('mode', toClass(value, 'mode'));

      return value;
    },
  });
}
