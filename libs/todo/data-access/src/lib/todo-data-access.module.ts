import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {TODOS_FEATURE_KEY, reducer} from './+state/todos.reducer';
import { TodosEffects } from './+state/todos.effects';
import { ToDosFacade } from './+state/todos.facade';
import { TodosDataService } from './services/todos-data.service';
import { DataPersistence } from '@nrwl/angular';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TODOS_FEATURE_KEY, reducer),
    EffectsModule.forFeature([TodosEffects])
  ],
  providers: [
    ToDosFacade,
    TodosDataService,
    DataPersistence
  ]
})
export class TodoDataAccessModule {}

