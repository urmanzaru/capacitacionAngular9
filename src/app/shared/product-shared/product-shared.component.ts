import { Component, OnInit, Input } from '@angular/core';
import { ProductItf } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product-shared',
  templateUrl: './product-shared.component.html',
  styleUrls: ['./product-shared.component.scss']
})
export class ProductSharedComponent implements OnInit {

  @Input()
  product: ProductItf;
  constructor() { }

  ngOnInit(): void {
  }
  getTextType(type:number){
    if (type===1) {
      return 'comida';
    }
    if (type===2) {
      return 'bebidas';
    }
    if (type===3) {
      return 'postres';
    }

  }

}
