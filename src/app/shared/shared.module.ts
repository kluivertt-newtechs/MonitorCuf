import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoBreadcrumbModule, PoModule, PoPageModule, PoTableModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule, 
    PoModule,
    PoPageDynamicTableModule, 
    PoBreadcrumbModule,
    PoPageModule,
    PoTableModule,
    FormsModule
  ],

  exports: [
    HttpClientModule, 
    PoModule,
    PoModule,
    PoBreadcrumbModule, 
    PoPageDynamicTableModule,
    PoTableModule,
    FormsModule
  ]
})
export class SharedModule { }
 