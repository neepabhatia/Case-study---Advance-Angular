
import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { OverviewComponent } from './overview/overview.component';
const routes: Routes =[
{path:'', component: OverviewComponent},
{    path: '',    loadChildren: () =>      import('./route3/route3.module').then((m) => m.Route3Module),  },
{     path: '',    loadChildren: () =>      import('./route2/route2.module').then((m) => m.Route2Module),  },
{     path: '',    loadChildren: () =>      import('./route1/route1.module').then((m) => m.Route1Module),  },
{     path: '',    loadChildren: () =>      import('./route4/route4.module').then((m) => m.Route4Module),  },
{     path: '',    loadChildren: () =>      import('./route5/route5.module').then((m) => m.Route5Module),  },
{     path: '',    loadChildren: () =>      import('./route6/route6.module').then((m) => m.Route6Module),  },

];
@NgModule({ 
    
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 

}) 
    
export class AppRoutingModule { }

