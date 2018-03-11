import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

    private BASE_API = 'http://localhost:5000';
    private END_POINT_PIZZA = this.BASE_API + '/pizzas/';
    private END_POINT_ORDER = this.BASE_API + '/order/';

    constructor(private _http: HttpClient) {}

    makeOrder() {
        return this._http.get(this.END_POINT_ORDER);
    }

    getAllPizzas() {
        return this._http.get(this.END_POINT_PIZZA);
    }
}