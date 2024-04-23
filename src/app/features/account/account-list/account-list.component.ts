import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html'
})
export class AccountListComponent {
  @Input()
  accounts: any;

  constructor(private router: Router) {}
  onAccountClick(account: any) {
    this.router.navigate(['/accounts', account.id]);
  }
}
