import { ProductItf } from './../interfaces/product.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  product: ProductItf;
  listProducts: ProductItf[] = [];
  constructor() { }

  ngOnInit(): void {
    this.product = {
      name: 'Tlayuda con tasajo',
      description: 'Tlayuda con tasajo para 1 persona',
      image: 'https://lh3.googleusercontent.com/proxy/LCET9ucF9RKS_Mbx5EqWQjo3XZKAFl-X86-MUehBocW7MaYQpUtb_mGxkQcGvZ8e5ZojpIstVRN_8GuhXmnmGUcKaAbB4rNfuUmZnz-GrIf01VNeGlKn59BsLdfknTXcttggmOc-tSWEA_GgggC1pV7bTuQo78g27kDn',
      price: 75.5,
      type: 1
    }
    this.add3Products();
  }

  add3Products(){
    this.listProducts.push({
      name: 'tejate',
      description: 'Bebida de los dioses',
      image: 'https://www.eluniversal.com.mx/sites/default/files/styles/f01-1023x630/public/2019/05/28/tejate_1.jpg?itok=Udpf2IKh',
      price: 45.0,
      type: 2
    });
    this.listProducts.push({
      name: 'Flan',
      description: 'Flan de vainilla con caramelo',
      image: 'https://www.lactaid.com/sites/lactaid_us/files/recipe-images/easy_flan.jpg',
      price: 30.0,
      type: 3
    });
    this.listProducts.push(this.product);
  }

}
