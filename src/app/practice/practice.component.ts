import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../interface/product.interface';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styles: []
})
export class PracticeComponent implements OnInit{
product:ProductInterface={
  type:1,
  name:"Tlayuda",
  description:"Tlayuda de tasajo",
  image:"https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/09/tlayuda.jpg",
  price:75,
};

listProduct: ProductInterface[]=[
];
  constructor() { }
  ngOnInit():void{
this.addProduct();
  }

  addProduct(){
  }

  getProductofForm(product:ProductInterface){
    this.listProduct.push(product);
  }
}
