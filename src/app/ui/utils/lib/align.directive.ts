import { Directive, inject, input } from '@angular/core';

import { ExtraClassService, toClass } from '@uni/core';

import type { Align } from './types';

@Directive({
  selector: '[uniAlign]',
  standalone: true,
  providers: [ExtraClassService],
})
export class AlignDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly align = input<Align, Align>(undefined, {
    alias: 'uniAlign',
    transform: (value) => {
      this.extraClassService.update('align', toClass(value, 'align'));

      return value;
    },
  });
}
