import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route5Component } from './route5.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'  
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

const routes: Routes = [{path:'route5', component: Route5Component}]


@NgModule({
  declarations: [Route5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatSortModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatTableModule,
    ReactiveFormsModule,
  ]
})
export class Route5Module { }
