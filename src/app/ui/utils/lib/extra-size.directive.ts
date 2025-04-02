import { Directive, inject, input } from '@angular/core';

import { ExtraClassService, toClass } from '@uni/core';

import type { ExtraSize } from './types';

@Directive({
  selector: '[uniSize]',
  standalone: true,
  providers: [ExtraClassService],
})
export class ExtraSizeDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly size = input<ExtraSize, ExtraSize>(undefined, {
    alias: 'uniSize',
    transform: (value) => {
      this.extraClassService.update('size', toClass(value, 'size'));

      return value;
    },
  });
}
