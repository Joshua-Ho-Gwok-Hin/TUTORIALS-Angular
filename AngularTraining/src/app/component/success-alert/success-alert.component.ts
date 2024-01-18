import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: ` <p>Success Alert</p> `,
  styles: [
    `p {
        padding: 20px;
        border: solid 1px green;
        background-color: palegreen;
      }
    `,
  ],
})
export class SuccessAlertComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
