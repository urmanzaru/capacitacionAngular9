import { NavigationComponent } from './navigation/navigation.component';
import { PracticeComponent } from './practice/practice.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Exercise1Component} from './exercises/exercise1/exercise1.component';
import {ProductComponent} from './product/product.component';
import {  CreateProductComponent} from "./create-product/create-product.component";
import { AllProductsComponent } from "./all-products/all-products.component";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BuyComponent } from './buy/buy.component';
import { ListBuyComponent } from "./list-buy/list-buy.component";

const routes: Routes = [
  {
    path: 'access',
    component: LoginComponent
  },
  {
    path: 'practice',
    component: PracticeComponent
  },
  {
    path: 'nav',
    component: NavigationComponent
  },
  {
    path: 'exercises',
    component: Exercise1Component
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'createproduct',
    component: CreateProductComponent
  },
  {
    path: 'allproducts',
    component: AllProductsComponent
  },
  {
    path: 'shopping',
    component: ShoppingCartComponent
  },
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'listbuy',
    component: ListBuyComponent
  },
  {
    path: '**', redirectTo: '/access'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
