import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosEntity, AddToDo } from '@myworkspace/todos';

@Component({
  selector: 'myworkspace-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent implements OnInit {
 
  constructor(private store: Store<{ todos: {[id: string]: TodosEntity} }>) { }

  addToDo(title) {
    this.store.dispatch(
      AddToDo({ todoTitle: title })
    )
  }
  
  ngOnInit(): void {
  }

}
