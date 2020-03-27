import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodosEntity, AddToDo, RemoveToDo, DoneToDo, EditToDo } from '@myworkspace/todos';
import { Observable } from 'rxjs';

@Component({
  selector: 'myworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = {}

  constructor(private store: Store<{ todos: {[id: string]: TodosEntity} }>) {
    store.select('todos').subscribe(data => {
      this.todos= data.todos;
    });

    this.store.dispatch(
      AddToDo({ todoTitle: "title1" })
    );
    this.store.dispatch(
      AddToDo({ todoTitle: "title2" })
    );
    this.store.dispatch(
      AddToDo({ todoTitle: "title3" })
    );
    this.store.dispatch(
      AddToDo({ todoTitle: "title4" })
    );
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

  onEditToDo(todo) {
    todo = {...todo, title: todo.title + "NEW"};
    this.store.dispatch(
      EditToDo({ todo: todo })
    );
  }
}
