import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Observable, switchMap} from "rxjs";
import {AccountModel} from "../../../shared/models/account.model";
import {AccountApiService} from "../../../shared/services/account-api.service";
import {TransactionApiService} from "../../../shared/services/transaction-api.service";
import {TransactionModel} from "../../../shared/models/transaction.model";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html'
})
export class AccountInfoComponent implements OnInit{

  account$: Observable<AccountModel | undefined>;
  transactions$: Observable<TransactionModel[] | undefined>;
  private refreshSubject = new BehaviorSubject(undefined);
  id: number = 0;
  constructor(private router : ActivatedRoute,
              private accountService: AccountApiService,
              private transactionService: TransactionApiService){
    this.account$ = new Observable<AccountModel>();
    this.transactions$ = new Observable<TransactionModel[]>();
  }

  ngOnInit(): void {

    this.router.paramMap.subscribe(value => {
      this.id = Number(value.get('id'));
      this.refreshSubject.next(undefined);
    })

    this.account$ = this.refreshSubject.pipe(switchMap(() => this.accountService.getAccountById(this.id)));
    this.transactions$ = this.transactionService.getTransactionsByAccountId(this.id);

  }
}
