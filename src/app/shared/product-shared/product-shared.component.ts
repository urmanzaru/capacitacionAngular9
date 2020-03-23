import { Component, Input, OnInit } from '@angular/core';
import { ProductInt } from 'src/app/interfaces/productinterface';

@Component({
  selector: 'app-product-shared',
  templateUrl: './product-shared.component.html',
  styleUrls: ['./product-shared.component.scss']
})
export class ProductSharedComponent implements OnInit {

  @Input()
  product: ProductInt;
  constructor() { }

  ngOnInit(): void {
  }

  getTextType(type:number){
    if(type===1){
      return 'Comidas';
    }
    if(type===2){
      return 'Bebidas';
    } else {
      return 'Comida típica'
    }
  }

}
