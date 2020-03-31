import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PracticeComponent } from './practice/practice.component';
import { ProductSharedComponent } from './shared/product-shared/product-shared.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Exercise1Component } from './exercises/exercise1/exercise1.component';
import { ProductSharedListComponent } from './shared/product-shared-list/product-shared-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppMaterialModule  } from "./app-material.module";
import { ProductComponent } from "./product/product.component";
import { CreateProductComponent  } from "./create-product/create-product.component";
import { AllProductsComponent } from "./all-products/all-products.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import {  BuyComponent } from "./buy/buy.component";
import { ListBuyComponent } from "./list-buy/list-buy.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    PracticeComponent,
    ProductSharedComponent,
    Exercise1Component,
    ProductSharedListComponent,
    ProductComponent,
    CreateProductComponent,
    AllProductsComponent,
    ShoppingCartComponent,
    BuyComponent,
    ListBuyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
