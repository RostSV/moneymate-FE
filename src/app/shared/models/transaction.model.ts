import { CategoryModel } from './category.model';
import { CurrencyModel } from './currency.model';
import { TransactionType } from './transaction-type.enum';
import { AccountModel } from './account.model';

export interface TransactionModel {
  id?: number;
  createdOn?: Date;
  amount: number;
  description?: string;
  category?: CategoryModel;
  type: TransactionType;
  currency?: CurrencyModel;
  assignedTo?: AccountModel;
}
