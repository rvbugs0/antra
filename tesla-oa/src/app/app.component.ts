import { Component } from '@angular/core';

import { RatingComponent } from './rating/rating.component';
import { AverageRatingComponent } from './average-rating/average-rating.component';
import { RatingListComponent } from './rating-list/rating-list.component';
import { CommonModule } from '@angular/common';
import { Rating } from './interface/rating';
import { ratings } from './database/data';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RatingComponent, AverageRatingComponent, RatingListComponent],
  
})
  
export class AppComponent  {
  ratings: Rating[] = ratings;

  

  
}