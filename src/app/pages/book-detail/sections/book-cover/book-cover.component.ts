import { Component, input } from '@angular/core';
import { IBook } from '../../../../interfaces/i-book';

@Component({
  selector: 'app-book-cover',
  standalone: true,
  imports: [],
  templateUrl: './book-cover.component.html',
  styleUrl: './book-cover.component.css'
})
export class BookCoverComponent {
  readonly book = input.required<IBook>();
}
