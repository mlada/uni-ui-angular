import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PathPipe, PATHS } from '@uni/core';

@Component({
  selector: 'uni-footer-links',
  standalone: true,
  imports: [RouterLink, PathPipe],
  templateUrl: './footer-links.component.html',
  styleUrl: './footer-links.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLinksComponent {
  protected readonly paths = PATHS;
}
