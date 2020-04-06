import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { Todos } from '@myworkspace/todo/domain';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'myworkspace-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  constructor(public _snackBar: MatSnackBar) {}

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

  removeToDo(todo){
    this.onRemoveToDo.emit(todo.id);
    this.openSnackBar(`Removed: ${todo.title}`, "CLOSE");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
