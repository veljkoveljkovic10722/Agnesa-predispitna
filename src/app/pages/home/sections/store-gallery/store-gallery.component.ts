import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-store-gallery',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './store-gallery.component.html',
  styleUrl: './store-gallery.component.css'
})
export class StoreGalleryComponent {}
