import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    ProductTableComponent,
    NotFoundComponent,
    SearchBarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
