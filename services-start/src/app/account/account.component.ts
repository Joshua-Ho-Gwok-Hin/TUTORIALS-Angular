import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, staddtus: string };
  @Input() someId: number;

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) { }


  onSetTo(status: string) {

    this.accountsService.onStatusChanged(this.someId, status)
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
