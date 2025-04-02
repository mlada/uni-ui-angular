import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import type { NavigationLink } from '@uni/core';
import { PathPipe } from '@uni/core';

@Component({
  selector: 'uni-nav',
  standalone: true,
  imports: [RouterLink, PathPipe, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uni-nav',
  },
})
export class NavComponent {
  readonly links = input.required<NavigationLink[]>();
}
