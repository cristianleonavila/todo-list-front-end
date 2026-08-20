import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateTodoRequest } from '../models/create-todo-request';
import { Observable } from 'rxjs';
import { CreateTodoResponse } from '../models/create-todo-response';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private http = inject(HttpClient);

  createTodo(request: CreateTodoRequest): Observable<CreateTodoResponse> {
    return this.http.post<CreateTodoResponse>(
      `${environment.backend}/todos`,
      request,
      {
        withCredentials: true
      });
  }
}
