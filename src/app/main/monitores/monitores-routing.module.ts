import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoresComponent } from './monitores/monitores.component';
import { Cuf0069Component } from './cuf0069/cuf0069/cuf0069.component';

const routes: Routes = [
  {
    path: '',
    component: MonitoresComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '' },
      { path: 'cuf0069', component: Cuf0069Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoresRoutingModule {}
