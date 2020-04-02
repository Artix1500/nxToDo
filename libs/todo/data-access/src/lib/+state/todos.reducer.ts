import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TodosActions } from './todos.actions';
import { Todos, TodosDict } from '@myworkspace/todo/domain';

export const TODOS_FEATURE_KEY = 'todos';

export interface State extends EntityState<Todos> {
  todos: TodosDict;
  selectedId?: string | number; // which Todos record has been selected
  loaded: boolean; // has the Todos list been loaded
  error?: string | null; // last none error (if any)
}

export interface TodosPartialState {
  readonly [TODOS_FEATURE_KEY]: State;
}

export const todosAdapter: EntityAdapter<Todos> = createEntityAdapter<
  Todos
>();

export const initialState: State = todosAdapter.getInitialState({
  // set initial required properties
  todos: {},
  loaded: false
});

const todosReducer = createReducer(
  initialState,
  on(TodosActions.loadTodos, state => ({
      ...state,
      loaded: false,
      error: null
  })),
  on(TodosActions.loadTodosSuccess, (state, { todos }) => ({ ...state, todos })),
  on(TodosActions.loadTodosFailure, (state, { error }) => ({ ...state, error })),
  on(TodosActions.AddToDo, (state, { todoTitle }) => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(TodosActions.EditToDo, (state, { todo }) => ({ 
    ...state,
    loaded: false,
    error: null
  })),
    on(TodosActions.RemoveToDo, (state, { id }) => ({
    ...state,
    loaded: false,
    error: null
  })),
    on(TodosActions.DoneToDo, (state, { id }) => ({
    ...state,
    loaded: false,
    error: null
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}
