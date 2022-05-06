import { Cartitems  } from "./cartitem";

export class Cart{
item:Cartitems[]=[];

get totalPrice():Number{
    let totalPrice=0;
    this.item.forEach(item =>{
        totalPrice += item.price ;
        });
    return totalPrice;
}


}