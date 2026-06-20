import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { AuthorCardComponent } from '../../shared/components/author-card/author-card.component';
import { AuthorsService } from '../../services/authors.service';
import { NgxScrollAnimationsDirective } from 'ngx-scroll-animations';
import { MATERIAL_MODULES } from '../../shared';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [AsyncPipe, ...MATERIAL_MODULES, PageBannerComponent, AuthorCardComponent, NgxScrollAnimationsDirective],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css',
})
export class AuthorsComponent {
  protected readonly authorsService = inject(AuthorsService);
  protected readonly authors$ = this.authorsService.getAuthors();
}
