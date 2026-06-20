import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { StoreGalleryComponent } from './sections/store-gallery/store-gallery.component';
import { FeaturedBooksComponent } from './sections/featured-books/featured-books.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { PublishersComponent } from './sections/publishers/publishers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, StoreGalleryComponent, FeaturedBooksComponent, AboutSectionComponent, PublishersComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
