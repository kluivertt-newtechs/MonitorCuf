
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Cuf0069Component } from '../monitor/cuf0069/cuf0069.component';

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







