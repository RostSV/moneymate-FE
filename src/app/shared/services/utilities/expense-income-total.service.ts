import { Injectable } from '@angular/core';
import {TotalExpenseIncomeModel} from "../../models/chartModels/total-expense-income.model";
import {TransactionModel} from "../../models/transaction.model";

@Injectable({
  providedIn: 'root'
})
export class ExpenseIncomeTotalService {

  constructor() {}

  calculateTotal(transactions: TransactionModel[]){
    let totalIncome = 0;
    let totalExpense = 0;
    transactions.forEach(transaction => {
      if(transaction.type === 'INCOME'){
        totalIncome += transaction.amount;
      } else {
        totalExpense += transaction.amount;
      }
    });
    let result: TotalExpenseIncomeModel[] = [
      {name: 'INCOME', value: totalIncome},
      {name: 'EXPENSE', value: totalExpense}
    ];
    return result;
  }

}
