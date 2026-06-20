import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  standalone: true,
  template: `
    <div class="page-banner py-5 px-4 text-center text-white">
      <div class="banner-content mx-auto">
        <h1 class="banner-title m-0 mb-3 fs-1 fw-bold">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="banner-subtitle m-0 mb-0 fs-5">{{ subtitle() }}</p>
        }
      </div>
    </div>
  `,
  styleUrl: './page-banner.component.css'
})
export class PageBannerComponent {
  title = input<string>('');
  subtitle = input<string>('');
}
