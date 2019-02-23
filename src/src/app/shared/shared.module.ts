import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { CardHeaderComponent} from './card-header/card-header.component';
import { NavComponent  } from './nav/nav.component';
import {MaterialModule} from '../material.module';
import { ErrorTextComponent } from './error-text/error-text.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    CardHeaderComponent,
    NavComponent,
    ErrorTextComponent
  ],
  exports: [
    CardHeaderComponent,
    NavComponent,
    ErrorTextComponent
  ]
})
export class SharedModule { }
