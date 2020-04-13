import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../interface/product.interface';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  
  product: ProductInterface = {
    type: 1,
    name: 'Tlayuda de tasajo',
    description: 'Rica tlayuda de tasajo',
    image: 'https://www.turimexico.com/wp-content/uploads/2016/09/Receta-Tlayuda-con-Tasajo.jpg',
    price: 75
  };

  listProducts: ProductInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {
    this.listProducts.push({
      type: 1,
      name: 'Tlayuda de tasajo',
      description: 'Rica tlayuda de tasajo',
      image: 'https://www.turimexico.com/wp-content/uploads/2016/09/Receta-Tlayuda-con-Tasajo.jpg',
      price: 75
    });
  }

  getProductOfForm(product: ProductInterface){
    this.listProducts.push(product);
  }

}
