import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, inject, input } from '@angular/core';

import type { CoerceBoolean } from '@uni/core';
import { ExtraClassService } from '@uni/core';

@Directive({
  selector: 'uni-container[uniMobile]',
  standalone: true,
  providers: [ExtraClassService],
})
export class MobileDirective {
  private readonly extraClassService = inject(ExtraClassService);

  readonly mobile = input<CoerceBoolean, CoerceBoolean>(undefined, {
    alias: 'uniMobile',
    transform: (value) => {
      this.extraClassService.patch('mobile-no-gutter', coerceBooleanProperty(value));

      return value;
    },
  });
}
