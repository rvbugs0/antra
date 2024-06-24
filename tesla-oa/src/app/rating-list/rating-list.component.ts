import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';
import { AverageRatingComponent } from '../average-rating/average-rating.component';

@Component({
  selector: 'app-rating-list',
  standalone: true,
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css'],
  imports: [CommonModule, RatingComponent, AverageRatingComponent]
})
export class RatingListComponent {
  @Input() ratings: Array<{ name: string; content: string; rate: number }> | undefined;
}