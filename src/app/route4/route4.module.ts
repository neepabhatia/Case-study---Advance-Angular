import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route4Component } from './route4.component';
import { ActionCounterComponent } from './action-counter/action-counter.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { CounterActionLoggerComponent } from './counter-action-logger/counter-action-logger.component';
import { CounterActionsComponent } from './counter-actions/counter-actions.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [{path:'route4', component: Route4Component}]


@NgModule({
  declarations: [Route4Component, CountDownTimerComponent, CounterActionsComponent, CounterActionLoggerComponent, ActionCounterComponent],
  imports: [
    CommonModule,FormsModule,
     RouterModule.forChild(routes),
  ]
})
export class Route4Module { }
