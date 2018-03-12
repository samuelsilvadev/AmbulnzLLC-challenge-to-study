import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { AppService } from './app.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [AppComponent, MessageComponent],
    bootstrap: [AppComponent],
    providers: [AppService]
})
export class AppModule { }