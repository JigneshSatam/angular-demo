import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreComponent } from "./core.component";
import { CoreRoutingModule } from './core-routing.module';
import { MessagesComponent } from '../messages/messages.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [
    CoreComponent,
    DashboardComponent,
    MessagesComponent
  ]
})
export class CoreModule { }
