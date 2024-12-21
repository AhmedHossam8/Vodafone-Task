import { Component, ViewChild } from '@angular/core';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { UnitToggleComponent } from './components/unit-toggle/unit-toggle.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SearchBarComponent,
    DatePickerComponent,
    UnitToggleComponent,
    WeatherListComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  selectedUnit: string = 'Celsius';

  @ViewChild(WeatherListComponent) weatherList!: WeatherListComponent;

  filter = {
    search: '',
    date: '',
  };

  onCitySearch(searchTerm: string): void {
    this.filter.search = searchTerm;
    this.weatherList.applyFilters(this.filter); // Pass filters to weather list component
  }

  onDateFilter(selectedDate: string): void {
    this.filter.date = selectedDate;
    this.weatherList.applyFilters(this.filter);
  }

  onUnitChange(selectedUnit: string): void {
    this.selectedUnit = selectedUnit;
    this.weatherList.onUnitChange(selectedUnit);
  }

  onFilter(): void {
    // Trigger city search and date filter based on current inputs
    this.onCitySearch(this.filter.search);
    this.onDateFilter(this.filter.date);
  }
}
