import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ShellRoutingModule } from './shell-routing.module';
import { UiModule } from '@myworkspace/todo-app/ui';

@NgModule({
  imports: [
    CommonModule, 
    ShellRoutingModule, 
    UiModule
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent]
})
export class TodoAppShellModule { }
