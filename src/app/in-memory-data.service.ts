import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 11, action: 'eat', dueDate: 1520672634000, done: false },
      { id: 12, action: 'work', dueDate: 1520672634000, done: false },
      { id: 13, action: 'run', dueDate: 1520672634000, done: false },
      { id: 14, action: 'todo', dueDate: 1520845434000, done: true },
      { id: 15, action: 'todo', dueDate: 1520845434000, done: false },
    ];
    return { todos };
  }
}