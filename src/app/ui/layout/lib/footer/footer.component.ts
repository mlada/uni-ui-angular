import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContainerComponent } from '@uni/ui/container';
import { TitleComponent } from '@uni/ui/title';

import { FooterCashbackComponent } from './footer-cashback/footer-cashback.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';

@Component({
  selector: 'uni-footer',
  standalone: true,
  imports: [ContainerComponent, TitleComponent, FooterLinksComponent, FooterCashbackComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
