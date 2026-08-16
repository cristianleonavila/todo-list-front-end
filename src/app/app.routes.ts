import { Routes } from '@angular/router';
import Login from '@features/auth/pages/login/login';


export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'main',
    //canActive: [],
    loadComponent: () => import('@layout/layout'),
    loadChildren: () => import('@features/features.routes').then(m => m.FEATURE_ROUTES)
  }
];
