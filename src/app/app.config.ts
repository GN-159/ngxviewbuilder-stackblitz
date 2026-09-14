import { ApplicationConfig,  provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideNgxViewBuilderRuntime } from '@ngxviewbuilder/runtime';
import { routes } from './app.routes';
import { provideNgxViewBuilderTemplates } from '@ngxviewbuilder/plugin-templates';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideZonelessChangeDetection(),
    provideNgxViewBuilderRuntime({ preloadRuntimeServices: true }),
    provideNgxViewBuilderTemplates(),
  ],
};