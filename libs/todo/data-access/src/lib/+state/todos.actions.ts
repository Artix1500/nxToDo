import { createAction, props } from '@ngrx/store';
import { Todos, TodosDict } from '@myworkspace/todo/domain';


  export const loadTodos = createAction('[Todos] Load Todos');

  export const loadTodosSuccess = createAction(
    '[Todos] Load Todos Success',
    props<{ todos: TodosDict }>()
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
    props<{ todo: Todos }>()
  );

  export const RemoveToDo = createAction(
    '[Todos] RemoveToDo',
    props<{ id: string }>()
  );

  export const DoneToDo = createAction(
    '[Todos] DoneToDo',
    props<{ id: string }>()
  );
