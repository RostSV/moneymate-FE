import {Component, Input} from '@angular/core';
import {AccountModel} from "../../../shared/models/account.model";
import {getCurrencySymbol} from "@angular/common";

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html'
})
export class AccountItemComponent {
    @Input() account?: AccountModel;
  protected readonly getCurrencySymbol = getCurrencySymbol;
}
