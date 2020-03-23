import { ProductItf } from './../../interfaces/product.interface';
import { Component, OnInit, Input } from '@angular/core';

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

}
