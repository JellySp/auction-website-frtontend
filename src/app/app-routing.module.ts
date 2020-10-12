import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ProfileComponent} from './profile/profile.component';
import {AddProductComponent} from './product/add-product/add-product.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent}, // welcome
  {path: 'login', component: LoginComponent}, // login // default path
  {path: 'signup', component: SignupComponent}, // signup
  {path: 'product', component: ProductComponent},
  {path: 'add-product', component: AddProductComponent}, // add product
  {path: 'profile', component: ProfileComponent}, // profile
  {path: 'welcome', component: WelcomeComponent},
  {path: '**', component: NotFoundComponent} // ** for anything else. NB! This has to be the last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
