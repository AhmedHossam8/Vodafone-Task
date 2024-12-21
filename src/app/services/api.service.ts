import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface City {
  id: number;
  city: string;
  forecast: {
    date: string;
    temperatureCelsius: number;
    temperatureFahrenheit: number;
    humidity: number;
  }[];
}

interface Forecast {
  date: string;
  temperatureCelsius: number;
  temperatureFahrenheit: number;
  humidity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:4454';

  constructor(private http: HttpClient) { }

  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.baseUrl}/forecast`);
  }

  getCityForecast(cityId: number): Observable<City> {
    return this.http.get<City>(`${this.baseUrl}/cityForecast/${cityId}`);
  }
}
