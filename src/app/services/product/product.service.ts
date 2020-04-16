import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getNameType(type:number){
    if(type===1){return 'COMIDA';}
    if(type===2){return 'BEBIDA';}
    if(type===3){return 'POSTRE';}
    return '';
  }
}
