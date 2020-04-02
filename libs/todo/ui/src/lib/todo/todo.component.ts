import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { Todos } from '@myworkspace/todo/domain';

@Component({
  selector: 'myworkspace-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() 
  todo: Todos;
  
  edit = false;

  @Output()
  onRemoveToDo = new EventEmitter<string>();

  @Output()
  onDoneToDo = new EventEmitter<string>();

  @Output()
  onEditToDo = new EventEmitter<{todo: Todos, title: string}>();


  handleEdit(title) {
    this.onEditToDo.emit({todo: this.todo, title})
    this.edit = false;
  }
  
  startEdit(){
    this.edit = true;
  }
}
