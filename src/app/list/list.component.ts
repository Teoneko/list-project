import { Component, OnInit } from '@angular/core';
import { ordersData } from '../../assets/orders';
import { ActivatedRoute } from '@angular/router';

interface IFiltered {
	[key: string]: number
}

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
	orders: IFiltered = {};

	constructor(private route: ActivatedRoute) { }

	tabs: Array<string> = ['income', 'outcome', 'loans', 'investments'];

	tabActive: string = '';

	ngOnInit(): void {
		this.route.queryParamMap
			.subscribe(params => {
				this.orders = {};
				this.tabActive = params.get('tab') ?? '0';
				this.filtering(this.tabs[+this.tabActive]);
			});
	}

	private filtering(orderType: string): void {
		ordersData.forEach(order => {
			if (order.type === orderType) {
				const name = order.name.first + ' ' + order.name.last;
				this.orders[name] ? this.orders[name] += 1 : this.orders[name] = 1;
			}
		});
	}

}
