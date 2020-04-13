import { ProductInterface } from './../../../interface/product.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: ProductInterface;
  
  constructor() { }

  ngOnInit(): void {
  }

}
