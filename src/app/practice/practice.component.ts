import { Component, OnInit } from '@angular/core';
import { ProductItf } from '../interface/product.interface';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styles: []
})
export class PracticeComponent implements OnInit{
product:ProductItf={
  id:1,
  type:1,
  name:"Tlayuda",
  description:"Tlayuda de tasajo",
  image:"https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/09/tlayuda.jpg",
  price:75,
};

listProduct: ProductItf[]=[
];
  constructor() { }
  ngOnInit():void{
this.addProduct();
  }

  addProduct(){
  }

  getProductofForm(product:ProductItf){
    this.listProduct.push(product);
  }
}
