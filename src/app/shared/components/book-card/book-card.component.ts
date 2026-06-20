import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL_MODULES } from '../..';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RouterLink, ...MATERIAL_MODULES],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  bookId = input<number>(0);
  title = input<string>('');
  author = input<string>('');
  price = input<number>(0);
  rating = input<number>(0);
  discount = input<number>(0);
  imageUrl = input<string>('');
  genre = input<string>('');

  get discountedPrice(): number {
    return Math.round(this.price() * (100 - this.discount()) / 100);
  }

  readonly stars = [1, 2, 3, 4, 5];
}
