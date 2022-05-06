import { foods }from "./Food";

export class Cartitems{
constructor(food:foods){
this.food= foods;
this.price;
}

food=foods ;
quantity:number=1;
get price():Number{
     return this.food.price * this.quantity; 
}


}