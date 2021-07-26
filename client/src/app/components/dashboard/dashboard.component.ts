import {
	Component,
	Input,
	Output,
	EventEmitter,
	ChangeDetectionStrategy
} from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
	@Input() selectedItems: any;
	@Input() buttonName: any;
	@Input() isButtonDisabled: any;
	@Output() removeItemFromDashboard = new EventEmitter();
	@Output() fetchTempData = new EventEmitter();

	onRemoveButtonClick(selectedItem: any) {
		this.removeItemFromDashboard.emit(selectedItem);
	}

	onFetchData() {
		this.fetchTempData.emit();
	}
}
