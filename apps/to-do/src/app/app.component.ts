import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AddToDo, RemoveToDo, DoneToDo, EditToDo } from '@myworkspace/todo-app/data-access';
import { TodosEntity } from '@myworkspace/todo-app/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'myworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  todos = {}

  constructor(private store: Store<{ todos: {[id: string]: TodosEntity} }>) {
    store.select('todos').subscribe(data => {
      this.todos = data.todos;
    });
  }

}
