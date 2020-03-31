import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveToDo, DoneToDo, EditToDo } from '@myworkspace/todo-app/data-access';
import { TodosEntity } from '@myworkspace/todo-app/domain';

@Component({
  selector: 'myworkspace-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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