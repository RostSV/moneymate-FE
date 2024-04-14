import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CurrencyModel} from "../models/currency.model";

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {
  // apiUrl = environment.beUrl + `api/v1/categories`;
  apiUrl = 'http://localhost:9090/api/v1/currencies';

  constructor(private http: HttpClient) {
  }

  getCurrencies() {
    return this.http.get<CurrencyModel[]>(this.apiUrl);
  }

}
