
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  //{ path: '', component: HomeComponent },
  //{ path: 'dashboard', component: DashboardComponent},
  //{ path: 'cuf0069', component: Cuf0069Component}
 
      //loadChildren: () => import('./home.module').then((module) => module.HomeModule)},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }







