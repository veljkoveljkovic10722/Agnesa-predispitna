import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IAuthor } from '../interfaces/i-author';

@Injectable({ providedIn: 'root' })
export class AuthorsService {
  protected readonly http = inject(HttpClient);

  getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>('/data/authors.json');
  }

  getAuthorById(id: number): Observable<IAuthor | undefined> {
    return this.getAuthors().pipe(
      map((authors) => authors.find((author) => author.id === id))
    );
  }
}
