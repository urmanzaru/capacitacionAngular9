export interface ProductItf {
  id?:number,
  status?:boolean;
  type:1|2|3;
  name:string;
  description:string;
  image:string;
  price:number;
}
