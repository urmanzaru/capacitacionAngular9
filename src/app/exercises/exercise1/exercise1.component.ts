import { Component, OnInit } from '@angular/core';
import{ProductItf} from './../../interface/product.interface'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component implements OnInit {
  product :ProductItf;
  listProducts: ProductItf[]=[];
  createProduct: ProductItf={
    name:'',
    description:'',
    type: null,
    image:'',
    price: 0
  }
  constructor() { }

  ngOnInit(): void {
  }
  addProductWithForm(productForm :NgForm){
    if (productForm.invalid){
      console.log ('El formulario no es válido')
      return;
    }
    this.listProducts.push(this.createProduct);

  }
  deleteProduct(){
    this.listProducts.pop(


    )
    }

  getTextType(type:number){
    if(type===1){
      return 'Postres';
    }
    if(type===2){
      return 'Comidas';
    } else {
      return 'Bebidas'
    }
  }
}
