import { Component, OnInit, Input } from '@angular/core';
import { TodosEntity } from '@myworkspace/todos';

@Component({
  selector: 'myworkspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: TodosEntity[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.todos);
  }

}
