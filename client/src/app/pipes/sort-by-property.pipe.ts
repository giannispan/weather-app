import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
	name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
	transform(list: any, prop: string): any {
		list.sort((a: any, b: any) => {
			if (a[prop] < b[prop]) {
				return -1;
			}
			if (a[prop] > b[prop]) {
				return 1;
			}
			return 0;
		});
		return list;
	}
}
