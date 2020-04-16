export class ProductModel {
    id?: number;
    status?: boolean;
    type: 1 | 2 | 3;
    name: string;
    description: string;
    image: string;
    price: number;
    constructor(){
        this.price = 0;
        this.type =1;
        this.description = 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.';
        this.image = 'https://www.google.com.mx/url?sa=i&url=https%3A%2F%2Fuss.com.ar%2Fconsejos-uss%2F&psig=AOvVaw1bqfnYpntIqf7zuWz9i2mW&ust=1587106158212000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDV5qmt7OgCFQAAAAAdAAAAABAD';
    }
}