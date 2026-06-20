import { Component, input } from '@angular/core';
import { IAuthor } from '../../../../interfaces/i-author';

@Component({
  selector: 'app-author-bio',
  standalone: true,
  imports: [],
  templateUrl: './author-bio.component.html',
  styleUrl: './author-bio.component.css'
})
export class AuthorBioComponent {
  readonly author = input.required<IAuthor>();
}
