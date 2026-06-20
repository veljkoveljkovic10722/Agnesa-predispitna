import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap, map, startWith } from 'rxjs';
import { NgxScrollAnimationsDirective } from 'ngx-scroll-animations';
import { BooksService } from '../../services/books.service';
import { PublishersService } from '../../services/publishers.service';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { IBook } from '../../interfaces/i-book';
import { IPublisher } from '../../interfaces/i-publisher';
import { MATERIAL_MODULES } from '../../shared';
import { BookCoverComponent } from './sections/book-cover/book-cover.component';
import { BookInfoComponent } from './sections/book-info/book-info.component';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [AsyncPipe, RouterLink, PageBannerComponent, ...MATERIAL_MODULES, NgxScrollAnimationsDirective,
    BookCoverComponent, BookInfoComponent],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  protected readonly route = inject(ActivatedRoute);
  protected readonly booksService = inject(BooksService);
  protected readonly publishersService = inject(PublishersService);

  protected readonly pageData$ = this.route.paramMap.pipe(
    map((params) => Number(params.get('id'))),
    switchMap((id) =>
      this.booksService.getBookById(id).pipe(
        switchMap((book) =>
          this.publishersService.getPublisherById(book?.publisherId ?? 0).pipe(
            map((publisher) => ({ loading: false, book, publisher })),
            startWith({
              loading: true,
              book: undefined as IBook | undefined,
              publisher: undefined as IPublisher | undefined
            })
          )
        ),
        startWith({
          loading: true,
          book: undefined as IBook | undefined,
          publisher: undefined as IPublisher | undefined
        })
      )
    )
  );
}
