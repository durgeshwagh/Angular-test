import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { foods } from '../shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
food!:foods ;
  getFoodByid: any;
  constructor(private activedRout:ActivatedRoute,
    private fooodservice:FoodPageComponent) 
    {
activedRout.params.subscribe((params)=>{
  if(params['id'])
  this.food = fooodservice.getFoodByid(params['id'])
})

     }
 

  ngOnInit(): void {
  }

}
