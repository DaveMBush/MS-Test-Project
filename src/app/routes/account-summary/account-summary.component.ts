import { AccountItem } from './account-item/account-item';
import { AccountSummaryResponse } from './account-summary-response';
import { AccountSummary } from './account-summary';
import { Observable } from 'rxjs/Rx';
import { AccountSummaryActions } from './account-summary.actions';
import { AppState } from '../../app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  accountPage: Observable<AccountSummary>;
  accountSummaryObservable: Observable<AccountSummaryResponse>;
  rowsObservable: Observable<ReadonlyArray<AccountItem>>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.accountPage = <Observable<AccountSummary>>this.store.select((x: AppState) => x.accountSummary);
    this.accountSummaryObservable = <Observable<AccountSummaryResponse>>this.store.select((x: AppState) => x.accountSummary.response);
    this.rowsObservable = <Observable<ReadonlyArray<AccountItem>>>this.store.select((x: AppState) => x.accountSummary.response.records);
    this.store.dispatch(AccountSummaryActions.search());
  }

  onLoadMore(): void {
    this.store.dispatch(AccountSummaryActions.loadMore());
    this.store.dispatch(AccountSummaryActions.search());
  }

  onCashClick(): void {
    this.store.dispatch(AccountSummaryActions.cashSort());
    this.store.dispatch(AccountSummaryActions.search());
  }

  onAccountClick(): void {
    this.store.dispatch(AccountSummaryActions.accountSort());
    this.store.dispatch(AccountSummaryActions.search());
  }

}
