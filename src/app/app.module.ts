import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CategoriesComponent} from './categories/categories.component';
import {ProductComponent} from './product/product.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppInterceptor} from './shared/interceptor/app.interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterModule} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {LayoutModule} from '@angular/cdk/layout';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    ProductComponent,
    NotFoundComponent,
    SearchBarComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    DashboardComponent,
    AddProductComponent,
    ProductDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        FlexLayoutModule,
        FormsModule,
        MatIconModule,
        MatSliderModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        FlexLayoutModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatListModule,
        MatTabsModule,
        MatOptionModule,
        MatSelectModule,
        MatSnackBarModule,
        HttpClientModule,
        MatTooltipModule,
        LayoutModule,
        MatInputModule,
        MatCheckboxModule,
        FlexLayoutModule,
        MatTableModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
