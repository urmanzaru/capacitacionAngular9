import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { FormProducComponent } from './components/form-produc/form-produc.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/create',
    component: FormProducComponent
  },
  {
    path: 'products/edit/:id',
    component: FormProducComponent
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
