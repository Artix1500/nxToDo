import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { DataPersistence } from '@nrwl/angular';
import * as fromTodos from './todos.reducer';
import * as TodosActions from './todos.actions';
import { TodosDataService } from '../services/todos-data.service';

import { Effect } from '@ngrx/effects';

@Injectable()
export class TodosEffects {

  @Effect()
  loadTodos$ = this.dp.fetch(
    TodosActions.loadTodos,
    {
      run: (action) => {
        return  TodosActions.loadTodosSuccess(  this.todosDataService.getTodos() );
      },
      onError: (action, error) => {
        console.error('Error', error);
        return TodosActions.loadTodosFailure({ error });
      }
    }
  );

  constructor(
    private dp: DataPersistence<fromTodos.TodosPartialState>,
    private todosDataService: TodosDataService
    ) {}
}
