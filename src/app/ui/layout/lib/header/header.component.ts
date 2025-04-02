import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PathPipe, PATHS } from '@uni/core';
import { ContainerComponent } from '@uni/ui/container';
import { LogoComponent } from '@uni/ui/icons';

@Component({
  selector: 'uni-header',
  standalone: true,
  imports: [LogoComponent, ContainerComponent, RouterLink, PathPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly paths = PATHS;
}
