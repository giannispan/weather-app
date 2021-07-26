import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';

const API = 'http://localhost:1234/api/cities';

// Service visible throughout the app
@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) {}

	getAllCities(): Observable<City[]> {
		return this.http.get<City[]>(`${API}`);
	}

	addCity(name: string): Observable<City> {
		return this.http.post<City>(`${API}`, { name });
	}

	removeCity(id: string): Observable<City> {
		return this.http.delete<City>(`${API}/${id}`, {});
	}

	getTemperatureData(): Observable<City[]> {
		return this.http.get<City[]>(`${API}/check`);
	}
}
