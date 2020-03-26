import { createAction, props } from '@ngrx/store';
import { TodosEntity } from './todos.models';
import { Action } from '@ngrx/store'

export const loadTodos = createAction('[Todos] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todos] Load Todos Success',
  props<{ todos: TodosEntity[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos] Load Todos Failure',
  props<{ error: any }>()
);

export const AddToDo = createAction(
  '[Todos] AddToDo',
  props<{ todo: TodosEntity }>()
);

export const EditToDo = createAction(
  '[Todos] EditToDo',
  props<{ todo: TodosEntity }>()
);

export const RemoveToDo = createAction(
  '[Todos] RemoveToDo',
  props<{ todo: number }>()
);

export const DoneToDo = createAction(
  '[Todos] DoneToDo',
  props<{ todo: TodosEntity }>()
);

// export class AddToDo implements Action {
//   readonly type = ADD_TODO

//   constructor(public payload: TodosEntity) {}
// }

// export class EditToDo implements Action {
//   readonly type = EDIT_TODO

//   constructor(public payload: TodosEntity) {}
// }

// export class RemoveToDo implements Action {
//   readonly type = REMOVE_ADD_TODO

//   constructor(public payload: number) {}
// }

// export class DoneToDo implements Action {
//   readonly type = DONE_TODO

//   constructor(public payload: TodosEntity) {}
// }

// export type Actions = AddToDo | RemoveToDo | DoneToDo | EditToDo