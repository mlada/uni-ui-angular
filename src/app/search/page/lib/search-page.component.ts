import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContainerComponent } from '@uni/ui/container';

@Component({
  selector: 'uni-search-page',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {}
