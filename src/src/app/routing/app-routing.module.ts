import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CopilotComponent} from '../copilot/copilot.component';
import {DrqComponent} from '../drq/drq.component';
import {SensortelemetryComponent} from '../sensor-telemetry/sensortelemetry.component';
import {SoftwareToolsComponent} from '../software-tools/software-tools.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/copilot', pathMatch: 'full' },
  { path: 'drq', component: DrqComponent },
  { path: 'sensor-telemetry', component: SensortelemetryComponent },
  { path: 'copilot', component: CopilotComponent},
  { path: 'software-tools', component: SoftwareToolsComponent},
  { path: '*', component: CopilotComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
