import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PathPipe, PATHS } from '@uni/core';
import { AnchorComponent } from '@uni/ui/buttons';
import { HeadlineComponent } from '@uni/ui/headline';
import { TitleComponent } from '@uni/ui/title';

@Component({
  selector: 'uni-traveling',
  standalone: true,
  imports: [NgOptimizedImage, TitleComponent, HeadlineComponent, AnchorComponent, RouterLink, PathPipe],
  templateUrl: './traveling.component.html',
  styleUrl: './traveling.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravelingComponent {
  readonly paths = PATHS;
}
