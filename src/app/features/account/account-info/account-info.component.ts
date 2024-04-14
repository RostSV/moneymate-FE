import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Observable, switchMap} from "rxjs";
import {AccountModel} from "../../../shared/models/account.model";
import {AccountApiService} from "../../../shared/services/account-api.service";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html'
})
export class AccountInfoComponent implements OnInit{

  account$: Observable<AccountModel | undefined>;

  private refreshSubject = new BehaviorSubject(undefined);

  constructor(private route : ActivatedRoute,
              private accountService: AccountApiService){
    this.account$ = new Observable<AccountModel>();
  }

  ngOnInit(): void {

    this.account$ = this.refreshSubject
      .pipe(switchMap(() => this.route.paramMap))
      .pipe(switchMap(value => {
        const id = Number(value.get('id'));
          return this.accountService.getAccountById(id);
      }))
  }
}
