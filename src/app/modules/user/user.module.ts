import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';


@NgModule({
  declarations: [
    UserSignUpComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
