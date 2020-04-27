import { Component, OnInit } from '@angular/core';
import { ProductItf } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/services/product/product.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  displayedColumns:string[]=['foto','nombre','descripcion','precio','tipo','estado','acciones'];
  dataSource:MatTableDataSource<any>;
  listProduct:ProductItf[]=[];

  pageIndex=0;
  length=0;
  pageSize=5;
  pageSizeOptions=[5,10,25];
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    this.setDataSource();
    this.getProducts();
  }

  getProducts(){
    this.productService.getListProducts((this.pageIndex * this.pageSize),this.pageSize).subscribe((resp:any)=>{

      this.listProduct = resp.data;
      this.length = resp.total;
      this.setDataSource();
    },(error)=>{

    });
  }

  getEventPage(evt:any){
    console.log('evt paginator: ',evt);
    this.pageIndex=evt.pageIndex;
    this.length=null;
    this.pageSize=evt.pageSize;
    this.getProducts();
  }
  deleteProduct(index:number){
    this.listProduct.splice(index,1);
    this.setDataSource();
  }

  setDataSource(){
    this.dataSource=new MatTableDataSource(this.listProduct);
  }

}
