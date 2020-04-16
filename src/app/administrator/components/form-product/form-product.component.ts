import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItf } from 'src/app/interface/product.interface';
import { ProductModel } from "./../../../models/product.models";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
editMode:boolean;
paramsId:number;
listType = [ {value: 'Comida', type:1}, {value: 'Bebida', type:2}, {value: 'Postre', type:3}]
product: ProductItf ;
  constructor(private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkParams()
  }

checkParams(){
  this._activateRoute.params.subscribe((p:any)=>{
    if(p.id){
      this.editMode = true;
    }
    else{
      this.editMode= p.id;
      this.product = new ProductModel();
    }
  })
}

}
