export class ProductModel{
  id?: number;
  status?: boolean;
  type: 1 | 2 | 3;
  name: string;
  description: string;
  image: string;
  price: number;
  constructor(){
    this.price=0;
    this.type-1;
    this.description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    this.image='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
  }
}
