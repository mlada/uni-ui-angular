import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import type { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';

import { httpInterceptors, provideCurrency, provideMetrics } from '@uni/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
      withComponentInputBinding(),
    ),
    provideHttpClient(withFetch(), withInterceptors(httpInterceptors)),
    provideClientHydration(),
    provideCurrency('RUB'),
    provideMetrics({
      counter: 97634082,
      ids: ['G-W88RSN32B9'],
      domains: ['uni-ui.fafn.ru', 'fafn.ru'],
      paths: [],
    }),
  ],
};
