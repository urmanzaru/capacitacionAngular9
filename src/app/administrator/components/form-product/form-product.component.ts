import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
editMode:boolean;
paramsId:number;
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
      this.editMode=false;
    }
  })
}

}
