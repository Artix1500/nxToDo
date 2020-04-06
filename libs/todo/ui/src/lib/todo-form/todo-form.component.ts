import { Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'myworkspace-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoFormComponent{
  constructor(private fb: FormBuilder) { }

  @Output() 
  addToDo = new EventEmitter<string>();

  todoForm = this.fb.group({
    title: ['', Validators.required],
  });

  onSubmit() {
    this.addToDo.emit(this.todoForm.get('title').value);
    this.todoForm.get('title').reset();
  }
}
