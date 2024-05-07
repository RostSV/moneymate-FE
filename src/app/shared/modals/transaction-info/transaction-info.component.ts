import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionModel} from "../../models/transaction.model";
import {CurrencyPipe, DatePipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-transaction-info',
  standalone: true,
  imports: [
    DatePipe,
    NgIf,
    CurrencyPipe
  ],
  templateUrl: './transaction-info.component.html'
})
export class TransactionInfoComponent {

  @Input() public transaction: TransactionModel | undefined;
  constructor( private activeModal: NgbActiveModal) {
  }

  close() {
    this.activeModal.dismiss();
  }

}
