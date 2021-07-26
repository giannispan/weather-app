import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SortByPipe } from './pipes/sort-by-property.pipe';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
	declarations: [
		AppComponent,
		DropdownMenuComponent,
		DashboardComponent,
		SortByPipe,
		HeaderComponent
	],
	imports: [BrowserModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
