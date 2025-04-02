import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import type { SearchFieldOptions } from '@uni/search/common';
import { InputComponent, InputControlComponent } from '@uni/ui/input';
import { LabelComponent } from '@uni/ui/label';

export type SearchPassengersOptions = SearchFieldOptions;

@Component({
  selector: 'uni-search-passengers',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, InputControlComponent, LabelComponent],
  templateUrl: './search-passengers.component.html',
  styleUrl: './search-passengers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPassengersComponent {
  readonly control = input.required<FormControl<number | undefined>>();
  readonly options = input.required<SearchPassengersOptions>();
}
