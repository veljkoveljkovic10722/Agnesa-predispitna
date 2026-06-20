import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IBook } from '../interfaces/i-book';

@Injectable({ providedIn: 'root' })
export class BooksService {
  protected readonly http = inject(HttpClient);

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('/data/books.json');
  }

  getBookById(id: number): Observable<IBook | undefined> {
    return this.getBooks().pipe(
      map((books) => books.find((book) => book.id === id))
    );
  }

  getBooksByAuthor(authorId: number): Observable<IBook[]> {
    return this.getBooks().pipe(
      map((books) => books.filter((book) => book.authorId === authorId))
    );
  }
}
