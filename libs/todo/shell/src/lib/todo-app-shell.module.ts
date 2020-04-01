import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  imports: [
    CommonModule, 
    ShellRoutingModule, 
  ],
  exports: [ShellRoutingModule],
  declarations: [DashboardComponent]
})
export class TodoAppShellModule { }
