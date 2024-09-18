import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
})
export class DashboardModule {}
