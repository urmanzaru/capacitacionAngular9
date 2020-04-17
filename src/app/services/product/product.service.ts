import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getNameType(type:number){
    if(type===1){return 'Comida'}
    if(type===2){return 'Bebida'}
    if(type===3){return 'Postre'}
    return '';

  }
}
