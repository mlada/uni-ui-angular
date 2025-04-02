import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  ConnectComponent,
  ConvenientWithUsComponent,
  MustBuyComponent,
  PromoComponent,
  QuestionsComponent,
  TravelingComponent,
} from '@uni/home/ui/widgets';
import { ContainerComponent } from '@uni/ui/container';
import { SectionComponent } from '@uni/ui/section';

@Component({
  selector: 'uni-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    SectionComponent,
    PromoComponent,
    MustBuyComponent,
    TravelingComponent,
    ConvenientWithUsComponent,
    ConnectComponent,
    QuestionsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
