import {Component, Input} from '@angular/core';
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './balance.component.html'
})
export class BalanceComponent {
  @Input()
  balance: number | undefined;
}
