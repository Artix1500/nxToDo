import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TodosDict, Todos } from '@myworkspace/todo/domain'; 
import { v4 as uuidv4 } from 'uuid'
import { delay, map } from 'rxjs/operators';

const LOCALSTORAGEKEY = '__app_todo_storage__';

@Injectable()
export class TodosDataService {
 

  getTodosObs(): Observable<{todos: TodosDict}> {
    return of({
      todos: JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)),
    }).pipe(delay(2000))
  }

  getTodos(): {todos: TodosDict} {
    return {
      todos: JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)),
    }
  }

  addToDo(todoTitle: string) : {todos: TodosDict}{
    const id: string = uuidv4();
    const todo: Todos = {
      id: id,
      title: todoTitle,
      done: false,
    };
      
    const newTodos: TodosDict = { ...this.getTodos().todos };
    newTodos[id] = todo;
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));
    return this.getTodos() 
  }

  editToDo(todo: Todos) : {todos: TodosDict}{
    const newTodos: TodosDict = { ...this.getTodos().todos };
    newTodos[todo.id] = todo;
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));
    return this.getTodos() 
  }

  removeToDo(id: string) : {todos: TodosDict}{
    const newTodos: TodosDict = { ...this.getTodos().todos };
    delete newTodos[id];
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));
    return this.getTodos() 
  }
  
  doneToDo(id: string) : {todos: TodosDict}{
    const newTodos: TodosDict = { ...this.getTodos().todos };
    newTodos[id] = {
      ...newTodos[id], 
      done: !newTodos[id].done
    };
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));
    return this.getTodos() 
  }
}