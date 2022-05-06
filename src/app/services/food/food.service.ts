import { Injectable } from '@angular/core';
import { foods} from 'src/app/shared/models/Food';
@Injectable({
  providedIn: 'root'
})  
export class FoodService{

  constructor( ) { }
  getFoodByid(id:number){
   return this.getAll().find(food => food.id == id)!;  

  }
  
getAll():foods[]{
        return[
          {
            id :101 ,
            price: 250,
            name:'burger' ,
            imageurl:'assets/F-1.jpg' ,
            },

            {
              id :102 ,
              price: 600,
              name:'Biryani' ,
              imageurl:'assets/F-2.jpg' ,
              },

              {
                id :103 ,
                price: 80,
                name:'Idli' ,
                imageurl:'assets/F-3.jpg' ,
                },
                {
                  id :104 ,
                  price: 100,
                  name:'Wada-sambar' ,
                  imageurl:'assets/F-4.jpg' ,
                  },
                  {
                    id :105 ,
                    price: 50,
                    name:'Pizza' ,
                    imageurl:'assets/F-5.jpg' ,
                    },
                    {
                      id :106 ,
                      price:100,
                      name:'Dosa',
                      imageurl:'assets/F-6.jpg' ,
                      },

            
          ]
}
}

