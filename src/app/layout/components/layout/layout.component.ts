import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <main class="d-flex flex-column min-vh-100">
      <app-header />
      <section class="main-content flex-grow-1">
        <router-outlet />
      </section>
    </main>
    <app-footer />
  `,
  styleUrl: './layout.component.css'
})
export class LayoutComponent {}
