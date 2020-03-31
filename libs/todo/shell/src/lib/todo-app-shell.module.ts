import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ShellRoutingModule } from './shell-routing.module';
import { UiModule } from 'libs/todo/ui/src';

@NgModule({
  imports: [
    CommonModule, 
    ShellRoutingModule, 
    UiModule,
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent]
})
export class TodoAppShellModule { }
