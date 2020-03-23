import { Component, OnInit } from '@angular/core';
import { ProductInt } from '../interfaces/productinterface';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  product: ProductInt;
  listProducts: ProductInt[] = [];
  constructor() { }

  ngOnInit(): void {
    this.product = {
      name: 'Tlayuda de tasajo.',
      description: 'Tlayuda con tasajo para una persona',
      image: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/06/Tlayuda-chapulines.jpg',
      price: 75.5,
      type: 1
    }
    this.add3Productos();
  }

  add3Productos(){
    this.listProducts.push({
      name: 'Tejate',
      description: 'Bebida de los dioses.',
      image: 'https://www.eluniversal.com.mx/sites/default/files/styles/f01-1023x630/public/2019/05/28/tejate_1.jpg?itok=Udpf2IKh',
      price: 45.5,
      type: 2
    });

    this.listProducts.push({
      name: 'Mole',
      description: 'Comida tradicional.',
      image: 'https://laroussecocina.mx/wp-content/uploads/2017/12/mole-poblano-001-larousse-cocina_0-1024x640.jpg',
      price: 100,
      type: 3
    });
  }



}
