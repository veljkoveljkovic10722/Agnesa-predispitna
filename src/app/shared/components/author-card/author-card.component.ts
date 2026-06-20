import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL_MODULES } from '../..';

@Component({
  selector: 'app-author-card',
  standalone: true,
  imports: [RouterLink, ...MATERIAL_MODULES],
  templateUrl: './author-card.component.html',
  styleUrl: './author-card.component.css'
})
export class AuthorCardComponent {
  authorId = input<number>(0);
  name = input<string>('');
  birthYear = input<number>(0);
  bio = input<string>('');
  imageUrl = input<string>('https://placehold.co/200x200?text=Autor');
}
