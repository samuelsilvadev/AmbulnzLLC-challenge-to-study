import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppService } from './app.service';

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {

    listOrders: Array<any> = [];
    totalPrice = 0;
    totalTime = 0;
    pizzas$: Observable<any>;
    textOrder: any;

    constructor(private _service: AppService) {
        this.pizzas$ = this._service.getAllPizzas();
    }

    order(pizza: any) {
        this._service.makeOrder().subscribe((data: any) => {
            console.log(data);
            if (data.success) {
                this.totalTime += data.deliveryTime;
                this.totalPrice += pizza.price;
                this.listOrders.push(pizza);
                this.textOrder = `Your order will be delivered in ${this._millisToMinutesAndSeconds(this.totalTime)} minutes`;
            }
        })
    }

    private _millisToMinutesAndSeconds(millis: number) {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds;
    }
}