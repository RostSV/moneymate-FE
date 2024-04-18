import { Component } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { AccountModel } from '../../../shared/models/account.model';
import { AccountApiService } from '../../../shared/services/account-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateAccountFormComponent } from '../create-account-form/create-account-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
})
export class AccountListComponent {
  title: string = 'Accounts';
  subtitle: string =
    'Track your transactions effortlessly with the power of categorized spending.';
  titleImgUrl: string = 'assets/media/moneyBag.png';
  buttonTitle: string = 'Add account';

  accounts$: Observable<AccountModel[]>;
  refreshSubject = new BehaviorSubject(undefined);

  constructor(
    private accountService: AccountApiService,
    private modalService: NgbModal,
    private router: Router,
  ) {
    this.accounts$ = this.refreshSubject.pipe(
      switchMap(() => this.accountService.getAccounts()),
    );
  }

  addAccount() {
    this.modalService
      .open(CreateAccountFormComponent, { centered: true })
      .result.then(() => this.refreshSubject.next(undefined));
  }

  onAccountClick(account: AccountModel) {
    this.router.navigate(['accounts', account.id]);
  }
}
