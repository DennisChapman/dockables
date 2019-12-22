import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RatingComponent } from './components/rating/rating.component';
import { DockablesComponent } from './components/dockables/dockables.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantComponent,
    RestaurantsComponent,
    RatingComponent,
    DockablesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
