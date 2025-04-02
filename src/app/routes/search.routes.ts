import type { Routes } from '@angular/router';

import { PATHS, withChildNavigation } from '@uni/core';

export const searchRoutes: Routes = [
  {
    path: PATHS.searchAvia,
    title: $localize`:Search Page:Search for cheap flights`,
    loadComponent: () => import('@uni/search/page').then((m) => m.SearchPageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@uni/search/avia/ui/form').then((m) => m.SearchAviaFormComponent),
        outlet: 'form',
      },
      {
        path: '',
        loadComponent: () => import('@uni/search/avia/ui/results').then((m) => m.SearchResultsAviaComponent),
        outlet: 'results',
      },
      {
        path: '',
        loadComponent: () => import('@uni/search/avia/ui/filters').then((m) => m.SearchFiltersAviaComponent),
        outlet: 'filters',
      },
    ],
  },
  {
    path: PATHS.searchHotel,
    title: $localize`:Search Page:Search for cheap hotels`,
    loadComponent: () => import('@uni/search/page').then((m) => m.SearchPageComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@uni/search/hotels/ui/form').then((m) => m.SearchHotelFormComponent),
        outlet: 'form',
      },
      {
        path: '',
        loadComponent: () => import('@uni/search/hotels/ui/results').then((m) => m.SearchHotelsResultComponent),
        outlet: 'results',
      },
      {
        path: '',
        loadComponent: () => import('@uni/search/hotels/ui/filters').then((m) => m.SearchFiltersHotelsComponent),
        outlet: 'filters',
      },
    ],
  },
  {
    path: PATHS.searchTour,
    title: $localize`:Search Page:Search for cheap tours`,
    loadComponent: () => import('@uni/development/page').then((m) => m.DevelopmentPageComponent),
  },
  {
    path: PATHS.searchRailway,
    title: $localize`:Search Page:Search for cheap railways`,
    loadComponent: () => import('@uni/development/page').then((m) => m.DevelopmentPageComponent),
  },
].map(withChildNavigation(PATHS.search));
