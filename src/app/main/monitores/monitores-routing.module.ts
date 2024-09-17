import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoresComponent } from './monitores/monitores.component';

const routes: Routes = [
  {
    path: '',
    component: MonitoresComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '' },
      {
        path: 'cuf0069',
        loadChildren: () =>
          import('./cuf0069/cuf0069.module').then(
            (module) => module.Cuf0069Module
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoresRoutingModule {}
