import type { Routes } from '@angular/router';

import { PATHS } from '@uni/core';

export const documentsRoutes: Routes = [
  {
    path: PATHS.rules,
    title: $localize`:Documents Rules:Rules for using the site`,
    loadComponent: () => import('@uni/development/page').then((m) => m.DevelopmentPageComponent),
  },
  {
    path: PATHS.terms,
    title: $localize`:Documents Terms:Conditions for participation in the program`,
    loadComponent: () => import('@uni/development/page').then((m) => m.DevelopmentPageComponent),
  },
  {
    path: PATHS.documents,
    title: $localize`:Documents All:Documents`,
    loadComponent: () => import('@uni/development/page').then((m) => m.DevelopmentPageComponent),
  },
  {
    path: PATHS.faq,
    title: $localize`:Documents FAQ:FAQ`,
    loadComponent: () => import('@uni/development/page').then((m) => m.DevelopmentPageComponent),
  },
  {
    path: PATHS.cards,
    title: $localize`:Cards:Application`,
    loadComponent: () => import('@uni/development/page').then((m) => m.DevelopmentPageComponent),
  },
  {
    path: PATHS.login,
    title: $localize`:Login Title:Sign in`,
    loadComponent: () => import('@uni/development/page').then((m) => m.DevelopmentPageComponent),
  },
  {
    path: PATHS.registration,
    title: $localize`:Registration Title:Sign up`,
    loadComponent: () => import('@uni/development/page').then((m) => m.DevelopmentPageComponent),
  },
];
