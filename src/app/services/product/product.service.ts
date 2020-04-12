import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * type: 1=comida 2:bebida 3:bebida
 */
export class ProductService {
  constructor(private _http: HttpClient) { }

  getListProducts(offset:number, max:number){
    return this._http.get(environment.server+'product?offset='+offset+'&max='+max);
  }

  getNameType(type:number){
    if(type===1){return 'COMIDA';}
    if(type===2){return 'BEBIDA';}
    if(type===3){return 'POSTRE';}
    return '';
  }
}
