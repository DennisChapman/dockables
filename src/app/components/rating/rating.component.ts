import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {
  @Input() dock: number;
  @Input() food: number;
  dock_rating: string;
  food_rating: string;
  stars: string[] = [
    '\u2606\u2606\u2606\u2606\u2606', // 0 stars
    '\u2605\u2606\u2606\u2606\u2606', // 1 star
    '\u2605\u2605\u2606\u2606\u2606', // 2 stars
    '\u2605\u2605\u2605\u2606\u2606', // 3 stars
    '\u2605\u2605\u2605\u2605\u2606', // 4 stars
    '\u2605\u2605\u2605\u2605\u2605'];// 5 stars

  ngOnInit() {
    if (this.dock < 0) {
      this.dock = 0
    }
    if (this.dock > 5) {
      this.dock = 5
    }
    this.dock_rating = this.stars[this.dock];
    this.food_rating = this.stars[this.food];    
  }
}
