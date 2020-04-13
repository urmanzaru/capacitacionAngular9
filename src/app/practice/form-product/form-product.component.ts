import { ProductInterface } from './../../interface/product.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  product:ProductInterface={
    image: '',
    name: '',
    description: '',
    price: 0,
    type:1 
  };

  @Output()
  evProduct: EventEmitter<ProductInterface>;

  constructor() { 
    this.evProduct = new EventEmitter<ProductInterface>();
  }

  ngOnInit(): void {
  }

  saveProduct(){
    console.log('Producto a enviar: ', this.product);
    this.evProduct.emit(JSON.parse(JSON.stringify(this.product)));
  }
}
