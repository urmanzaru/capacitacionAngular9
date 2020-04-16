import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInt } from 'src/app/interfaces/productinterface';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-form-produc',
  templateUrl: './form-produc.component.html',
  styleUrls: ['./form-produc.component.scss']
})
export class FormProducComponent implements OnInit {

  editMode: boolean;
  paramId: number;

  listType = [ {value: 'Comida', type:1}, {value: 'Bebida', type:2}, {value: 'Postre', type:3}]

  product: ProductInt ;

  constructor( private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkParams();
  }

  checkParams(){
    this._activateRoute.params.subscribe((p:any) => {
      if(p.id){
        this.editMode = true;
        this.paramId= p.id;
        //get product by id
      } else {
        this.editMode = p.id;
        this.product = new ProductModel();
      }
    })
  }

}
