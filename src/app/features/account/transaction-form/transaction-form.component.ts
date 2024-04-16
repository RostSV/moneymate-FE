import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CurrencyModel} from "../../../shared/models/currency.model";
import {CurrencyApiService} from "../../../shared/services/currency-api.service";
import {AccountApiService} from "../../../shared/services/account-api.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CategoryModel} from "../../../shared/models/category.model";
import {CategoryApiService} from "../../../shared/services/category-api.service";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {TransactionModel} from "../../../shared/models/transaction.model";
import {environment} from "../../../../environments/environment.development";
import {TransactionType} from "../../../shared/models/transaction-type.enum";
import {TransactionApiService} from "../../../shared/services/transaction-api.service";
import {AccountModel} from "../../../shared/models/account.model";

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './transaction-form.component.html'
})
export class TransactionFormComponent implements OnInit{
  // @Input() account: AccountModel | undefined;

  transaction: TransactionModel;

  //selectors
  currencies: CurrencyModel[];
  categories: CategoryModel[];
  transactionTypes: TransactionType[];

  //default cur code like 'USD'
  selectedCurrencyCode : string;

  //Default type of transaction
  selectedType : TransactionType;

  //Category
  selectedCategoryName: string;


  account: AccountModel | undefined;
  category: CategoryModel | undefined;



  constructor(private currencyService: CurrencyApiService,
              private accountService: AccountApiService,
              private categoryService: CategoryApiService,
              private activeModal: NgbActiveModal,
              private transactionService: TransactionApiService){

    this.currencies = [];
    this.categories = [];
    this.transactionTypes = Object.values(TransactionType);
    this.selectedCurrencyCode = environment.defaultCurrencyCode;
    this.selectedType = TransactionType.EXPENSE;
    this.selectedCategoryName = '';


    this.transaction = {
      amount: 0,
      type: this.selectedType,
    }


  }
  ngOnInit(): void {

    this.currencyService.getCurrencies()
      .subscribe(currencies => {this.currencies = currencies;});

    this.categoryService.getCategories()
      .subscribe(categories => {this.categories = categories});

  }

  close(){
    this.activeModal.dismiss();
  }
  onSubmit(form: NgForm) {
    if(form.invalid){
      return;
    }

    this.transaction.assignedTo = this.account;
    this.transaction.type = this.selectedType as TransactionType;
    this.transaction.currency = this.currencies.find(currency => currency.code === this.selectedCurrencyCode);
    this.transaction.category = this.categories.find(category => category.name == this.selectedCategoryName);

    this.transactionService.createTransaction(this.transaction, this.account?.id)
      .subscribe(transaction => {
        this.activeModal.close(transaction);
      });
  }
}
