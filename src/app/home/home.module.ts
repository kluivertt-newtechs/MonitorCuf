import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from '../main/dashboard/dashboard.module';
import { Cuf0069Module } from '../main/monitores/cuf0069/cuf0069.module';

@NgModule({
  declarations: [HomeComponent],

  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DashboardModule,
    Cuf0069Module,
  ],
})
export class HomeModule {}

// Importacao do  modulo DashBoard
