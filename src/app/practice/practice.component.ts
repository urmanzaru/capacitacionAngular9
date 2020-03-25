import { Component, OnInit } from '@angular/core';
import{ProductItf} from './../interface/product.interface'
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
var = '';
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

this.product={
  name: 'Tlayuda',
  description:'Tlayuda oaxaqueña',
  image:'https://i.blogs.es/6fcd37/13400140065_b3290c12e9_b/840_560.jpg',
  price: 75.5,
  type: 2,
}
this.add3Products();
}
//button
addProduct(){
this.listProducts.push({
  name:'product:' + this.listProducts.length,
  description:'description',
  image:'https://www.lactaid.com/sites/lactaid_us/files/recipe-images/easy_flan.jpg',
  price:120,
  type:1
})
}

//ng Submit
addProductWithForm(productForm :NgForm){
  if (productForm.invalid){
    console.log ('El formulario no es válido')
    return;
  }
  this.listProducts.push(this.createProduct);
}


//areglo de producto
add3Products() {
  this.listProducts.push({
    name: 'flan',
    description:'flan de vainilla',
    image:'https://www.lactaid.com/sites/lactaid_us/files/recipe-images/easy_flan.jpg',
    price:20.0,
    type:1

  });
  this.listProducts.push({
    name: 'pastel',
    description:'pastel de chocolate',
    image:'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/11/pastel-red-velvet.jpg',
    price:20.0,
    type:1

  });
  this.listProducts.push({
    name: 'piña colada',
    description:'piña colada',
    image:'https://t1.rg.ltmcdn.com/es/images/4/6/5/pina_colada_6564_orig.jpg',
    price:20.0,
    type:3

  });
  this.listProducts.push(this.product);
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
