import { Component, OnInit } from '@angular/core';
import { ProductInt } from '../interfaces/productinterface';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  product: ProductInt;
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
    this.initForm();
    this.product = {
      name: 'Tlayuda de tasajo.',
      description: 'Tlayuda con tasajo para una persona',
      image: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/06/Tlayuda-chapulines.jpg',
      price: 75.5,
      type: 1
    }
    this.add3Productos();
  }

  initForm(){
    this.formProduct = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(250)]),
    type: new FormControl(null, Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    });
  }

  addProduct(){
    this.listProducts.push({
      name: 'Product: '+this.listProducts.length,
      description: "descripción",
      type: 1,
      image: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/06/Tlayuda-chapulines.jpg',
      price: 180,
    });
  }

  addProductWithForm(productForm: NgForm){
    if(productForm.invalid){
      console.log('El formulario no es válido.');
      return;
    }
    this.listProducts.push(this.createProduct);
  }

  addProductWithreactiveForm(){
    if (this.formProduct.invalid){
      console.log('El formulario no es valido.');
      return;
    }
    this.listProducts.push(this.formProduct.value);
  }

  add3Productos(){
    this.listProducts.push({
      name: 'Tejate',
      description: 'Bebida de los dioses.',
      image: 'https://www.eluniversal.com.mx/sites/default/files/styles/f01-1023x630/public/2019/05/28/tejate_1.jpg?itok=Udpf2IKh',
      price: 45.5,
      type: 2
    });

    this.listProducts.push({
      name: 'Mole',
      description: 'Comida tradicional.',
      image: 'https://laroussecocina.mx/wp-content/uploads/2017/12/mole-poblano-001-larousse-cocina_0-1024x640.jpg',
      price: 100,
      type: 3
    });
  }



}
