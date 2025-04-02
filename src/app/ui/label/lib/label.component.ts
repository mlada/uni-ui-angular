import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'uni-label,label[uni-label]',
  standalone: true,
  template: '<ng-content/>',
  styleUrl: './label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uni-label',
  },
})
export class LabelComponent {
  readonly elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
}
