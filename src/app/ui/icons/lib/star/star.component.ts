import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'uni-star',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uni-star',
  },
})
export class StarComponent {}
