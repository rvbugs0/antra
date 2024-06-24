import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  imports: [CommonModule]
})
export class RatingComponent {
  @Input() name!: string;
  @Input() content!: string;
  @Input() rate!: number;

  get stars(): string {
    const filledStars = '&#9733;'.repeat(this.rate || 0);
    const emptyStars = '&#9734;'.repeat(5 - (this.rate || 0));
    return filledStars + emptyStars;
  }
}