import { Injectable } from '@angular/core';
import { DataPersistence } from '@nrwl/angular';
import * as fromTodos from './todos.reducer';
import * as TodosActions from './todos.actions';
import { TodosDataService } from '../services/todos-data.service';
import {  Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, tap } from 'rxjs/operators';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
        exhaustMap(action => this.todosDataService.getTodos$().pipe(
          map(
            response => TodosActions.loadTodosSuccess(response)
          )
        )
      )
    )
  );

  addToDo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.AddToDo),
        exhaustMap(action => this.todosDataService.addToDo(action.todoTitle).pipe(
          map(
            data => TodosActions.loadTodosSuccess(data)
          )
        )
      )
    )
  );

  EditToDo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.EditToDo),
        exhaustMap(action => this.todosDataService.editToDo(action.todo).pipe(
          map(
            data => TodosActions.loadTodosSuccess(data)
          )
        )
      )
    )
  );

  RemoveToDo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.RemoveToDo),
        exhaustMap(action => this.todosDataService.removeToDo(action.id).pipe(
          map(
            data => TodosActions.loadTodosSuccess(data)
          )
        )
      )
    )
  );

  DoneToDo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.DoneToDo),
        exhaustMap(action => this.todosDataService.doneToDo(action.id).pipe(
          map(
            data => TodosActions.loadTodosSuccess(data)
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todosDataService: TodosDataService
  ) { }
}
