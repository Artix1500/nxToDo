import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TodosDict, Todos } from '@myworkspace/todo/domain'; 
import { v4 as uuidv4 } from 'uuid'
import { delay, map } from 'rxjs/operators';
import { ToDosFacade } from '../+state/todos.facade'
const LOCALSTORAGEKEY = '__app_todo_storage__';

@Injectable()
export class TodosDataService {
  constructor(private toDosFacade: ToDosFacade) { }

  localStore$: Observable<{todos: TodosDict}>  = of({
    todos: JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)),
  }).pipe(delay(100))

  getTodos$(): Observable<{todos: TodosDict}> {
    return of({
      todos: JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)),
    }).pipe(delay(300))
  }

  addToDo(todoTitle: string) : void{
    const id: string = uuidv4();
    const todo: Todos = {
      id: id,
      title: todoTitle,
      done: false,
    };
    const newTodos: TodosDict = { ...JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)) };
    newTodos[id] = todo;
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));
    this.toDosFacade.loadToDos();
  }

  editToDo(todo: Todos) : void{
    const newTodos: TodosDict = { ...JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)) };
    newTodos[todo.id] = todo;
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));
    this.toDosFacade.loadToDos();
  }

  removeToDo(id: string) : void{
    const newTodos: TodosDict = { ...JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)) };
    delete newTodos[id];
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));
    this.toDosFacade.loadToDos();
  }
  
  doneToDo(id: string) : void{
    const newTodos: TodosDict = { ...JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)) };
    newTodos[id] = {
      ...newTodos[id], 
      done: !newTodos[id].done
    };
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));
    this.toDosFacade.loadToDos();
  }
}