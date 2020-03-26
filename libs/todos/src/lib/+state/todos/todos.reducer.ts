import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TodosActions from './todos.actions';
import { TodosEntity } from './todos.models';

export const TODOS_FEATURE_KEY = 'todos';

export interface State extends EntityState<TodosEntity> {
  selectedId?: string | number; // which Todos record has been selected
  loaded: boolean; // has the Todos list been loaded
  error?: string | null; // last none error (if any)
}

export interface TodosPartialState {
  readonly [TODOS_FEATURE_KEY]: State;
}

export const todosAdapter: EntityAdapter<TodosEntity> = createEntityAdapter<
  TodosEntity
>();

export const initialState: State = todosAdapter.getInitialState({
  // set initial required properties
  todos: [
    { id: 0, title: "OLD TITLE", done: false }
  ],
  loaded: false
});

const todosReducer = createReducer(
  initialState,
  on(TodosActions.loadTodos, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(TodosActions.loadTodosSuccess, (state, { todos }) =>
    todosAdapter.addAll(todos, { ...state, loaded: true })
  ),
  on(TodosActions.loadTodosFailure, (state, { error }) => ({ ...state, error })),
  on(TodosActions.AddToDo, (state, { todo }) => {
    console.log(todo);
    console.log("TEST")
    return {...state};
  })
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}
