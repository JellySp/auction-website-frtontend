import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent}, // welcome
  {path: 'login', component: LoginComponent}, // login // default path
  {path: 'signup', component: SignupComponent}, // signup
  { path: '**', component: NotFoundComponent} // ** for anything else. NB! This has to be the last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
