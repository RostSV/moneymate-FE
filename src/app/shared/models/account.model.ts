import {AccountType} from "./account-type.enum";
import {CurrencyModel} from "./currency.model";
import {UserModel} from "./user.model";

export interface AccountModel {
  id?: number;
  name?: string;
  description?: string;
  balance?: number;
  type?: AccountType;
  currency?: CurrencyModel;
  createdBy?: UserModel;
}
