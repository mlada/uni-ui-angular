import { Directive, inject, input } from '@angular/core';

import { ExtraClassService, toClass } from '@uni/core';

import type { Size } from './types';

@Directive({
  selector: '[uniSize]',
  standalone: true,
  providers: [ExtraClassService],
})
export class SizeDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly size = input<Size, Size>('medium', {
    alias: 'uniSize',
    transform: (value) => {
      this.extraClassService.update('size', toClass(value, 'size'));

      return value;
    },
  });
}
