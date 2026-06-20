import { Component, input } from '@angular/core';
import { IAuthor } from '../../../../interfaces/i-author';

@Component({
  selector: 'app-author-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './author-sidebar.component.html',
  styleUrl: './author-sidebar.component.css'
})
export class AuthorSidebarComponent {
  readonly author = input.required<IAuthor>();
}
