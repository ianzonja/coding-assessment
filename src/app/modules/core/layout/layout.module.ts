import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { EssentialsModule } from '../../essentials/essentials.module';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  declarations: [AppLayoutComponent, TopbarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    EssentialsModule
  ]
})
export class LayoutModule { }
