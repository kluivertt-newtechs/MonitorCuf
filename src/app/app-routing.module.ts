import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cuf0069Component } from './monitor/cuf0069/cuf0069.component';



const routes: Routes = [
  {path: 'monitor',
   loadChildren: () =>
   import('./monitor/monitor.module').then((module) => module.MonitorModule)},
  {path: 'cuf0069', component: Cuf0069Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  
