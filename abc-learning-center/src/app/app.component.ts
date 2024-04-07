import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABC Learning Center';

  @ViewChild('autoShownModal', { static: false }) autoShownModal?: ModalDirective;
  isModalShown = true;
 
  showModal(): void {
    this.isModalShown = true;
  }
 
  hideModal(): void {
    this.autoShownModal?.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }
}
