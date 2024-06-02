import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Cuf0069Component } from './cuf0069/cuf0069.component';


@NgModule({
  declarations: [
    Cuf0069Component  
  ],
  imports: [
    CommonModule,
    SharedModule,
    
  ],

})
export class MonitorModule { }
