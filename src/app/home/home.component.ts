import { Component, OnInit } from '@angular/core';
import { FoodService} from '../services/food/food.service';
import {foods} from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   foods:foods[]= [];
  constructor(private fd:FoodService , private router:ActivatedRoute ){ }

  ngOnInit():void {
    this.foods =this.fd.getAll();
  }
 
}
