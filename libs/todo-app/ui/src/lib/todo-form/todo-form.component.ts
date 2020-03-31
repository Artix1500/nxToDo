import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToDo } from '@myworkspace/todo-app/data-access';
import { TodosEntity } from '@myworkspace/todo-app/domain';

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
