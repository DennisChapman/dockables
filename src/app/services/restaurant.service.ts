import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

import { Restaurant } from '../models/Restaurant'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http:HttpClient) { }

  // Get Restaurants
  getRestaurants():Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('/assets/restaurants.json');
  }

}
