export interface ProductInt{
    status?: boolean,
    type: 1 | 2 | 3 ;
    name: string,
    description: string,
    image: string,
    price: number;
}