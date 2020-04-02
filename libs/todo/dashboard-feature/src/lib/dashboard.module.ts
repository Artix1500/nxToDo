import { NgModule, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@myworkspace/todo/ui';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TodoDataAccessModule } from '@myworkspace/todo/data-access'
import { ToDosFacade} from '@myworkspace/todo/data-access';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UiModule,
    TodoDataAccessModule,
  ],
  providers: [
    ToDosFacade
  ],
  exports: [DashboardRoutingModule],
})
export class DashboardModule { }
