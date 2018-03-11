import { AppService } from './app.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {

    pizzas$: Observable<any>;

    constructor(private _service: AppService) {
        this.pizzas$ = this._service.getAllPizzas();
    }
}