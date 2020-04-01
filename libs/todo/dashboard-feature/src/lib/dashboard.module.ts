import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@myworkspace/todo/ui';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UiModule,
  ],
  exports: [DashboardRoutingModule],
})
export class DashboardModule { }
