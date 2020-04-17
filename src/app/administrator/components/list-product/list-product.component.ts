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
  listProduct:ProductItf[]=[
    {
      id:1,
      image:'https://www.eluniversal.com.mx/sites/default/files/styles/f01-1023x630/public/2019/05/28/tejate_1.jpg?itok=Udpf2IKh',
      name:'tejate',
      description:'bebida de los dioses',
      price:45,
      type:3,
      status:true
    },
    {
      id:2,
      image:'https://www.eluniversal.com.mx/sites/default/files/styles/f01-1023x630/public/2019/05/28/tejate_1.jpg?itok=Udpf2IKh',
      name:'Tlayuda',
      description:'Lo mejor de la casa',
      price:75,
      type:1,
      status:true
    }
  ];

  pageIndex=0;
  length=100;
  pageSize=10;
  pageSizeOptions=[10,25,50]
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    this.setDataSource();
  }

  getEventPage(evt:any){
    console.log('evt paginator: ',evt);
  }
  deleteProduct(index:number){
    this.listProduct.splice(index,1);
    this.setDataSource();
  }

  setDataSource(){
    this.dataSource=new MatTableDataSource(this.listProduct);
  }

}
