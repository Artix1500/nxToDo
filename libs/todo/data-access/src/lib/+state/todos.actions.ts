import { createAction, props } from '@ngrx/store';
import { Todos, TodosDict } from '@myworkspace/todo/domain';


export namespace TodosActions {
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
    props<{ id: number }>()
  );

  export const DoneToDo = createAction(
    '[Todos] DoneToDo',
    props<{ id: number }>()
  );
}

// export class AddToDo implements Action {
//   readonly type = ADD_TODO

//   constructor(public payload: Todos) {}
// }

// export class EditToDo implements Action {
//   readonly type = EDIT_TODO

//   constructor(public payload: Todos) {}
// }

// export class RemoveToDo implements Action {
//   readonly type = REMOVE_ADD_TODO

//   constructor(public payload: number) {}
// }

// export class DoneToDo implements Action {
//   readonly type = DONE_TODO

//   constructor(public payload: Todos) {}
// }

// export type Actions = AddToDo | RemoveToDo | DoneToDo | EditToDo 