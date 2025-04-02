import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TitleComponent } from '@uni/ui/title';

@Component({
  selector: 'uni-must-buy-tour',
  standalone: true,
  imports: [NgOptimizedImage, TitleComponent],
  templateUrl: './must-buy-tour.component.html',
  styleUrl: './must-buy-tour.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MustBuyTourComponent {}
