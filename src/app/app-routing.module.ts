import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './main/dashboard/dashboard/dashboard.component';
import { Cuf0069Component } from './main/monitores/cuf0069/cuf0069.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'monitores/cuf0069', component: Cuf0069Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
// { path: '', redirectTo: './home', pathMatch: 'full' }
//  path: '',
//  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)

/*
  { 
    path: 'home', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent } // Rota para o Dashboard dentro do HomeComponent
    ]
  },*/
