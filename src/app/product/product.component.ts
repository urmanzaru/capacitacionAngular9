import { Component, OnInit } from '@angular/core';
import{ProductItf} from './../interface/product.interface'
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  createProduct: ProductItf={
    name:'',
    description:'',
    type: null,
    image:'',
    price: 0
  }
  listProducts: ProductItf[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  addProductWithForm(productForm :NgForm){
    if (productForm.invalid){
      console.log ('El formulario no es válido')
      return;
    }
    this.listProducts.push(this.createProduct);
    productForm.reset();
  }

}
