import {Component, OnInit} from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import {AsyncPipe, CurrencyPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { TransactionModel } from '../../shared/models/transaction.model';
import { TransactionApiService } from '../../shared/services/transaction-api.service';
import { TransactionsListComponent } from '../../shared/components/transaction/transactions-list/transactions-list.component';
import { environment } from '../../../environments/environment.development';
import { SectionContainerComponent } from '../../core/components/section-container/section-container.component';
import {BalanceComponent} from "../../shared/components/common/balance/balance.component";
import {AccountModule} from "../account/account.module";
import {AccountApiService} from "../../shared/services/account-api.service";
import {AccountModel} from "../../shared/models/account.model";
import {NgbCarousel, NgbScrollSpy, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import {PieChartComponent} from "../../shared/components/charts/pie-chart/pie-chart.component";
import {TotalExpenseIncomeModel} from "../../shared/models/chartModels/total-expense-income.model";
import {chartsService} from "../../shared/services/utilities/charts.service";
import {SimplePieChartComponent} from "../../shared/components/charts/simple-pie-chart/simple-pie-chart.component";
import {HorizontalChartComponent} from "../../shared/components/charts/horizontal-chart/horizontal-chart.component";
import {
  TransactionItemComponent
} from "../../shared/components/transaction/transaction-item/transaction-item.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    NgClass,
    NgIf,
    RouterLink,
    NgForOf,
    AsyncPipe,
    TransactionsListComponent,
    SectionContainerComponent,
    BalanceComponent,
    AccountModule,
    NgbScrollSpy,
    PieChartComponent,
    NgbCarousel,
    NgbSlide,
    SimplePieChartComponent,
    HorizontalChartComponent,
    CurrencyPipe,
    TransactionItemComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  refreshSubject = new BehaviorSubject(undefined);
  transactions$ : Observable<TransactionModel[]>;
  accounts$: Observable<AccountModel[]>;

  pieChartData: TotalExpenseIncomeModel[] = [];
  categoryPieChartData: any;

  largestTransaction: TransactionModel | undefined;
  theMostUsedCategory: string | undefined;


  //Amount of days to show transactions 7/30/90
  days: number;
  balance: number;
  constructor(private accountService: AccountApiService,
              private transactionService: TransactionApiService,
              private transactionCalculator: chartsService,
              private router: Router) {

    this.balance = 0;
    this.days = environment.defaultDaysLimit
    this.accounts$ = new Observable<AccountModel[]>();
    this.transactions$ = new Observable<TransactionModel[]>();
  }

  ngOnInit(): void {
    //Fetch all accounts
    this.accounts$ = this.refreshSubject.pipe(
      switchMap(() => this.accountService.getAccounts()),
    );

    //Fetch all transactions
    this.transactions$ = this.refreshSubject.pipe(
      switchMap(() =>
        this.transactionService.getAllTransactions(this.days),
      ),
    );

    //Get sum of all accounts balances
    this.accounts$
      .subscribe((accounts)=>{
         this.balance = 0;
        accounts.forEach((account) =>{this.balance += account.balance ? account.balance : 0})
      })

    //Fetch data for charts and info
    this.transactions$.subscribe((transactions) => {
      if (transactions) {
        this.pieChartData = [
          ...this.transactionCalculator.calculateTotal(transactions)
        ];

        this.categoryPieChartData = this.transactionCalculator.calculateCategory(
          transactions
        );

        this.largestTransaction = this.transactionCalculator.findLargestTransaction(
          transactions
        );

        this.theMostUsedCategory = this.transactionCalculator.findMostUsedCategory(
          transactions
        );
      }
    });

  }


  changeInterval($event: number) {
    this.days = $event;
    this.refreshSubject.next(undefined);
  }

  showMoreAccount() {
    this.router.navigate(['/accounts']);
  }

  protected readonly environment = environment;
}
