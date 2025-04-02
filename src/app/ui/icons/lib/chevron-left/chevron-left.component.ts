import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'uni-chevron-left',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './chevron-left.component.html',
  styleUrl: './chevron-left.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChevronLeftComponent {}
