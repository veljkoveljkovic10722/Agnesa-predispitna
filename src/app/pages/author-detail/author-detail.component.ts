import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, switchMap, map, startWith } from 'rxjs';
import { NgxScrollAnimationsDirective } from 'ngx-scroll-animations';
import { AuthorsService } from '../../services/authors.service';
import { BooksService } from '../../services/books.service';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { IAuthor } from '../../interfaces/i-author';
import { IBook } from '../../interfaces/i-book';
import { MATERIAL_MODULES } from '../../shared';
import { AuthorSidebarComponent } from './sections/author-sidebar/author-sidebar.component';
import { AuthorBioComponent } from './sections/author-bio/author-bio.component';
import { AuthorBooksComponent } from './sections/author-books/author-books.component';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [AsyncPipe, PageBannerComponent, ...MATERIAL_MODULES, NgxScrollAnimationsDirective,
    AuthorSidebarComponent, AuthorBioComponent, AuthorBooksComponent],
  templateUrl: './author-detail.component.html'
})
export class AuthorDetailComponent {
  protected readonly route = inject(ActivatedRoute);
  protected readonly authorsService = inject(AuthorsService);
  protected readonly booksService = inject(BooksService);

  protected readonly pageData$ = this.route.paramMap.pipe(
    map((params) => Number(params.get('id'))),
    switchMap((id) =>
      combineLatest([
        this.authorsService.getAuthorById(id),
        this.booksService.getBooksByAuthor(id)
      ]).pipe(
        map(([author, books]) => ({ loading: false, author, books })),
        startWith({ loading: true, author: undefined as IAuthor | undefined, books: [] as IBook[] })
      )
    )
  );
}
