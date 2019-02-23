import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

import { DrqComponent } from './drq.component';
import { Drq1Component } from './drq-components/drq1/drq1.component';
import { Drq2Component } from './drq-components/drq2/drq2.component';
import { DrqsettingsComponent } from './drq-components/drqsettings/drqsettings.component';
import { Drq1dataComponent } from './drq-components/drq1/drq1data/drq1data.component';
import { Drq2dataComponent } from './drq-components/drq2/drq2data/drq2data.component';
import { Statusdrq1Component } from './drq-components/drq1/statusdrq1/statusdrq1.component';
import { Statusdrq2Component } from './drq-components/drq2/statusdrq2/statusdrq2.component';
import { Settingsdrq1Component } from './drq-components/drq1/settingsdrq1/settingsdrq1.component';
import { Settingsdrq2Component } from './drq-components/drq2/settingsdrq2/settingsdrq2.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    DrqComponent,
    Drq1Component,
    Drq2Component,
    DrqsettingsComponent,
    Drq1dataComponent,
    Drq2dataComponent,
    Statusdrq1Component,
    Statusdrq2Component,
    Settingsdrq1Component,
    Settingsdrq2Component
  ],
  exports: [
    DrqComponent,
    Drq1Component,
    Drq2Component,
    DrqsettingsComponent,
    Drq1dataComponent,
    Drq2dataComponent,
    Statusdrq1Component,
    Statusdrq2Component,
    Settingsdrq1Component,
    Settingsdrq2Component
  ]
})
export class DrqModule { }
