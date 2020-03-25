import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PracticeComponent } from './practice/practice.component';
import { ProductSharedComponent } from './shared/product-shared/product-shared.component';
import { Exercice1Component } from './exercices/exercice1/exercice1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    PracticeComponent,
    ProductSharedComponent,
    Exercice1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
