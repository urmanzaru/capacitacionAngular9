import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  editMode: boolean;
  paramId: number;

  listType = [{value: 'Comida', type:1},{value: 'Bebida', type:2}, {value: 'Postre', type:3}];
  constructor(private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkParams();
  }

  checkParams(){
    this._activateRoute.params.subscribe((p:any)=>{
      if(p.id){
        this.editMode = true;
        this.paramId = p.id;
      } else{
        this.editMode = false;
      }
    });
  }

}
