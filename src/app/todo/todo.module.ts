import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatTableModule, MatCheckboxModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule
  ],
  exports: [
    TodoListComponent,
    TodoFormComponent
  ],
  declarations: [TodoListComponent, TodoFormComponent],
  providers: [TodoService, MessageService]
})
export class TodoModule { }
