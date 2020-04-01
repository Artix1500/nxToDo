import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromTodos from './todos.reducer';
import * as TodosActions from './todos.actions';

@Injectable()
export class TodosEffects {
  // loadTodos$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TodosActions.loadTodos),
  //     fetch({
  //       run: action => {
  //         // Your custom service 'load' logic goes here. For now just return a success action...
  //         return TodosActions.loadTodosSuccess({ todos: [] });
  //       },

  //       onError: (action, error) => {
  //         console.error('Error', error);
  //         return TodosActions.loadTodosFailure({ error });
  //       }
  //     })
  //   )
  // );

  constructor(private actions$: Actions) {}
}
