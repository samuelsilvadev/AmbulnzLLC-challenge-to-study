import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [AppService]
})
export class AppModule { }