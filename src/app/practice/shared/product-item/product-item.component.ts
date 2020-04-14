import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styles: []
})
export class ProductItemComponent implements OnInit {
@Input()
product: ProductInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
