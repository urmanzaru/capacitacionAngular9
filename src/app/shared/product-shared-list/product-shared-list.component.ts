import { Component, OnInit, Input } from '@angular/core';
import{ProductItf} from './../../interface/product.interface';

@Component({
  selector: 'app-product-shared-list',
  templateUrl: './product-shared-list.component.html',
  styleUrls: ['./product-shared-list.component.scss']
})
export class ProductSharedListComponent implements OnInit {


  @Input()
  product: ProductItf;
  listProducts: ProductItf[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  deleteProduct(){
    this.listProducts.splice(5,5)
    }
}
