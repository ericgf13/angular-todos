import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    const url = `${environment.url_todos}/todos`;
    return this.http.get<Todo[]>(url);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const url = `${environment.url_todos}/todos/${todo.id}`;
    return this.http.delete<Todo>(url);
  }

  updateTodo(todo: Todo): Observable<any> {
    const url = `${environment.url_todos}/todos/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  createTodo(todo: Todo): Observable<any> {
    const url = `${environment.url_todos}/todos`;
    return this.http.post<Todo>(url, todo);
  }
}
