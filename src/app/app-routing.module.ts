import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard/dashboard.component';
import { Cuf0069Component } from './main/monitores/cuf0069/cuf0069.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  {
    path: 'main',
    loadChildren: () =>
      import('./main/main.module').then((module) => module.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
