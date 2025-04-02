import { Directive } from '@angular/core';

@Directive({
  selector: '[uniInputPrefix]',
  standalone: true,
  host: {
    class: 'input-prefix',
    '[style.margin-left]': '"12px"',
  },
})
export class InputPrefixDirective {}
