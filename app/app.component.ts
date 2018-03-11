import { AppService } from './app.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {

    listOrders: Array<any> = [];
    totalPrice = 0;
    pizzas$: Observable<any>;

    constructor(private _service: AppService) {
        this.pizzas$ = this._service.getAllPizzas();
    }

    order(pizza: any) {
        this._service.makeOrder().subscribe(data => {
            this.totalPrice += pizza.price;
            this.listOrders.push(pizza);
        })
    }
}