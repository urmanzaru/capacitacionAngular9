import { Component, OnInit } from '@angular/core';
import {ProductItf} from 'src/app/interfaces/product.interface';
import {NgForm, FormGroup, Validators, FormControl} from '@angular/forms'


@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {

product:ProductItf;
listProducts: ProductItf[] = [];
createProduct: ProductItf = {
name: '',
description: '',
image: '',
price: 0,
type: null,
};

formProduct: FormGroup;



  constructor() { }

  ngOnInit(): void {


  }

addProduct(productForm: NgForm){
  if(productForm.invalid){
    console.log ('el formulario es invaliddo')
    return;
  }
this.listProducts.push(this.createProduct)
}


  }


