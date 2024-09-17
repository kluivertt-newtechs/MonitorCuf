import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cuf0069RoutingModule } from './cuf0069-routing.module';
import { Cuf0069Component } from './cuf0069/cuf0069.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [Cuf0069Component],
  imports: [CommonModule, Cuf0069RoutingModule, SharedModule],
})
export class Cuf0069Module {}
