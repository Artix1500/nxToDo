import { Injectable } from '@angular/core';
import { TodosEntity } from '@myworkspace/todo/domain'; 
import { v4 as uuidv4 } from 'uuid';

const LOCALSTORAGEKEY = '__app_todo_storage__';

@Injectable()
export class TodosDataService {

  getTodos(): {todos: {[id: string]: TodosEntity}} {
    return {
      todos: JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)),
    }
  }

  addToDo(todoTitle: string) : {todos: {[id: string]: TodosEntity}}{
    const id: string = uuidv4();
    const todo: TodosEntity = {
      id: id,
      title: todoTitle,
      done: false,
    };
      
    const newTodos: {[id: string]: TodosEntity} = { ...this.getTodos().todos };
    newTodos[id] = todo;
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));
    return this.getTodos() 
  }

  editToDo(todo: TodosEntity) : {todos: {[id: string]: TodosEntity}}{
    const newTodos: {[id: string]: TodosEntity} = { ...this.getTodos().todos };
    newTodos[todo.id] = todo;
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));
    return this.getTodos() 
  }

  removeToDo(id: string) : {todos: {[id: string]: TodosEntity}}{
    const newTodos: {[id: string]: TodosEntity} = { ...this.getTodos().todos };
    delete newTodos[id];
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));
    return this.getTodos() 
  }
  
  doneToDo(id: string) : {todos: {[id: string]: TodosEntity}}{
    const newTodos: {[id: string]: TodosEntity} = { ...this.getTodos().todos };
    newTodos[id] = {
      ...newTodos[id], 
      done: !newTodos[id].done
    };
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));
    return this.getTodos() 
  }
}