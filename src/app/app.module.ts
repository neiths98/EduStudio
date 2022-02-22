import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRootComponent } from './app-root/app-root.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
