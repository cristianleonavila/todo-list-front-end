import { Routes } from '@angular/router';


export const FEATURE_ROUTES: Routes = [
  {
    path: 'todo',
    loadComponent: () => import('@features/todo/pages/create-todo/create-todo').then(m => m.CreateTodo),
  },
  {
    path: 'todos',
    loadComponent: () => import('@features/todo/pages/todo-list/todo-list').then(m => m.TodoList),
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];
