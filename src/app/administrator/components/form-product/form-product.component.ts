import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItf } from 'src/app/interface/product.interface';
import {ProductModel} from './../../../models/product.model';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  editMode:boolean;
  paramId:number;
  listType=[{value:'Comida',type:1},{value:'Bebida',type:2},{value:'Postre',type:3}]
  product:ProductItf;


  constructor(private _activeRoute:ActivatedRoute,private _router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.checkParams();
  }

  checkParams(){
    this._activeRoute.params.subscribe((p:any)=>{
      if(p.id){
        this.editMode=true;
        this.paramId=p.id;
        this.productService.getId(p.id).subscribe((resp:any)=>{
          this.product=resp;
        })
        //get product by id
      }else{
        this.editMode=false;
        this.product=new ProductModel();
      }
    })
  }

  sendProduct(productForm: NgForm){
    if(productForm.invalid){
      console.log('Formulario invalido');
      return;
        }
        if(!this.editMode){
          this.productService.post(this.product).subscribe((Response:any)=>
          {
            console.log('add product failed');

          });
        }else{
          this.productService.update(this.product).subscribe((Response:any)=>{
            console.log('add product success');
            this._router.navigate(['admin/products']);
          })
        }
        console.log('send_product:',this.product);
  }
}
