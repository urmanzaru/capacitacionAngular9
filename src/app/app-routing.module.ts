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
import { LoginGuard } from "./services/guards/login.guard";
import { AdminGuard } from "./services/guards/admin.guard";
import { CashierGuard } from "./services/guards/cashier.guard";
import { WaiterGuard } from "./services/guards/waiter.guard";
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
    path: '',
    component: NavigationComponent,
    canActivate: [LoginGuard],
    children:[
      {
        path: 'admin',
            //se cargan los modulos de admin
            canActivate: [AdminGuard],
            loadChildren:()=> import('./administrator/administrator.module').then(m=>m.AdministratorModule)

      },
      {
        path: 'mesero',
            //se cargan los modulos de admin
          canActivate: [WaiterGuard],
          loadChildren:()=> import('./waiter/waiter.module').then(m=>m.WaiterModule)
      },
      {
        path: 'cajero',
            //se cargan los modulos de admin
            canActivate: [CashierGuard],
            loadChildren:()=> import('./cashier/cashier.module').then(m=>m.CashierModule)

      }
    ]
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
