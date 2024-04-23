import {Injectable} from '@angular/core';
import {TotalExpenseIncomeModel} from '../../models/chartModels/total-expense-income.model';
import {TransactionModel} from '../../models/transaction.model';
import {environment} from "../../../../environments/environment.development";


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
    let categoryTotals = this.calculateCategoryTotals(transactions);
    let sortedCategories = this.sortCategoriesByTotal(categoryTotals);
    return this.buildResult(sortedCategories, categoryTotals);
  }

  private calculateCategoryTotals(transactions: TransactionModel[]): { [key: string]: number } {
    let categoryTotals: { [key: string]: number } = {};

    for(let transaction of transactions){
      if(transaction.category != undefined){
        if (transaction.category?.name in categoryTotals) {
          categoryTotals[transaction.category.name] += transaction.amount;
        } else {
          categoryTotals[transaction.category.name] = transaction.amount;
        }
      }
    }
    return categoryTotals;
  }

  private sortCategoriesByTotal(categoryTotals: { [key: string]: number }): string[] {
    return Object.keys(categoryTotals)
      .sort((a, b) => categoryTotals[b] - categoryTotals[a]);
  }

  private buildResult(sortedCategories: string[], categoryTotals: { [key: string]: number }) {
    let otherTotal = 0;
    let result = [];
    let count = 0;

    for(let category of sortedCategories){
      if(count < environment.maxCategoriesInPieChar){
        result.push({ name: category, value: categoryTotals[category] });
      }else{
        otherTotal += categoryTotals[category];
        delete categoryTotals[category];
      }
      count++;
    }

    if (otherTotal > 0) {
      categoryTotals['Other'] = otherTotal;
      result.push({ name: 'Other', value: otherTotal });
    }

    return result;
  }

  findLargestTransaction(transactions: TransactionModel[]) {
    return transactions.reduce((prev, current) => {
      return (prev.amount > current.amount) ? prev : current;
    });
  }


  findMostUsedCategory(transactions: TransactionModel[]) {
    const mostFrequent = (arr: TransactionModel[], mapFn: (x: TransactionModel) => string = x => x.category?.name ?? '') =>
      [
        ...arr.reduce((a: Map<string, number>, v: TransactionModel) => {
          const k = mapFn(v);
          a.set(k, (a.get(k) ?? 0) + 1);
          return a;
        }, new Map<string, number>()),
      ].reduce((a: [string, number], v: [string, number]) => (v[1] >= a[1] ? v : a), ['', 0])[0];

    return mostFrequent(transactions);
  }
}
