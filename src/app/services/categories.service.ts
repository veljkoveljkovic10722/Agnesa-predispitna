import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/i-category';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private readonly http = inject(HttpClient);

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('/data/categories.json');
  }
}
