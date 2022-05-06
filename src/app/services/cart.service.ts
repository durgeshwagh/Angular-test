import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { foods} from '../shared/models/Food';
import { Cartitems } from '../shared/models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cart:Cart = new Cart();


 addtoCart(food:foods):void{
   let cartitem = this.cart.item.find(item => item.food.id === food.id);
    if(cartitem){
    this.changeQuentity( food.id,cartitem.quantity +1);
    return;  
  }

  this.cart.item.push (new Cartitems(food));

 }
 
 removeFromCart(foodId:number):void{
   this.cart.item = this.cart.item.filter(item => item.food.id != foodId)

}

changeQuentity(quentity:number,fooditem:Number):void{
let cartitem = this.cart.item.find(item =>item.food.id ===fooditem);
  if(!cartitem)return;
  cartitem.quantity = quentity;
  
}
 getCart():Cart{
 return this.cart;

 } 
}


