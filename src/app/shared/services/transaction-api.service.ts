import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TransactionModel} from "../models/transaction.model";

@Injectable({
  providedIn: 'root'
})
export class TransactionApiService {

  apiUrl = 'http://localhost:9090/api/v1/accounts';
  constructor(private http: HttpClient) {}

  getTransactionsByAccountId(accountId: number, days: number){
    return this.http.get<TransactionModel[]>(this.apiUrl + '/' + accountId + '/transactions',
      {params: {days: days.toString()}});
  }

  createTransaction(transaction: TransactionModel, accountId: number | undefined){
    return this.http.post(this.apiUrl + '/' + accountId + '/transactions', transaction);
  }
}

