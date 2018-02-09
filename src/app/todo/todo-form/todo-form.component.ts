import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { MessageService } from '../message.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo = new Todo();

  constructor(private todoService: TodoService, private messageService: MessageService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.messageService.busUpdate.subscribe(t => this.todo = t);
  }

  submitTodo() {
    if (this.todo.dueDateFormatted) {
      this.todo.dueDate = this.todo.dueDateFormatted.getTime();
    }
    this.todoService.createTodo(this.todo).subscribe(_ => {
      this.messageService.busCreate.next('refresh');
      this.snackBar.open("TODO saved", "", {
        duration: 1000,
      });
    });
    this.todo = new Todo();
  }
}
