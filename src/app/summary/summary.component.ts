import { Component, OnInit } from '@angular/core';
import { ordersData, types, IFilteredValues } from '../../assets/orders';

@Component({
	selector: 'app-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {

	sumTypes: Array<IFilteredValues> = [
		{
			"key": "income",
			"value": 0,
		},
		{
			"key": "outcome",
			"value": 0,
		},
		{
			"key": "loans",
			"value": 0,
		},
		{
			"key": "investments",
			"value": 0,
		},
	]

	tabs = types;

	sumOrders: number = ordersData.length;

	ngOnInit(): void {
		this.filtering();
	}


	private filtering(): void {
		ordersData.forEach(order => {
			if (order.type === 'income') {
				this.sumTypes[0].value += 1;
			} else if (order.type === 'outcome') {
				this.sumTypes[1].value += 1;
			} else if (order.type === 'loans') {
				this.sumTypes[2].value += 1;
			} else if (order.type === 'investments') {
				this.sumTypes[3].value += 1;
			}
		});
	}

}
