import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'message',
    template:
        `
        <div *ngIf="_showMessage" class="message__box">
            <p class="message__text">{{ text }}</p>
        </div>
    `,
    styles: [
        `.message__box {
            background-color: #ef5558;
            height: 10vh;
            position: absolute;
            right: 0;
            text-align: center;
            top: 10%;
            width : 30%;
            z-index: 99999;
        }
        .message__text {
            padding-top: 2vh;
        }

        @media (max-width: 720px) {
            .message__box { 
                width : 50%;
            }
        }

        `
    ]
})
export class MessageComponent implements OnChanges {

    @Input('text') text = '';
    _showMessage = true;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['text']) {
            this._showMessage = true;
            setTimeout(() => {
                this._showMessage = false;
                this.text = '';
            }, 5000);
        }
    }
}