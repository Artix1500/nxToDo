import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ShellRoutingModule } from './shell-routing.module';
import { DashboardModule } from '@myworkspace/todo/dashboard-feature';

@NgModule({
  imports: [
    CommonModule, 
    ShellRoutingModule, 
    DashboardModule,
  ],
  exports: [ShellRoutingModule],
  declarations: [DashboardComponent]
})
export class TodoAppShellModule { }
