import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: ` <p>Warning Alert</p> `,
    styles: [
        `
      p {
        padding: 20px;
        border: solid 1px red;
        background-color: pink;
      }
    `,
    ],
})
export class WarningAlertComponent implements OnInit {
    ngOnInit(): void { }
}
