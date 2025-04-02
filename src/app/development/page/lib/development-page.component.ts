import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContainerComponent } from '@uni/ui/container';
import { HeadlineComponent } from '@uni/ui/headline';

@Component({
  selector: 'uni-development-page',
  standalone: true,
  imports: [ContainerComponent, HeadlineComponent],
  templateUrl: './development-page.component.html',
  styleUrl: './development-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevelopmentPageComponent {}
