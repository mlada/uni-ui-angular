import { ChangeDetectionStrategy, Component } from '@angular/core';

import type { NavigationLink } from '@uni/core';
import { PATHS } from '@uni/core';
import { NavComponent } from '@uni/ui/nav';

@Component({
  selector: 'uni-errors-links',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './errors-link.component.html',
  styleUrls: ['./errors-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorsLinkComponent {
  readonly links: NavigationLink[] = [
    {
      route: PATHS.home,
      label: 'home',
    },
    {
      route: PATHS.documents,
      label: 'Documents',
    },
  ];
}
