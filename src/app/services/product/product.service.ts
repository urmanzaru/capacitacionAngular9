import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  getListProducts(offset:number,max:number){
    return this._http.get(environment.server+'product?offset='+offset+'&max='+max);
  }
  getNameType(type:number){
    if(type===1){return 'Comida'}
    if(type===2){return 'Bebida'}
    if(type===3){return 'Postre'}
    return '';

  }
}
