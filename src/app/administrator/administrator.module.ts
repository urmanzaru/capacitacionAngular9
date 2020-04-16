import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { AdministratorMaterialModule } from './administrator-material.module';
import { ListProductComponent } from './components/list-product/list-product.component';

@NgModule({
  declarations: [ProductsComponent, ListProductComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    AdministratorMaterialModule,

  ]
})
export class AdministratorModule { }
