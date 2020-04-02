import { Injectable } from '@angular/core';
import { DataPersistence } from '@nrwl/angular';
import * as fromTodos from './todos.reducer';
import { TodosActions } from './todos.actions';
import { TodosDataService } from '../services/todos-data.service';
import { Todos } from '@myworkspace/todo/domain';
import { Effect } from '@ngrx/effects';
import { map, pluck } from 'rxjs/operators';

@Injectable()
export class TodosEffects {

  @Effect()
  loadTodos$ = this.dp.fetch(
    TodosActions.loadTodos,
    {
      run: (action) => {
        return this.todosDataService.getTodosObs().pipe(map(
            data => {
              return TodosActions.loadTodosSuccess(
                data
              )
            }
          )
        );
      },
      onError: (action, error) => {
        console.error('Error', error);
        return TodosActions.loadTodosFailure({ error });
      }
    }
  );

  @Effect()
  addToDo$ = this.dp.fetch(
    TodosActions.AddToDo,
    {
      run: (action: {type: string, todoTitle: string}) => {
        return  TodosActions.loadTodosSuccess(  this.todosDataService.addToDo(action.todoTitle) );
      },
      onError: (action, error) => {
        console.error('Error', error);
        return TodosActions.loadTodosFailure({ error });
      }
    }
  );

  @Effect()
  EditToDo$ = this.dp.fetch(
    TodosActions.EditToDo,
    {
      run: (action: {type: string, todo: Todos, TodosDict}) => {
        return  TodosActions.loadTodosSuccess(  this.todosDataService.editToDo(action.todo) );
      },
      onError: (action, error) => {
        console.error('Error', error);
        return TodosActions.loadTodosFailure({ error });
      }
    }
  );

  @Effect()
  RemoveToDo$ = this.dp.fetch(
    TodosActions.RemoveToDo,
    {
      run: (action: {type: string, id: string}) => {
        return  TodosActions.loadTodosSuccess(  this.todosDataService.removeToDo(action.id) );
      },
      onError: (action, error) => {
        console.error('Error', error);
        return TodosActions.loadTodosFailure({ error });
      }
    }
  );

  @Effect()
  DoneToDo$ = this.dp.fetch(
    TodosActions.DoneToDo,
    {
      run: (action: {type: string, id: string}) => {
        return  TodosActions.loadTodosSuccess(  this.todosDataService.doneToDo(action.id) );
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
