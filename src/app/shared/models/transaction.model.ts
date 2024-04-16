import {CategoryModel} from "./category.model";
import {CurrencyModel} from "./currency.model";
import {UserModel} from "./user.model";
import {TransactionType} from "./transaction-type.enum";
import {AccountModel} from "./account.model";

export interface TransactionModel{
  id?: number,
  date?: Date,
  amount: number,
  description?: string,
  category?: CategoryModel,
  type: TransactionType,
  currency?: CurrencyModel,
  assignedTo?: AccountModel
}
