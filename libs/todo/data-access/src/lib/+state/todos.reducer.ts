import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as TodosActions from './todos.actions';
import { TodosEntity } from '@myworkspace/todo/domain';
import { v4 as uuidv4 } from 'uuid';

export const TODOS_FEATURE_KEY = 'todos';

// the key for the local storage.
const LOCALSTORAGEKEY = '__app_todo_storage__';

export interface State extends EntityState<TodosEntity> {
  todos: {[id: string]: TodosEntity};
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
  todos: JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)),
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
    todosAdapter.setAll(todos, { ...state, loaded: true })
  ),
  on(TodosActions.loadTodosFailure, (state, { error }) => ({ ...state, error })),
  on(TodosActions.AddToDo, (state, { todoTitle }) => {
    const id: string = uuidv4();
    const todo: TodosEntity = {
      id: id,
      title: todoTitle,
      done: false,
    };
    
    const newTodos: {[id: string]: TodosEntity} = {...state.todos};
    newTodos[id] = todo;

    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));

    return {
      ...state, 
      todos: newTodos
    };
  }),
  on(TodosActions.EditToDo, (state, { todo }) => { 
    const newTodos: {[id: string]: TodosEntity} = {...state.todos};
    newTodos[todo.id] = todo;

    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));

    return {
      ...state, 
      todos: newTodos
    };
  }),
  on(TodosActions.RemoveToDo, (state, { id }) => {
    const newTodos: {[id: string]: TodosEntity} = {...state.todos};
    delete newTodos[id];

    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));

    return {
      ...state, 
      todos: newTodos
    };
  }),
  on(TodosActions.DoneToDo, (state, { id }) => {
    const newTodos: {[id: string]: TodosEntity} = {...state.todos};
    newTodos[id] = {
      ...newTodos[id], 
      done: !newTodos[id].done
    };

    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newTodos));

    return {
      ...state, 
      todos: newTodos
    };
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}
