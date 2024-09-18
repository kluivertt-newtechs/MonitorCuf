import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { Cuf0069Component } from './monitores/cuf0069/cuf0069.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule, HttpClientModule],
})
export class MainModule {}
