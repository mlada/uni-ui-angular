import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ErrorsLinkComponent } from '@uni/errors/ui/links';
import { ContainerComponent } from '@uni/ui/container';
import { HeadlineComponent } from '@uni/ui/headline';
import { TitleComponent } from '@uni/ui/title';

@Component({
  selector: 'uni-server-error-page',
  standalone: true,
  imports: [ContainerComponent, HeadlineComponent, TitleComponent, ErrorsLinkComponent],
  templateUrl: './server-error-page.component.html',
  styleUrls: ['./server-error-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerErrorPageComponent {}
