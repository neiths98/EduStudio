import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLoadingComponent } from './button-loading/button-loading.component';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    ButtonLoadingComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonLoadingComponent,
    AlertComponent
  ]
})
export class WidgetsModule { }
