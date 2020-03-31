import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodosComponent, TodoComponent, HeaderComponent, TodoFormComponent],
  exports: [TodosComponent, TodoComponent, HeaderComponent, TodoFormComponent]
})
export class UiModule {}
