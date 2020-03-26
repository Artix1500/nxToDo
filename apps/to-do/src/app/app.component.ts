import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodosEntity, AddToDo } from '@myworkspace/todos';
import { Observable } from 'rxjs';

@Component({
  selector: 'myworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$: Observable<TodosEntity[]>;

  constructor(private store: Store<{ todos: TodosEntity[] }>) {

    store.select('todos').subscribe(data => {
      console.log(data);
    });

    this.todos$ = this.store.pipe(select("todos"));

    this.todos$.subscribe((data)=>console.log(data));

    this.store.dispatch(
      AddToDo({ todo: { id: 99, title: "title", done: false } })
    ); 
  }
}
