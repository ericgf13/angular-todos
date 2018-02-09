import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from '@angular/material';
import { switchMap, merge } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'action', 'dueDate', 'done', 'actions'];

  constructor(private todoService: TodoService, private messageService: MessageService) { }

  ngOnInit() {
    const obs1 = this.todoService.getTodos();
    const obs2 = this.messageService.busCreate;
    const obs = obs1.pipe(merge(obs2));

    obs.pipe(
      switchMap(_ => this.todoService.getTodos())
    ).subscribe(todos => this.dataSource.data = todos);

    /* Without merging the observables
    this.todoService.getTodos().subscribe(todos => this.dataSource.data = todos);

    this.messageService.busCreate.pipe(
      switchMap(message => {
        console.log(message);
        return this.todoService.getTodos();
      })
    ).subscribe(todos => this.dataSource.data = todos);
    */
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).pipe(
      switchMap(_ => this.todoService.getTodos())
    ).subscribe(todos => this.dataSource.data = todos);
  }

  setDone(todo: Todo): void {
    todo.done = !todo.done;
    this.todoService.updateTodo(todo).subscribe();
  }

  updateTodo(todo: Todo): void {
    const tmpTodo = Object.assign({}, todo);
    tmpTodo.dueDateFormatted = new Date(tmpTodo.dueDate);
    this.messageService.busUpdate.next(tmpTodo);
  }
}
