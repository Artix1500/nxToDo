import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as TodosActions from './todos.actions';
import { Todos , TodosDict} from '@myworkspace/todo/domain';
import { getAllTodos } from './todos.selectors'
@Injectable()
export class ToDosFacade { 
	constructor(private store: Store<{ todos: TodosDict }>) {}
 
  addToDo(title) {
    this.store.dispatch(
      TodosActions.AddToDo({ todoTitle: title })
    )
  }

  onRemoveToDo(id) {
    this.store.dispatch(
      TodosActions.RemoveToDo({ id: id })
    );
  }

  onDoneToDo(id) {
    this.store.dispatch(
      TodosActions.DoneToDo({ id: id })
    );
  }

  onEditToDo({todo, title}) {
    todo = {...todo, title: title};
    this.store.dispatch(
      TodosActions.EditToDo({ todo: todo })
    );
	}
	
	getToDos(){
		return this.store.select('todos');
  }
  
  loadToDos(){
    this.store.dispatch(TodosActions.loadTodos());
  }
}
