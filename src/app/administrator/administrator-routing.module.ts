import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: '**', redirectTo: './admin/products'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
