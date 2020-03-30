import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosEntity, RemoveToDo, DoneToDo, EditToDo } from '@myworkspace/todos';


@Component({
  selector: 'myworkspace-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: TodosEntity;
  
  edit = false;

  constructor(private store: Store<{ todos: {[id: string]: TodosEntity} }>) { }

  ngOnInit(): void {
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

  onEditToDo(todo, title) {
    todo = {...todo, title: title};
    this.store.dispatch(
      EditToDo({ todo: todo })
    );
    this.edit = false;
  }

  handleEdit() {
    this.edit = true;
  }

}
