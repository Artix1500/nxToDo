import { Component, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AddToDo, RemoveToDo, DoneToDo, EditToDo } from '@myworkspace/todo-app/data-access';
import { TodosEntity } from '@myworkspace/todo-app/domain';
import { Observable } from 'rxjs';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnChanges{
  todos = {}
  todosDone: TodosEntity[];
  todosNotDone: TodosEntity[];


  constructor(private store: Store<{ todos: {[id: string]: TodosEntity} }>) {
    store.select('todos').subscribe(data => {
      this.todos = data.todos;
      this.sortToDos();
    });
  }

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

  ngOnChanges(): void {
    this.sortToDos();
  }

  sortToDos(): void {
    const doneIds: string[] = Object.keys(this.todos).filter(id => {
      return this.todos[id].done;
    })

    this.todosDone = Object.keys(this.todos)
      .filter(key => doneIds.includes(key))
      .reduce((obj, key) => {
        return [
          ...obj,
          this.todos[key]
        ];
      }, []);

    this.todosNotDone = Object.keys(this.todos)
      .filter(key => !doneIds.includes(key))
      .reduce((obj, key) => {
        return [
          ...obj,
          this.todos[key]
        ];
      }, []);
  }

}
