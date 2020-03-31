import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodosEntity } from '@myworkspace/todo-app/domain';

@Component({
  selector: 'myworkspace-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo: TodosEntity;
  edit = false;

  @Output() onRemoveToDo = new EventEmitter<string>();
  @Output() onDoneToDo = new EventEmitter<string>();
  @Output() onEditToDo = new EventEmitter<{todo: TodosEntity, title: string}>();

  handleEdit(title) {
    this.onEditToDo.emit({todo: this.todo, title})
    this.edit = false;
  }
  
  startEdit(){
    this.edit = true;
  }
}
