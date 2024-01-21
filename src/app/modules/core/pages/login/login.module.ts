import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MainComponent } from './components/main/main.component';
import { EssentialsModule } from 'src/app/modules/essentials/essentials.module';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    EssentialsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient
  ]
})
export class LoginModule { }
