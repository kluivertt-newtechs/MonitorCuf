import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';



@NgModule({
  imports: [CommonModule, PoModule, HttpClientModule, PoPageDynamicTableModule],
  exports: [PoModule, HttpClientModule, PoPageDynamicTableModule]
})
export class SharedModule { }
 