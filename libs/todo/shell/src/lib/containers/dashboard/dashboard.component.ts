import { Component, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { TodosEntity } from 'libs/todo/domain/src';
import { ToDosFacade } from 'libs/todo/data-access/src';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnChanges, OnInit{
  todos = {}
  todosDone: TodosEntity[];
  todosNotDone: TodosEntity[];

  constructor(private toDosFacade: ToDosFacade) { }

  ngOnInit(): void {
    this.toDosFacade.getToDos().subscribe(data => {
      this.todos = data.todos;
      this.sortToDos();
    });
  }

  addToDo(title) { 
    this.toDosFacade.addToDo(title);
  }

  onRemoveToDo(id) { 
    this.toDosFacade.onRemoveToDo(id);
  }

  onDoneToDo(id) { 
    this.toDosFacade.onDoneToDo(id);
  }

  onEditToDo({todo, title}) { 
    this.toDosFacade.onEditToDo({todo, title});
  }

  ngOnChanges(): void {
    this.sortToDos();
  }

  sortToDos(): void {
    const doneIds: string[] = Object.keys(this.todos).filter(id => {
      return this.todos[id].done;
    })

    this.todosDone = Object.keys(this.todos)
      .filter(key => doneIds.includes(key))
      .reduce((obj, key) => {
        return [
          ...obj,
          this.todos[key]
        ];
      }, []);

    this.todosNotDone = Object.keys(this.todos)
      .filter(key => !doneIds.includes(key))
      .reduce((obj, key) => {
        return [
          ...obj,
          this.todos[key]
        ];
      }, []);
  }
}
