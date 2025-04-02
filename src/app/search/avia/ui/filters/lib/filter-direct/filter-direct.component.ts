import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { FormControl } from '@angular/forms';

import { ExtractChangesDirective } from '@uni/core';
import type { SearchFieldOptions } from '@uni/search/common';
import { CheckboxComponent } from '@uni/ui/checkbox';

export type FilterDirectOptions = SearchFieldOptions;

@Component({
  selector: 'uni-filter-direct',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './filter-direct.component.html',
  styleUrl: './filter-direct.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: ExtractChangesDirective,
      inputs: ['control'],
    },
  ],
})
export class FilterDirectComponent {
  readonly control = input.required<FormControl<boolean>>();
  readonly options = input.required<FilterDirectOptions>();
}
