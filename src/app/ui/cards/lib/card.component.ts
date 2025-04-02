import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uni-card',
  standalone: true,
  imports: [],
  template: '<ng-content/>',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uni-card',
  },
})
export class CardComponent {}
