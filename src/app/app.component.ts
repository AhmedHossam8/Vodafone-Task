import { Component, ViewChild } from '@angular/core';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { UnitToggleComponent } from './components/unit-toggle/unit-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SearchBarComponent,
    DatePickerComponent,
    UnitToggleComponent,
    WeatherListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';

  @ViewChild(WeatherListComponent) weatherList!: WeatherListComponent;

  filter = {
    search: '',
    date: '',
  };

  onCitySearch(searchTerm: string): void {
    console.log('City search term:', searchTerm); // Debug log
    this.filter.search = searchTerm;  // Store search filter
    this.weatherList.applyFilters(this.filter); // Pass filters to weather list component
  }

  onDateFilter(selectedDate: string): void {
    console.log('Selected Date:', selectedDate); // Debug log
    this.filter.date = selectedDate;  // Store date filter
    this.weatherList.applyFilters(this.filter); // Pass filters to weather list component
  }

  onUnitChange(selectedUnit: string): void {
    console.log('Unit Change Event:', selectedUnit);
    // You can implement unit change logic here if needed
  }
}
