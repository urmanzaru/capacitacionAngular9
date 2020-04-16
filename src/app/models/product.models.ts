export class ProductModel {

  id?:number;
  status?: boolean;
  type: 1 | 2 | 3;
  name: string;
  description: string;
  image:string;
  price: number

constructor(){
  this.price= 0;
  this.type=1;
  this.description= 'desccripcion'
  this.image= 'url'

}
}
