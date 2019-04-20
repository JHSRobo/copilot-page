import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareToolsComponent } from './software-tools.component';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import { DamGridComponent } from './software-tools-components/dam-grid/dam-grid.component';
import { DigitalCameraComponent } from './software-tools-components/digital-camera/digital-camera.component';
import { SensorProbesComponent } from './software-tools-components/sensor-probes/sensor-probes.component';
import { BenthicSpeciesComponent } from './software-tools-components/benthic-species/benthic-species.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ChartModule,
  ],
  declarations: [SoftwareToolsComponent, DamGridComponent, DigitalCameraComponent, SensorProbesComponent, BenthicSpeciesComponent]
})
export class SoftwareToolsModule { }
