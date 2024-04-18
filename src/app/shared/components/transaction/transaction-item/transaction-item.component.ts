import { Component, Input } from '@angular/core';
import { TransactionModel } from '../../../models/transaction.model';
import { TransactionType } from '../../../models/transaction-type.enum';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { TimeDatePipe } from '../../../time-date.pipe';

@Component({
  selector: 'app-transaction-item',
  standalone: true,
  imports: [CurrencyPipe, TimeDatePipe, DatePipe],
  templateUrl: './transaction-item.component.html',
})
export class TransactionItemComponent {
  @Input()
  transaction: TransactionModel | undefined;
  protected readonly TransactionType = TransactionType;
}
