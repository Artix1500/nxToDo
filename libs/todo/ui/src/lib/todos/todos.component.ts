import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { Todos } from '@myworkspace/todo/domain';

@Component({
  selector: 'myworkspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input() 
  todos: Todos[];
  
  @Input() 
  title: string;
  
  @Input() 
  done: boolean;
  

  @Output() 
  onRemoveToDo = new EventEmitter<string>();
  
  @Output() 
  onDoneToDo = new EventEmitter<string>();
  
  @Output() 
  onEditToDo = new EventEmitter<{todo: Todos, title: string}>();
  

  handleOnRemoveToDo = (id) => {
    this.onRemoveToDo.emit(id)
  }

  handleOnDoneToDo = (id) => {
    this.onDoneToDo.emit(id)
  }

  handleOnEditToDo = ({todo, title}) => {
    this.onEditToDo.emit({todo, title})
  }
}
