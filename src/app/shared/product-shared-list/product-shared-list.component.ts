import { Component, OnInit, Input } from '@angular/core';
import { ProductInt } from 'src/app/interfaces/productinterface';

@Component({
  selector: 'app-product-shared-list',
  templateUrl: './product-shared-list.component.html',
  styleUrls: ['./product-shared-list.component.scss']
})
export class ProductSharedListComponent implements OnInit {


  @Input()
  product: ProductInt;
  constructor() { }

  ngOnInit(): void {
  }
}
