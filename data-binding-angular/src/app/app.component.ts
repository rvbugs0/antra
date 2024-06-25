import { Component } from '@angular/core';
import { us_cities } from './cities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-angular';
  filteredCities: string[] = [];
  input = '';

  onTextChanged(searchValue: string): void {
    let cityText = searchValue.trim().toLowerCase();
    if (cityText.length>0) {
      this.filteredCities = us_cities.filter(city =>
        city.toLowerCase().includes(cityText)
      );
    }
    else {
      this.filteredCities = [];
    }
  }
}