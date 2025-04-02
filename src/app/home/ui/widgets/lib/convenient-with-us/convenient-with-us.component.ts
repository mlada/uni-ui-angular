import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardComponent } from '@uni/ui/cards';
import { HeadlineComponent } from '@uni/ui/headline';
import { TitleComponent } from '@uni/ui/title';

@Component({
  selector: 'uni-convenient-with-us',
  standalone: true,
  imports: [NgOptimizedImage, TitleComponent, HeadlineComponent, CardComponent, NgOptimizedImage],
  templateUrl: './convenient-with-us.component.html',
  styleUrl: './convenient-with-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConvenientWithUsComponent {}
