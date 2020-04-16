import { Component, OnInit } from '@angular/core';
import { ProductItf } from 'src/app/interface/product.interface';
import { ProductService } from "./../../../services/product/product.service";
import { MatTableDataSource } from '@angular/material/table';
import { error } from 'protractor';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  displayedColumns: string[]=['foto','nombre','descripcion','precio','tipo','estado','acciones'];
 dataSource: MatTableDataSource<any>;
  listProduct: ProductItf[]=[];
  length=0;
  pageSize=10;
  pageSizeOptions=[10,15,20];
  pageIndex=0;
  constructor(public productService: ProductService ) { }

  ngOnInit(): void {
    this.setDataSource();
    this.getProducts();
  }
  getEventPage( evt:any){

  }

  getProducts(){
    this.productService.getListProducts().subscribe((resp:any)=>{
      if(resp.data){
        this.listProduct = resp.data;
      }
      this.setDataSource();
    },(error)=>{

    })

  }

  deleteProduct(index:number){
this.listProduct.splice(index,1);
this.setDataSource();
  }

  setDataSource(){
    this.dataSource = new MatTableDataSource(this.listProduct)

  }
}
