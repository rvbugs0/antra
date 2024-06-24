import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-average-rating',
  standalone: true,
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.css'],
  imports: [CommonModule]
})
export class AverageRatingComponent {
  @Input() ratings: Array<{ name: string; content: string; rate: number }> | undefined;

  get averageRate(): number {
    if (!this.ratings || this.ratings.length === 0) {
      return 0;
    }
    const total = this.ratings.reduce((sum, rating) => sum + rating.rate, 0);
    return Math.round(total / this.ratings.length);
  }

  get stars(): string {
    const averageRate = this.averageRate;
    const filledStars = '&#9733;'.repeat(averageRate);
    const emptyStars = '&#9734;'.repeat(5 - averageRate);
    return filledStars + emptyStars;
  }
}