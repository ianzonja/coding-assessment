import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { EssentialsModule } from 'src/app/modules/essentials/essentials.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    EssentialsModule,
    ReactiveFormsModule
  ]
})
export class ForgotPasswordModule { }
