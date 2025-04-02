import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, inject, input } from '@angular/core';

import type { CoerceBoolean } from '@uni/core';
import { ExtraClassService } from '@uni/core';

@Directive({
  selector: 'uni-container[uniFluid]',
  standalone: true,
  providers: [ExtraClassService],
})
export class FluidDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly fluid = input<CoerceBoolean, CoerceBoolean>(undefined, {
    alias: 'uniFluid',
    transform: (value) => {
      this.extraClassService.patch('fluid', coerceBooleanProperty(value));

      return value;
    },
  });
}
