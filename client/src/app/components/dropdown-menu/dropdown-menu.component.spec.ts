import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuComponent } from './dropdown-menu.component';

import { SortByPipe } from '../../pipes/sort-by-property.pipe';

describe('DropdownComponent', () => {
	let component: DropdownMenuComponent;
	let fixture: ComponentFixture<DropdownMenuComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DropdownMenuComponent, SortByPipe]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DropdownMenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
