import { Directive } from '@angular/core';

@Directive({
  selector: '[uniInputSuffix]',
  standalone: true,
  host: {
    class: 'uni-input-suffix',
    '[style.margin-right]': '"12px"',
  },
})
export class InputSuffixDirective {}
