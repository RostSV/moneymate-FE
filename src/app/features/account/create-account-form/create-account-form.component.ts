import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AccountApiService} from "../../../shared/services/account-api.service";
import {CurrencyModel} from "../../../shared/models/currency.model";
import {CurrencyApiService} from "../../../shared/services/currency-api.service";
import {AccountType} from "../../../shared/models/account-type.enum";
import {NgForm} from '@angular/forms';
import {AccountModel} from "../../../shared/models/account.model";
import {environment} from "../../../../environments/environment.development";

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html'
})
export class CreateAccountFormComponent implements OnInit{
  currencies: CurrencyModel[] = [];
  accountTypes = Object.values(AccountType);
  account: AccountModel = {}
  selectedType: string | undefined;
  selectedCurrencyCode: any;

  constructor(private activeModal: NgbActiveModal,
              private accountApiService: AccountApiService,
              private currencyApiService: CurrencyApiService){}

  ngOnInit() {
    this.currencyApiService.getCurrencies().subscribe(currencies => {
      this.currencies = currencies;
      //TODO refactor this
      this.selectedType = AccountType.PERSONAL;
      this.selectedCurrencyCode = this.currencies
        .find(currency => currency.code === environment.defaultCurrencyCode)?.code;
    });
  }


  close(){
    this.activeModal.dismiss();
  }
  onSubmit(form: NgForm) {
    console.log(this.selectedType);
    if(form.invalid){
      return;
    }

    this.account.type =  this.selectedType as AccountType;
    this.account.currency = this.currencies.find(currency => currency.code === this.selectedCurrencyCode);


    this.accountApiService.createAccount(this.account).subscribe(() => {
      this.activeModal.close();
    });

  }
}
