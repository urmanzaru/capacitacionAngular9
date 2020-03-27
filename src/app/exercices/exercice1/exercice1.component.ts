import { ProductItf } from './../../interfaces/product.interface';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {


  listProducts: ProductItf[] = [];
  formProduct: FormGroup;
  selectProduct: ProductItf;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formProduct = this._fb.group({
      name: ['', [Validators.required, Validators.maxLength(40)]],
      description: ['', [Validators.required, Validators.maxLength(60)]],
      type: [null, Validators.required],
      image: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]]
    });
  }

  addProduct(){
    if(this.formProduct.invalid){
      return true;
    }
    this.listProducts.push(this.formProduct.value);
    this.formProduct.reset();
  }

  getTextType(type:number){
    if(type==1){
      return 'Comidas';
    }
    if(type==2){
      return 'Bebidas';
    } else{
      return 'Postres';
    }
  }

  deleteProduct(index: number){
    this.listProducts.splice(index, 1);
  }

}
