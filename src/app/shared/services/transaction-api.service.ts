import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionModel } from '../models/transaction.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TransactionApiService {
  apiUrl = environment.server + '/api/v1/accounts';
  constructor(private http: HttpClient) {}

  createTransaction(
    transaction: TransactionModel,
    accountId: number | undefined,
  ) {
    return this.http.post(
      this.apiUrl + '/' + accountId + '/transactions',
      transaction,
    );
  }

  getTransactionsByAccountId(accountId: number, days: number) {
    return this.http.get<TransactionModel[]>(
      this.apiUrl + '/' + accountId + '/transactions',
      { params: { days: days.toString() } },
    );
  }

  getAllTransactions(days: number) {
    return this.http.get<TransactionModel[]>(this.apiUrl + '/transactions', {
      params: { days: days.toString() },
    });
  }
}
