import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component')
  },
  {
    path: 'news',
    loadComponent: () => import('./news/news.component'),
  },
  {
    path: 'employees',
    loadComponent: () => import('./employees/employees.component')
  },
  {
    path: 'faq',
    loadComponent: () => import('./faq/faq.component')
  }
];
