import { Component, OnInit } from '@angular/core';
import{ProductItf} from './../interface/product.interface'
import { from } from 'rxjs';
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
var = '';
product :ProductItf;
listProducts: ProductItf[]=[];
  constructor() { }

  ngOnInit(): void {

this.product={
  name: 'a',
  description:'k',
  image:'https://i.blogs.es/6fcd37/13400140065_b3290c12e9_b/840_560.jpg',
  price: 75.5,
  type: 2,
}
this.add3Products();
}
//areglo de producto
add3Products() {
  this.listProducts.push({
    name: 'flan',
    description:'flan',
    image:'https://www.lactaid.com/sites/lactaid_us/files/recipe-images/easy_flan.jpg',
    price:20.0,
    type:2

  });
  this.listProducts.push({
    name: 'pastel',
    description:'pastel',
    image:'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/11/pastel-red-velvet.jpg',
    price:20.0,
    type:2

  });
  this.listProducts.push(this.product);
}
}
