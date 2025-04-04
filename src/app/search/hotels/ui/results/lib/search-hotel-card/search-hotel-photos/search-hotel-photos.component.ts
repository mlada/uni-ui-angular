import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, input } from '@angular/core';

import type { SearchHotel } from '@uni/search/hotels/common';

@Component({
  selector: 'uni-search-hotel-photos',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './search-hotel-photos.component.html',
  styleUrl: './search-hotel-photos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelPhotosComponent {
  private readonly elementRef = inject(ElementRef);

  readonly searchHotel = input.required<SearchHotel>();

  onSwipeLeft(): void {
    this.elementRef.nativeElement.scrollTo({ left: this.elementRef.nativeElement.scrollLeft + 320, behavior: 'smooth' });
  }

  onSwipeRight(): void {
    this.elementRef.nativeElement.scrollTo({ left: this.elementRef.nativeElement.scrollLeft - 320, behavior: 'smooth' });
  }
}
