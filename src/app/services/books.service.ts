import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IBook } from '../interfaces/i-book';
import { IBookFilters } from '../interfaces/i-book-filters';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private readonly http = inject(HttpClient);

  private readonly books$ = this.http.get<IBook[]>('/data/books.json');

  getBooks(): Observable<IBook[]> {
    return this.books$;
  }

getBookById(id: number): Observable<IBook | undefined> {
    return this.books$.pipe(
      map(books => books.find(b => b.id === id))
    );
  }

  getBooksByAuthor(authorId: number): Observable<IBook[]> {
    return this.books$.pipe(
      map(books => books.filter(b => b.authorId === authorId))
    );
  }

  getFilteredBooks(filters: IBookFilters): Observable<IBook[]> {
    return this.books$.pipe(map(books => this.applyFilters(books, filters)));
  }

  private applyFilters(books: IBook[], filters: IBookFilters): IBook[] {
    let result = books;

    const q = filters.keyword.toLowerCase();
    if (q) result = result.filter(b =>
      b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
    );

    if (filters.genre)          result = result.filter(b => b.genre === filters.genre);
    if (filters.priceFrom != null) result = result.filter(b => b.price >= filters.priceFrom!);
    if (filters.priceTo != null)   result = result.filter(b => b.price <= filters.priceTo!);
    if (filters.rating != null)    result = result.filter(b => b.rating >= filters.rating!);
    if (filters.isDiscounted)   result = result.filter(b => b.discount > 0);

    switch (filters.sortBy) {
      case 'name_asc':        return result.sort((a, b) => a.title.localeCompare(b.title, 'sr'));
      case 'price_asc':       return result.sort((a, b) => a.price - b.price);
      case 'price_desc':      return result.sort((a, b) => b.price - a.price);
      case 'rating':          return result.sort((a, b) => b.rating - a.rating);
      case 'publicationYear': return result.sort((a, b) => b.publicationYear - a.publicationYear);
      default:                return result;
    }
  }
}
