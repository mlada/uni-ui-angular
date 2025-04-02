import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@uni/ui/layout').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@uni/ui/layout').then((m) => m.HeaderComponent),
        outlet: 'header',
      },
      {
        path: '',
        loadComponent: () => import('@uni/ui/layout').then((m) => m.FooterComponent),
        outlet: 'footer',
      },
    ],
  },
];