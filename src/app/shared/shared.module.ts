import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoBreadcrumbModule, PoModule, PoPageModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';


@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule, 
    PoModule,
    PoPageDynamicTableModule, 
    PoBreadcrumbModule,
    PoPageModule
  ],

  exports: [
    HttpClientModule, 
    PoModule,
    PoModule,
    PoBreadcrumbModule, 
    PoPageDynamicTableModule
  ]
})
export class SharedModule { }
 