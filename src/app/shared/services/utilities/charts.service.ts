import { Injectable } from '@angular/core';
import { TotalExpenseIncomeModel } from '../../models/chartModels/total-expense-income.model';
import { TransactionModel } from '../../models/transaction.model';


interface Item{
  value: number;
  name: string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class chartsService {

  calculateTotal(transactions: TransactionModel[]) {
    let totalIncome = 0;
    let totalExpense = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === 'INCOME') {
        totalIncome += transaction.amount;
      } else {
        totalExpense += transaction.amount;
      }
    });
    let result: TotalExpenseIncomeModel[] = [
      { name: 'INCOME', value: totalIncome },
      { name: 'EXPENSE', value: totalExpense },
    ];
    return result;
  }


  calculateCategory(transactions: TransactionModel[]) {
    let categoryTotals: { [key: string]: number } = {};
    let totalAmount = 0;

    for(let transaction of transactions){
      if(transaction.category != undefined){
        if (transaction.category?.name in categoryTotals) {
          categoryTotals[transaction.category.name] += transaction.amount;
        } else {
          categoryTotals[transaction.category.name] = transaction.amount;
        }
        totalAmount += transaction.amount;
      }
    }

    // Group categories with less than 5% into "Other"
    let otherTotal = 0;
    for(let category in categoryTotals){
      let percentage = (categoryTotals[category] / totalAmount) * 100;
      if (percentage < 5) {
        otherTotal += categoryTotals[category];
        delete categoryTotals[category];
      }
    }
    if (otherTotal > 0) {
      categoryTotals['Other'] = otherTotal;
    }

    // Convert back to array of objects
    let result: { name: string, value: number }[] = [];
    for(let category in categoryTotals){
      result.push({ name: category, value: categoryTotals[category] });
    }

    return result;
  }
}
