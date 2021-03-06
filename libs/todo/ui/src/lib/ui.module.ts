import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [FormBuilder],
  declarations: [TodosComponent, TodoComponent, HeaderComponent, TodoFormComponent],
  exports: [TodosComponent, TodoComponent, HeaderComponent, TodoFormComponent]
})
export class UiModule { }
