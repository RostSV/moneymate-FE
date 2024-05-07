import { Component, Input } from '@angular/core';
import { TransactionModel } from '../../../models/transaction.model';
import { TransactionType } from '../../../models/transaction-type.enum';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { TimeDatePipe } from '../../../time-date.pipe';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionInfoComponent} from "../../../modals/transaction-info/transaction-info.component";

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

  constructor(private modalService: NgbModal) {
  }

  openInfo() {
    const modalRef = this.modalService.open(TransactionInfoComponent, { centered: true });
    modalRef.componentInstance.transaction = this.transaction;
  }
}
