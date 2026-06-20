import { Component, input } from '@angular/core';
import { IBook } from '../../../../interfaces/i-book';
import { IPublisher } from '../../../../interfaces/i-publisher';
import { MATERIAL_MODULES } from '../../../../shared';

@Component({
  selector: 'app-book-info',
  standalone: true,
  imports: [ ...MATERIAL_MODULES],
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css'
})
export class BookInfoComponent {
  readonly book = input.required<IBook>();
  readonly publisher = input<IPublisher | undefined>(undefined);
  readonly stars = [1, 2, 3, 4, 5];

  get discountedPrice(): number {
    return Math.round(this.book().price * (100 - this.book().discount) / 100);
  }
}
