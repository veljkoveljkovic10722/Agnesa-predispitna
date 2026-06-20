import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'books',
        loadComponent: () => import('./pages/books/books.component').then(m => m.BooksComponent)
      },
      {
        path: 'books/:id',
        loadComponent: () => import('./pages/book-detail/book-detail.component').then(m => m.BookDetailComponent)
      },
      {
        path: 'authors',
        loadComponent: () => import('./pages/authors/authors.component').then(m => m.AuthorsComponent)
      },
      {
        path: 'authors/:id',
        loadComponent: () => import('./pages/author-detail/author-detail.component').then(m => m.AuthorDetailComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
      },
      {
        path: 'author',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
      }
    ]
  },
   { path: '**', redirectTo: 'home' }
];
