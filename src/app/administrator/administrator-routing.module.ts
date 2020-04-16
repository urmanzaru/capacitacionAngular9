import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { FormProductComponent } from './components/form-product/form-product.component';


const routes: Routes = [
{
  path: 'products',
  component: ProductsComponent
},
{
  path: 'products/create',
  component: FormProductComponent
},
{
  path:'products/edit/:id',
  component: FormProductComponent

},
{
  path: '**', redirectTo:'/admin/products'
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
