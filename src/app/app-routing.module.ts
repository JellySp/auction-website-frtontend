import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  // welcome
  { path: '', component: WelcomeComponent}, // default path
  { path: '**', component: NotFoundComponent} // ** for anything else. NB! This has to be the last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
