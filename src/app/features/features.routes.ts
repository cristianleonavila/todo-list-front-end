import { Routes } from '@angular/router';


export const FEATURE_ROUTES: Routes = [
  {
    path: 'todo',
    loadComponent: () => import('@features/todo/pages/todo-component').then(m => m.TodoComponent),
  },
  {
    path: 'todo/:id',
    loadComponent: () => import('@features/todo/pages/todo-component').then(m => m.TodoComponent),
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];
