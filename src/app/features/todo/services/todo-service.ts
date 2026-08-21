import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TodoRequest } from '../models/todo-request';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Todo, TodoResponse } from '../models/todo-response';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private http = inject(HttpClient);

  createTodo(request: TodoRequest): Observable<TodoResponse> {
    return this.http.post<TodoResponse>(
      `${environment.backend}/todos`,
      request,
      {
        withCredentials: true
      });
  }

  updateTodo(todoId: string, request: TodoRequest) {
    return this.http.patch<TodoResponse>(
      `${environment.backend}/todos/${todoId}`,
      request,
      {
        withCredentials: true
      });
  }

  getById(id: string) {
    return this.http.get<TodoResponse>(
      `${environment.backend}/todos/${id}`,
      {
        withCredentials: true
      }
    );
  }

  getTodos() {
    return this.http.get<Todo[]>(
      `${environment.backend}/todos`,
      {
        withCredentials: true
      }
    );
  }
}
