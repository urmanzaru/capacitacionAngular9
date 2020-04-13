import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PracticeComponent } from './practice/practice.component';
import { ProductItemComponent } from './practice/shared/product-item/product-item.component';
import { FormProductComponent } from './practice/form-product/form-product.component';
import {FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    PracticeComponent,
    ProductItemComponent,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
