import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTodos from './+state/todos/todos.reducer';
import { TodosEffects } from './+state/todos/todos.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodos.TODOS_FEATURE_KEY, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodosModule {}
