import { Injectable } from '@angular/core';
import { TodosEntity } from '@myworkspace/todo/domain'; 

// @Injectable({
//   providedIn: 'root'
// })

const LOCALSTORAGEKEY = '__app_todo_storage__';

@Injectable()
export class TodosDataService {

  getTodos(): {todos: {[id: string]: TodosEntity}} {
    return {
      todos: JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)),
    }
  }

  setTodos(payload: any) {

  }
}