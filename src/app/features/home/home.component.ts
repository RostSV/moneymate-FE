import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { AsyncPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { TransactionModel } from '../../shared/models/transaction.model';
import { TransactionApiService } from '../../shared/services/transaction-api.service';
import { TransactionsListComponent } from '../../shared/components/transaction/transactions-list/transactions-list.component';
import { environment } from '../../../environments/environment.development';
import { SectionContainerComponent } from '../../core/components/section-container/section-container.component';

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
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  transactions$: Observable<TransactionModel[]>;
  refreshSubject = new BehaviorSubject(undefined);
  days: number = environment.defaultDaysLimit;
  constructor(private transactionService: TransactionApiService) {
    //TODO refactor because we should not have actions in the constructor
    this.transactions$ = this.refreshSubject.pipe(
      switchMap(() => this.transactionService.getAllTransactions(this.days)),
    );
  }

  changeInterval($event: number) {
    this.days = $event;
    this.refreshSubject.next(undefined);
  }
}
