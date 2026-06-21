import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, map, startWith, switchMap } from 'rxjs';
import { BookCardComponent } from '../../shared/components/book-card/book-card.component';
import { BooksService } from '../../services/books.service';
import { CategoriesService } from '../../services/categories.service';
import { NgxScrollAnimationsDirective } from 'ngx-scroll-animations';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { MATERIAL_MODULES } from '../../shared';
import { SideFilterSortComponent } from './sections/side-filter-sort/side-filter-sort.component';
import { IBookFilters, DEFAULT_BOOK_FILTERS } from '../../interfaces/i-book-filters';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [AsyncPipe, ...MATERIAL_MODULES, BookCardComponent, NgxScrollAnimationsDirective, PageBannerComponent, SideFilterSortComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  private readonly booksService = inject(BooksService);
  private readonly categoriesService = inject(CategoriesService);

  private readonly filters$ = new BehaviorSubject<IBookFilters>({ ...DEFAULT_BOOK_FILTERS });

  readonly genres$ = this.categoriesService.getCategories().pipe(
    map(cats => cats.map(c => c.name))
  );

  readonly filteredBooks$ = this.filters$.pipe(
    switchMap(f => this.booksService.getFilteredBooks(f)),
    startWith(null)
  );

  onFilterApplied(filters: IBookFilters): void {
    this.filters$.next(filters);
  }
}
