import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy} from '@angular/core';
import { TodosEntity } from '@myworkspace/todo-app/domain';

@Component({
  selector: 'myworkspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit, OnChanges {
  @Input() todos: TodosEntity[];
  todosDone: TodosEntity[];
  todosNotDone: TodosEntity[];

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    const doneIds: string[] = Object.keys(this.todos).filter(id => {
      return this.todos[id].done;
    })

    this.todosDone = Object.keys(this.todos)
      .filter(key => !doneIds.includes(key))
      .reduce((obj, key) => {
        return [
          ...obj,
          this.todos[key]
        ];
      }, []);

    this.todosNotDone = Object.keys(this.todos)
      .filter(key => doneIds.includes(key))
      .reduce((obj, key) => {
        return [
          ...obj,
          this.todos[key]
        ];
      }, []);
  }
}
