import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageService {

  public busCreate = new Subject<string>();
  public busUpdate = new Subject<Todo>();

  constructor() { }
}
