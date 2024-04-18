import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountModel } from '../models/account.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AccountApiService {
  apiUrl = environment.server + '/api/v1/accounts';
  constructor(private http: HttpClient) {}

  getAccounts() {
    return this.http.get<AccountModel[]>(this.apiUrl);
  }

  createAccount(account: AccountModel) {
    return this.http.post<AccountModel>(this.apiUrl, account);
  }

  getAccountById(id: number | null) {
    return this.http.get<AccountModel>(this.apiUrl + '/' + id);
  }
}
