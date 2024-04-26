import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyModel } from '../models/currency.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyApiService {
  apiUrl = environment.beUrl + '/api/v1/currencies';

  constructor(private http: HttpClient) {}

  getCurrencies() {
    return this.http.get<CurrencyModel[]>(this.apiUrl);
  }
}
