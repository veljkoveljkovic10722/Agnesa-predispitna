import { Component, input, output, signal } from '@angular/core';
import { MATERIAL_MODULES } from '../../../../shared';
import { IBookFilters, DEFAULT_BOOK_FILTERS } from '../../../../interfaces/i-book-filters';

@Component({
  selector: 'app-side-filter-sort',
  standalone: true,
  imports: [...MATERIAL_MODULES],
  templateUrl: './side-filter-sort.component.html',
  styleUrl: './side-filter-sort.component.css',
})
export class SideFilterSortComponent {
  readonly availableGenres = input<string[]>([]);
  readonly filterApplied = output<IBookFilters>();

  readonly sortOptions = [
    { value: '',               label: 'Podrazumevano' },
    { value: 'name_asc',       label: 'Naziv A–Ž' },
    { value: 'price_asc',      label: 'Cena rastuća' },
    { value: 'price_desc',     label: 'Cena opadajuća' },
    { value: 'rating',         label: 'Ocena' },
    { value: 'publicationYear', label: 'Godina izdanja' },
  ];

  readonly ratingOptions = [
    { value: null, label: 'Sve' },
    { value: 3,    label: '3 i više' },
    { value: 4,    label: '4 i više' },
    { value: 5,    label: '5' },
  ];

  readonly pending = signal<IBookFilters>({ ...DEFAULT_BOOK_FILTERS });

  set<K extends keyof IBookFilters>(key: K, value: IBookFilters[K]): void {
    this.pending.update(f => ({ ...f, [key]: value }));
  }

  setPrice(key: 'priceFrom' | 'priceTo', raw: string): void {
    const n = +raw;
    this.set(key, n > 0 ? n : null);
  }

  apply(): void {
    this.filterApplied.emit(this.pending());
  }

  reset(): void {
    this.pending.set({ ...DEFAULT_BOOK_FILTERS });
    this.filterApplied.emit({ ...DEFAULT_BOOK_FILTERS });
  }
}
