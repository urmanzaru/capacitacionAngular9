import { NavigationComponent } from './navigation/navigation.component';
import { PracticeComponent } from './practice/practice.component';
import { ProductsComponent } from './product/products/products.component';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { Exercise1Component } from './exercises/exercise1/exercise1.component';
import { ProductDetailComponent } from './waiter/product-detail/product-detail.component';
import { OrdersComponent } from './waiter/orders/orders.component';
import { ProductsWComponent } from './waiter/products-w/products-w.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './services/guards/login.guard';

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
    canActivate: [LoginGuard], //guards
    children: [
      {
        path: 'admin',
        //Carga componente admin
        loadChildren: ()=> import('./administrator/administrator.module').then(m=>m.AdministratorModule)
      },
      {
        path: 'mesero',
        //Carga componente mesero
        loadChildren: ()=>import('./waiter/waiter.module').then(m=>m.WaiterModule)
      },
      {
        path: 'cajero',
        //Carga componente cajero
        loadChildren: ()=>import('./cashier/cashier.module').then(m=>m.CashierModule)
      },
    ]
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
    component: ProductsComponent
  },
  {
    path: 'newProduct',
    component: NewProductComponent
  },
  {
    path: 'productDetail',
    component: ProductDetailComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'products',
    component: ProductsWComponent
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
