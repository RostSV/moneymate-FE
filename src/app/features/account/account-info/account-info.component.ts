import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { AccountModel } from '../../../shared/models/account.model';
import { AccountApiService } from '../../../shared/services/account-api.service';
import { TransactionApiService } from '../../../shared/services/transaction-api.service';
import { TransactionModel } from '../../../shared/models/transaction.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';
import { environment } from '../../../../environments/environment.development';
import { ExpenseIncomeTotalService } from '../../../shared/services/utilities/expense-income-total.service';
import { TotalExpenseIncomeModel } from '../../../shared/models/chartModels/total-expense-income.model';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
})
export class AccountInfoComponent implements OnInit {
  account$: Observable<AccountModel | undefined>;
  transactions$: Observable<TransactionModel[] | undefined>;
  refreshSubject = new BehaviorSubject(undefined);

  id: number = 0;
  account: AccountModel | undefined;
  days: number;
  pieChartData: TotalExpenseIncomeModel[] = [];

  constructor(
    private router: ActivatedRoute,
    private accountService: AccountApiService,
    private transactionService: TransactionApiService,
    private modalService: NgbModal,
    private transactionCalculator: ExpenseIncomeTotalService,
  ) {
    this.account$ = new Observable<AccountModel>();
    this.transactions$ = new Observable<TransactionModel[]>();
    this.days = environment.defaultDaysLimit;
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((value) => {
      this.id = Number(value.get('id'));
      this.refreshSubject.next(undefined);
    });

    this.account$ = this.refreshSubject.pipe(
      switchMap(() => this.accountService.getAccountById(this.id)),
    );
    this.transactions$ = this.refreshSubject.pipe(
      switchMap(() =>
        this.transactionService.getTransactionsByAccountId(this.id, this.days),
      ),
    );

    this.account$.subscribe((account) => {
      this.account = account;
    });

    this.transactions$.subscribe((transactions) => {
      if (transactions) {
        this.pieChartData = [
          ...this.transactionCalculator.calculateTotal(transactions),
        ];
      }
    });
  }

  addTransaction() {
    const modalRef = this.modalService.open(TransactionFormComponent, {
      centered: true,
    });
    modalRef.componentInstance.account = this.account;
    modalRef.result.then(() => this.refreshSubject.next(undefined));
  }

  openSettings() {
    console.log('open settings');
  }

  changeInterval($event: number) {
    this.days = $event;
    this.refreshSubject.next(undefined);
  }
}
