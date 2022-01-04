import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route3Component } from './route3.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { CounterActionsComponent } from './counter-actions/counter-actions.component';
import { CounterActionLoggerComponent } from './counter-action-logger/counter-action-logger.component';
import { ActionCounterComponent } from './action-counter/action-counter.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [{path:'route3', component: Route3Component}]


@NgModule({
  declarations: [Route3Component, CountDownTimerComponent, CounterActionsComponent, CounterActionLoggerComponent, ActionCounterComponent],
  imports: [
    CommonModule,
     RouterModule.forChild(routes),
    FormsModule
  ]
})
export class Route3Module { }
