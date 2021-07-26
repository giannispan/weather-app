import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output
} from '@angular/core';

@Component({
	selector: 'app-dropdown-menu',
	templateUrl: './dropdown-menu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownMenuComponent {
	@Input() listOfItems: any = [];
	@Output() selectItem = new EventEmitter();

	selectedItem: any;

	onChange(selectedItem: any) {
		this.selectItem.emit(selectedItem);
	}
}
