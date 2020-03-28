import { Component, OnInit } from '@angular/core';
import { ProductInt } from '../../interfaces/productinterface';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component implements OnInit {

  listProducts: ProductInt[] = [];
  createProduct: ProductInt = {
    name : '',
    description: '',
    type: null,
    image: '',
    price: 0
  }

  formProduct: FormGroup;

  constructor() { }

  ngOnInit(): void {

  }


  addProductWithForm(productForm: NgForm){
    if(productForm.invalid){
      console.log('El formulario no es válido.');
      return;
    }
    this.listProducts.push(this.createProduct);
  }

  deleteProduct(productForm: NgForm){
    if(productForm.valid){
      console.log('Formulario valido.');
    }
    this.listProducts.splice;
  }
}
