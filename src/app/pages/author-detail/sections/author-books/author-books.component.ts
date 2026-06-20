import { Component, input } from '@angular/core';
import { IBook } from '../../../../interfaces/i-book';

@Component({
  selector: 'app-author-books',
  standalone: true,
  imports: [],
  templateUrl: './author-books.component.html',
  styleUrl: './author-books.component.css'
})
export class AuthorBooksComponent {
  readonly books = input.required<IBook[]>();
}
