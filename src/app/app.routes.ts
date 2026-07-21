import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'builder' },
  {
    path: 'builder',
    loadComponent: () =>
      import('./pages/builder-page/builder-page.component').then((m) => m.BuilderPageComponent),
  },
  {
    path: 'runtime',
    loadComponent: () =>
      import('./pages/runtime-page/runtime-page.component').then((m) => m.RuntimePageComponent),
  },
  { path: '**', redirectTo: 'builder' },
];
