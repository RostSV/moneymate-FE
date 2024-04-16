import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {NgbScrollSpy} from "@ng-bootstrap/ng-bootstrap";
import {TimeDatePipe} from "../../../time-date.pipe";
import {TransactionModel} from "../../../models/transaction.model";
import {TransactionItemComponent} from "../transaction-item/transaction-item.component";
import {environment} from "../../../../../environments/environment.development";

@Component({
  selector: 'app-transactions-list',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    NgForOf,
    NgbScrollSpy,
    TimeDatePipe,
    TransactionItemComponent,
    NgIf
  ],
  templateUrl: './transactions-list.component.html'
})
export class TransactionsListComponent {
  @Input()
  transactions: TransactionModel[] | undefined | null;
  @Output() changeIntervalEvent = new EventEmitter<number>();
  protected readonly environment = environment;
  days: number = environment.defaultDaysLimit;
  isEmpty: boolean = true;

  constructor() {

  }

  changeInterval(_days: number) {
    this.days = _days;
    this.changeIntervalEvent.emit(_days);
  }
}
