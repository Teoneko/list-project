import { Component, OnInit } from '@angular/core';
import { ordersData, types, IFilteredNames } from '../../assets/orders';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
	orders: IFilteredNames = {};

	constructor(private route: ActivatedRoute) { }

	tabs = types;

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