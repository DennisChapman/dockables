import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/Restaurant.service';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: '/restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurants:Restaurant[];
  constructor(private RestaurantService:RestaurantService) { }
  ngOnInit() {
    this.RestaurantService.getRestaurants().subscribe(res => {
      this.restaurants = res;
    });
  }
}
