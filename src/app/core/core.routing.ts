import { Routes } from '@angular/router';


export const coreRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule),
  },
];
