import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductItf } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  product:ProductItf={
    image:'',
    name:'',
    description:'',
    price:1,
    type:1,
  };
  @Output()
   evProduct: EventEmitter<ProductItf>;
  constructor() {
    this.evProduct= new EventEmitter<ProductItf>();
  }

  ngOnInit(): void {
  }
  saveProduct(){
    console.log(this.product);
    this.evProduct.emit(JSON.parse(JSON.stringify(this.product)));
  }
}
