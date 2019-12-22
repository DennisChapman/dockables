import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../../services/Restaurant.service'
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant: Restaurant;
  constructor(private RestaurantService:RestaurantService) { }
  ngOnInit() {
  }
}
