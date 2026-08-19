import { Routes } from '@angular/router';


export const FEATURE_ROUTES: Routes = [
  {
    path: 'todo',
    loadComponent: () => import('@features/todo/pages/create-todo/create-todo').then(m => m.CreateTodo),
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];
