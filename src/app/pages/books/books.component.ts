import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BookCardComponent } from '../../shared/components/book-card/book-card.component';
import { BooksService } from '../../services/books.service';
import { NgxScrollAnimationsDirective } from 'ngx-scroll-animations';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { MATERIAL_MODULES } from '../../shared';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [AsyncPipe, ...MATERIAL_MODULES, BookCardComponent, NgxScrollAnimationsDirective, PageBannerComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  protected readonly booksService = inject(BooksService);
  protected readonly books$ = this.booksService.getBooks();
}
