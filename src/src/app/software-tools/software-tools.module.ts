import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareToolsComponent } from './software-tools.component';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import { DamGridComponent } from './software-tools-components/dam-grid/dam-grid.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ChartModule,
  ],
  declarations: [SoftwareToolsComponent, DamGridComponent]
})
export class SoftwareToolsModule { }
