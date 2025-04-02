import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PathPipe, PATHS } from '@uni/core';
import { AnchorComponent } from '@uni/ui/buttons';
import { CardComponent } from '@uni/ui/cards';
import { HeadlineComponent } from '@uni/ui/headline';
import { TitleComponent } from '@uni/ui/title';

@Component({
  selector: 'uni-connect',
  standalone: true,
  imports: [NgOptimizedImage, TitleComponent, HeadlineComponent, CardComponent, AnchorComponent, RouterLink, PathPipe],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectComponent {
  readonly paths = PATHS;
}
