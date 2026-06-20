import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map, startWith } from 'rxjs';
import { NgxScrollAnimationsDirective } from 'ngx-scroll-animations';
import { BooksService } from '../../../../services/books.service';
import { BookCardComponent } from '../../../../shared/components/book-card/book-card.component';
import { MATERIAL_MODULES } from '../../../../shared';
import { IBook } from '../../../../interfaces/i-book';

@Component({
  selector: 'app-featured-books',
  standalone: true,
  imports: [AsyncPipe, ...MATERIAL_MODULES, BookCardComponent, NgxScrollAnimationsDirective],
  templateUrl: './featured-books.component.html',
  styleUrl: './featured-books.component.css'
})
export class FeaturedBooksComponent {
  private readonly booksService = inject(BooksService);
  protected readonly featuredBooks$ = this.booksService.getBooks().pipe(
    map((books) => ({ loading: false, books: books.slice(0, 4) })),
    startWith({ loading: true, books: [] as IBook[] })
  );
}
