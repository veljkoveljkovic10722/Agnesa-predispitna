import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPublisher } from '../interfaces/i-publisher';

@Injectable({ providedIn: 'root' })
export class PublishersService {
  private readonly http = inject(HttpClient);

  getPublisherById(id: number): Observable<IPublisher | undefined> {
    return this.http.get<IPublisher[]>('/data/publishers.json').pipe(
      map((publishers) => publishers.find((p) => p.id === id))
    );
  }
}
