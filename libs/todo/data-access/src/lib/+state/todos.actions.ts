import { createAction, props } from '@ngrx/store';
import { TodosEntity } from '@myworkspace/todo/domain';

export const loadTodos = createAction('[Todos] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todos] Load Todos Success',
  props<{ todos: {[id: string]: TodosEntity} }>()
);

export const loadTodosFailure = createAction(
  '[Todos] Load Todos Failure',
  props<{ error: any }>()
);

export const AddToDo = createAction(
  '[Todos] AddToDo',
  props<{ todoTitle: string }>()
);

export const EditToDo = createAction(
  '[Todos] EditToDo',
  props<{ todo: TodosEntity }>()
);

export const RemoveToDo = createAction(
  '[Todos] RemoveToDo',
  props<{ id: number }>()
);

export const DoneToDo = createAction(
  '[Todos] DoneToDo',
  props<{ id: number }>()
);
