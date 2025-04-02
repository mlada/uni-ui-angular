import { ChangeDetectionStrategy, Component } from '@angular/core';

import type { NavigationLink } from '@uni/core';
import { PATHS } from '@uni/core';
import { HeadlineComponent } from '@uni/ui/headline';
import { NavComponent } from '@uni/ui/nav';

@Component({
  selector: 'uni-promo',
  standalone: true,
  imports: [HeadlineComponent, NavComponent],
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoComponent {
  readonly links: NavigationLink[] = [
    {
      route: PATHS.home,
      label: $localize`:Home Nav:Avia`,
      suffix: '10%',
    },
    {
      route: PATHS.homeHotels,
      label: $localize`:Home Nav:Hotels`,
      suffix: '10%',
    },
    {
      route: PATHS.homeTours,
      label: $localize`:Home Nav:Tours`,
      suffix: '4%',
    },
    {
      route: PATHS.homeRailways,
      label: $localize`:Home Nav:Railway`,
      suffix: '5%',
    },
  ];
}
