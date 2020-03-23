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
    name: 'tlayuda de oaxaca',
    description : 'una rica tlayuda de tasajo',
    image: 'https://www.turimexico.com/wp-content/uploads/2016/09/Receta-Tlayuda-con-Tasajo.jpg',
    price: 54.5,
    type: 1

  }
  this.add3Products();
  }

  add3Products(){
    this.listProducts.push({
      name: 'tejate',
      description :'tejate de coco el mejor',
      image: 'https://lh3.googleusercontent.com/proxy/86tUBnuD3AhhU3zLUR4l2U1pdSMH41c-GkOZ5eSIcaIop1PNLpu_GOuQt5Huer94qaDZN9gvTjPdZsPn9tyejjj85GXj1O-zDQ9Yo0vDha4C0g5pBKkGwA',
      price: 45.6,
      type: 2
    })
    this.listProducts.push({
      name: 'flan',
      description :'flan',
      image: 'https://lh3.googleusercontent.com/proxy/86tUBnuD3AhhU3zLUR4l2U1pdSMH41c-GkOZ5eSIcaIop1PNLpu_GOuQt5Huer94qaDZN9gvTjPdZsPn9tyejjj85GXj1O-zDQ9Yo0vDha4C0g5pBKkGwA',
      price: 45.6,
      type: 2
    })
    this.listProducts.push({
      name: 'tejate',
      description :'tejate de coco el mejor',
      image: 'https://lh3.googleusercontent.com/proxy/86tUBnuD3AhhU3zLUR4l2U1pdSMH41c-GkOZ5eSIcaIop1PNLpu_GOuQt5Huer94qaDZN9gvTjPdZsPn9tyejjj85GXj1O-zDQ9Yo0vDha4C0g5pBKkGwA',
      price: 45.6,
      type: 2
    })

  }


