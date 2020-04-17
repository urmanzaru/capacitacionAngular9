import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { AdministratorMaterialModule } from './administrator-material/administrator-material.module';
import { ListProductComponent } from './components/list-product/list-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';


@NgModule({
  declarations: [ProductsComponent, ListProductComponent, FormProductComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    AdministratorMaterialModule,
  ]
})
export class AdministratorModule { }
