import { Component, OnInit } from '@angular/core';
import { City } from './models/city';
import { ApiService } from './services/api.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	title = 'Weather App';

	listOfCities: Array<City> = [
		{ _id: '1', name: 'London' },
		{ _id: '2', name: 'Amsterdam' },
		{ _id: '3', name: 'Paris' },
		{ _id: '4', name: 'Stockholm' },
		{ _id: '5', name: 'Athens' },
		{ _id: '6', name: 'Madrid' },
		{ _id: '7', name: 'Berlin' },
		{ _id: '8', name: 'Rome' },
		{ _id: '9', name: 'Dublin' },
		{ _id: '10', name: 'Lisbon' },
		{ _id: '11', name: 'Brussels' },
		{ _id: '12', name: 'Budapest' },
		{ _id: '13', name: 'Luxembourg' },
		{ _id: '14', name: 'Prague' },
		{ _id: '15', name: 'Vienna' }
	];

	selectedCities: Array<City> = [];

	results: Array<City> = [];

	isButtonDisabled = false;

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.fetchCities();
	}

	addTo(list: Array<City>, city: City): Array<City> {
		list = [...list, city];
		return list;
	}

	removeFrom(list: Array<City>, selectedCity: City): Array<City> {
		return list.filter((item) => item.name !== selectedCity.name);
	}

	filterAvailableCities(
		list: Array<City>,
		selectedCities: Array<City>
	): Array<City> {
		return list.filter(
			(city1) => !selectedCities.some((city2) => city1.name === city2.name)
		);
	}

	fetchCities(): void {
		this.apiService.getAllCities().subscribe(
			(cities: Array<City>) => {
				this.selectedCities = cities;
				this.listOfCities = this.filterAvailableCities(
					this.listOfCities,
					this.selectedCities
				);
			},
			(err) => console.log(err)
		);
	}

	addCity(city: City): void {
		this.apiService.addCity(city.name).subscribe(
			() => {
				this.fetchCities();
				this.listOfCities = this.removeFrom(this.listOfCities, city);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	removeCity(city: City): void {
		// eslint-disable-next-line no-underscore-dangle
		this.apiService.removeCity(city._id).subscribe(
			() => {
				this.fetchCities();
				this.listOfCities = this.addTo(this.listOfCities, city);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	fetchData(): void {
		this.isButtonDisabled = true;
		this.apiService.getTemperatureData().subscribe(
			() => {
				this.fetchCities();
				this.isButtonDisabled = false;
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
