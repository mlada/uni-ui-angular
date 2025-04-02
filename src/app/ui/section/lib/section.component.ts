import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { ExtraClassService, toClass } from '@uni/core';

export type SectionColor = 'smoke' | undefined;

@Component({
  selector: 'uni-section',
  standalone: true,
  template: '<ng-content/>',
  styleUrl: './section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExtraClassService],
})
export class SectionComponent {
  private readonly extraClassService = inject(ExtraClassService);

  readonly color = input<SectionColor, SectionColor>(undefined, {
    alias: 'uniColor',
    transform: (value) => {
      this.extraClassService.update('color', toClass(value, 'color'));

      return value;
    },
  });
}
