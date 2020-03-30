import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PracticeComponent } from './practice/practice.component';
import { ProductSharedComponent } from './shared/product-shared/product-shared.component';
import { Exercise1Component } from './exercises/exercise1/exercise1.component';
import { ProductSharedListComponent } from './shared/product-shared-list/product-shared-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { ProductsComponent } from './product/products/products.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { ProductDetailComponent } from './waiter/product-detail/product-detail.component';
import { OrdersComponent } from './waiter/orders/orders.component';
import { ProductsWComponent} from './waiter/products-w/products-w.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    PracticeComponent,
    ProductSharedComponent,
    Exercise1Component,
    ProductSharedListComponent,
    ProductsComponent,
    NewProductComponent,
    ProductDetailComponent,
    OrdersComponent,
    ProductsWComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
