import {ProductItf} from '../interfaces/product.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

product:ProductItf;
listProducts: ProductItf[] = [];

constructor() { }

ngOnInit(): void {
  this.product = {
    name: 'Tlayuda de tasajo.',
    description: 'una buena tlayuda para disfrutar',
    image: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/06/Tlayuda-chapulines.jpg',
    price: 75.5,
    type: 1
  }
  this.add3Productos();
}

addProduct(){
  this.listProducts.push({
    name: 'Product: '+this.listProducts.length,
    description: "descripción",
    type: 1,
    image: 'https://i.ytimg.com/vi/_4Mxp3rMiFQ/maxresdefault.jpg',
    price: 180,
  });
}

add3Productos(){
  this.listProducts.push({
    name: 'Tejate',
    description: 'rico tejate de coco el mejor',
    image: 'https://www.eluniversal.com.mx/sites/default/files/styles/f01-1023x630/public/2019/05/28/tejate_1.jpg?itok=Udpf2IKh',
    price: 45.5,
    type: 2
  });

  this.listProducts.push({
    name: 'guarache especial',
    description: 'acompañada de aciento y todo al gusto',
    image: 'https://www.elcomal.com/wp-content/uploads/2018/12/recipe-huaraches.jpg',
    price: 100,
    type: 3
  });
}



}
