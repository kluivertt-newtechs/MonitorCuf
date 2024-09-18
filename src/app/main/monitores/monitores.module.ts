import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoresRoutingModule } from './monitores-routing.module';
import { MonitoresComponent } from './monitores/monitores.component';
import { Cuf0069Component } from './cuf0069/cuf0069.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MonitoresComponent, Cuf0069Component],
  imports: [CommonModule, MonitoresRoutingModule, SharedModule],
})
export class MonitoresModule {}
