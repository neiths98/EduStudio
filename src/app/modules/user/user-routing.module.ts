import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInAuthGuard } from 'src/app/core/guards/logged-in-auth.guard';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

const routes: Routes = [
  { path: 'sign-up', component: UserSignUpComponent, canActivate: [LoggedInAuthGuard] },
  { path: 'login', component: UserLoginComponent, canActivate: [LoggedInAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
