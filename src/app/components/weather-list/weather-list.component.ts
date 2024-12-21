import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

interface Forecast {
  date: string;
  temperatureCelsius: number;
  temperatureFahrenheit: number;
  humidity: number;
}

@Component({
  selector: 'app-weather-list',
  standalone: true,
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  imports: [CommonModule],
})
export class WeatherListComponent implements OnInit {
  cities: any[] = [];
  filteredCities: any[] = [];
  errorMessage: string = '';
  selectedUnit: string = 'Celsius'; // Default to Celsius
  @Input() unit: string = 'Celsius';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllCities().subscribe((data) => {
      this.cities = data;
      this.filteredCities = data; // Initialize with all cities
    });
  }

  applyFilters(filter: { search: string; date: string }): void {
    let filteredBySearch = this.cities;
    if (filter.search) {
      filteredBySearch = this.cities.filter((city) =>
        city.city.toLowerCase().includes(filter.search.toLowerCase())
      );
    }

    // date filter
    let filteredByDate = filteredBySearch;
    if (filter.date) {
      filteredByDate = filteredBySearch.map((city) => {
        const filteredForecast = city.forecast.filter((forecast: Forecast) =>
          forecast.date === filter.date
        );
        return { ...city, forecast: filteredForecast };
      }).filter((city) => city.forecast.length > 0);
    }

    // Update filtered cities
    this.filteredCities = filteredByDate;

    // Check for no matches
    if (this.filteredCities.length === 0) {
      this.errorMessage = `No results found for the applied filters.`;
    } else {
      this.errorMessage = ''; // Clear error message if results found
    }
  }

  onUnitChange(selectedUnit: string): void {
    this.selectedUnit = selectedUnit;
  }

  getTemperature(forecast: Forecast): number {
    return this.selectedUnit === 'Celsius'
      ? forecast.temperatureCelsius
      : forecast.temperatureFahrenheit;
  }

  getTemperatureSymbol(): string {
    return this.selectedUnit === 'Celsius' ? '°C' : '°F';
  }
}
