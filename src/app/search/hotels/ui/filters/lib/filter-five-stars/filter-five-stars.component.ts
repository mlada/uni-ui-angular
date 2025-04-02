import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { FormControl } from '@angular/forms';

import { ExtractChangesDirective } from '@uni/core';
import type { SearchFieldOptions } from '@uni/search/common';
import { CheckboxComponent } from '@uni/ui/checkbox';

export type FilterBaggageOptions = SearchFieldOptions;

@Component({
  selector: 'uni-filter-five-stars',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './filter-five-stars.component.html',
  styleUrl: './filter-five-stars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: ExtractChangesDirective,
      inputs: ['control'],
    },
  ],
})
export class FilterFiveStarsComponent {
  readonly control = input.required<FormControl<boolean>>();
  readonly options = input.required<FilterBaggageOptions>();
}
