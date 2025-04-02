import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { FormControl } from '@angular/forms';

import { ExtractChangesDirective } from '@uni/core';
import type { SearchFieldOptions } from '@uni/search/common';
import { CheckboxComponent } from '@uni/ui/checkbox';

export type FilterDirectOptions = SearchFieldOptions;

@Component({
  selector: 'uni-filter-free-cancellation',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './filter-free-cancellation.component.html',
  styleUrl: './filter-free-cancellation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: ExtractChangesDirective,
      inputs: ['control'],
    },
  ],
})
export class FilterFreeCancellationComponent {
  readonly control = input.required<FormControl<boolean>>();
  readonly options = input.required<FilterDirectOptions>();
}
