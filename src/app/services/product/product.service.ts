import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductModel } from 'src/app/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url=environment.server +'product';

  constructor(private _http:HttpClient ) { }

  getListProducts(offset:number,max:number){
    return this._http.get(environment.server+'product?offset='+offset+'&max='+max);
  }
  getNameType(type:number){
    if(type===1){return 'Comida'}
    if(type===2){return 'Bebida'}
    if(type===3){return 'Postre'}
    return '';

  }
  post(product:ProductModel): Observable <ProductModel> {
    return this._http.post<ProductModel>(environment.server + 'product', product);
  }
  update(product:ProductModel):Observable <ProductModel> {
    return this._http.put<ProductModel>(environment.server + 'product/' + product.id,product);
  }
  getId(id:number){
    return this._http.get(environment.server + 'product/'+ id)
  }
}
