import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AddToDo, RemoveToDo, DoneToDo, EditToDo, loadTodos } from './todos.actions';
import { TodosEntity } from '@myworkspace/todo/domain';

@Injectable()
export class ToDosFacade { 
	constructor(private store: Store<{ todos: {[id: string]: TodosEntity} }>) {}
 
  addToDo(title) {
    this.store.dispatch(
      AddToDo({ todoTitle: title })
    )
  }

  onRemoveToDo(id) {
    this.store.dispatch(
      RemoveToDo({ id: id })
    );
  }

  onDoneToDo(id) {
    this.store.dispatch(
      DoneToDo({ id: id })
    );
  }

  onEditToDo({todo, title}) {
    todo = {...todo, title: title};
    this.store.dispatch(
      EditToDo({ todo: todo })
    );
	}
	
	getToDos(){
		return this.store.select('todos');
  }
  
  loadToDos(){
    this.store.dispatch(loadTodos());
  }
}
