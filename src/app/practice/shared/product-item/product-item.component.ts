import { Component, OnInit, Input } from '@angular/core';
import { ProductItf } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styles: []
})
export class ProductItemComponent implements OnInit {
@Input()
product: ProductItf;
  constructor() { }

  ngOnInit(): void {
  }

}
