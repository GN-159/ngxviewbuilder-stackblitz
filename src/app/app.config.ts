import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideNgxViewBuilderRuntime } from 'ngx-view-builder';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideNgxViewBuilderRuntime({ preloadRuntimeServices: true }),
  ],
};