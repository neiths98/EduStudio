import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLoadingComponent } from './button-loading/button-loading.component';



@NgModule({
  declarations: [
    ButtonLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonLoadingComponent
  ]
})
export class WidgetsModule { }
