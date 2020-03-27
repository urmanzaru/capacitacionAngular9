import { Component, OnInit } from '@angular/core';
import { ProductItf } from '../interfaces/product.interface';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  product: ProductItf;
  listProducts: ProductItf[] = [];
  createProduct: ProductItf = {
    name: '',
    description: '',
    type: null,
    image: '',
    price: 0
  }
  formProduct: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.product = {
      name: 'Tlayuda con tasajo',
      description: 'Tlayuda con tasajo para 1 persona',
      image: 'https://lh3.googleusercontent.com/proxy/LCET9ucF9RKS_Mbx5EqWQjo3XZKAFl-X86-MUehBocW7MaYQpUtb_mGxkQcGvZ8e5ZojpIstVRN_8GuhXmnmGUcKaAbB4rNfuUmZnz-GrIf01VNeGlKn59BsLdfknTXcttggmOc-tSWEA_GgggC1pV7bTuQo78g27kDn',
      price: 75.5,
      type: 1
    }
    this.initForm();
    this.add3Products();
  }

  initForm() {
    this.formProduct = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      type: new FormControl(null, Validators.required),
      image: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(1)])
    });
  }


  addProduct() {
    this.listProducts.push({
      name: 'producto: ' + this.listProducts.length,
      description: 'description',
      type: 1,
      image: 'https://lh3.googleusercontent.com/proxy/LCET9ucF9RKS_Mbx5EqWQjo3XZKAFl-X86-MUehBocW7MaYQpUtb_mGxkQcGvZ8e5ZojpIstVRN_8GuhXmnmGUcKaAbB4rNfuUmZnz-GrIf01VNeGlKn59BsLdfknTXcttggmOc-tSWEA_GgggC1pV7bTuQo78g27kDn',
      price: 120
    });
  }

  addProductWithForm(productForm: NgForm) {
    if (productForm.invalid) {
      console.log('El formulario no es valido')
      return;
    }
    this.listProducts.push(this.createProduct);
    productForm.reset();
  }

  addProductWithReactiveForm() {
    if (this.formProduct.invalid) {
      console.log('El formulario no es valido')
      return;
    }
    this.listProducts.push(this.formProduct.value);
    this.formProduct.reset();
  }

  add3Products() {
    this.listProducts.push({
      name: 'tejate',
      description: 'Bebida de los dioses',
      image: 'https://www.eluniversal.com.mx/sites/default/files/styles/f01-1023x630/public/2019/05/28/tejate_1.jpg?itok=Udpf2IKh',
      price: 45.0,
      type: 2
    });
    this.listProducts.push({
      name: 'Flan',
      description: 'Flan de vainilla con caramelo',
      image: 'https://www.lactaid.com/sites/lactaid_us/files/recipe-images/easy_flan.jpg',
      price: 30.0,
      type: 3
    });
    this.listProducts.push(this.product);
  }

  getTextType(type: number) {
    if (type === 1) {
      return 'Comidas';
    }
    if (type === 2) {
      return 'Bebidas';
    } else {
      return 'Postres';
    }
  }

}
