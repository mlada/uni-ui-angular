import 'hammerjs';

import type { ApplicationConfig } from '@angular/core';
import { mergeApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideHammer } from '@uni/core';

import { appConfig } from './app.config';

const browserConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideHammer()],
};

export const config = mergeApplicationConfig(appConfig, browserConfig);
