import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ErrorsLinkComponent } from '@uni/errors/ui/links';
import { ContainerComponent } from '@uni/ui/container';
import { HeadlineComponent } from '@uni/ui/headline';
import { TitleComponent } from '@uni/ui/title';

@Component({
  selector: 'uni-not-found-page',
  standalone: true,
  imports: [ContainerComponent, HeadlineComponent, TitleComponent, ErrorsLinkComponent],
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {}
