import { Directive, inject, input } from '@angular/core';

import { ExtraClassService, toClass } from '@uni/core';

import type { Width } from './types';

@Directive({
  selector: '[uniWidth]',
  standalone: true,
  providers: [ExtraClassService],
})
export class WidthDirective {
  private readonly extraClassService = inject(ExtraClassService, { self: true });

  readonly width = input<Width, Width>(undefined, {
    alias: 'uniWidth',
    transform: (value) => {
      this.extraClassService.update('width', toClass(value, 'width'));

      return value;
    },
  });
}
