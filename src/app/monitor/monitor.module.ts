import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cuf0069Component } from './cuf0069/cuf0069.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    Cuf0069Component,

    
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MonitorModule { }
