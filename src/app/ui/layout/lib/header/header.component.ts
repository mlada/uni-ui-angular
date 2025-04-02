import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PathPipe, PATHS } from '@uni/core';
import { AnchorComponent } from '@uni/ui/buttons';
import { ContainerComponent } from '@uni/ui/container';
import { HomeComponent, LogoComponent } from '@uni/ui/icons';

@Component({
  selector: 'uni-header',
  standalone: true,
  imports: [LogoComponent, HomeComponent, ContainerComponent, RouterLink, PathPipe, AnchorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly paths = PATHS;
}
