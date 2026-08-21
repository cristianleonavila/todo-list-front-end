import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';
import Login from '@features/auth/pages/login/login';


export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'test-form-validation',
    loadComponent: () => import('@tests/test-form-validation/test-form-validation')
  },
  {
    path: 'test-datatables',
    loadComponent: () => import('@tests/data-tables-example/data-tables-example')
  },{
    path: 'test-ag-angular',
    loadComponent: () => import('@tests/ag-grid-example/ag-grid-example')
  },
  {
    path: 'main',
    canActivate: [authGuard],
    loadComponent: () => import('@layout/layout'),
    loadChildren: () => import('@features/features.routes').then(m => m.FEATURE_ROUTES)
  }
];
