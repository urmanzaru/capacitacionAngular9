import { Component, OnInit } from '@angular/core';
import {ProductInt} from './../../../interfaces/productinterface';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  displayedColumns:string[] = ['foto', 'nombre','descripcion','precio','tipo','estado','acciones']
  dataSource: ProductInt[] = [
    {
      image: 'https://www.eluniversal.com.mx/sites/default/files/styles/f01-1023x630/public/2019/05/28/tejate_1.jpg?itok=Udpf2IKh',
      name: 'Tejate',
      description: 'Bebida de los dioses',
      price: 45,
      type: 3,
      status: true
    }
  ];

   // MatPaginator Inputs
   length = 100;
   pageIndex = 0;
   pageSize = 10;
   pageSizeOptions= [10, 25, 50];

  constructor( public productService: ProductService) { }

  ngOnInit(): void {
  }
  getEventPage(evt:any){
    console.log('evt paginator', evt);
  }



}
