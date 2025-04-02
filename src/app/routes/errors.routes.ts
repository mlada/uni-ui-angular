import type { Routes } from '@angular/router';

import { PATHS } from '@uni/core';

export const errorsRoutes: Routes = [
  {
    path: PATHS.permissionDenied,
    title: 'Permission Denied',
    loadComponent: () => import('@uni/errors/permission-denied/page').then((m) => m.PermissionDeniedPageComponent),
  },
  {
    path: PATHS.serverError,
    title: 'Internal Server Error',
    loadComponent: () => import('@uni/errors/server-error/page').then((m) => m.ServerErrorPageComponent),
  },
  {
    path: '**',
    title: 'Page not found',
    loadComponent: () => import('@uni/errors/not-found/page').then((m) => m.NotFoundPageComponent),
  },
];
