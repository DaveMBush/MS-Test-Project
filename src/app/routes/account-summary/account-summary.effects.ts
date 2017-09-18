import { AccountSummaryResponse } from './account-summary-response';
import { AccountSummaryService } from './account-summary.service';
import { AccountSummary } from './account-summary';
import { Action } from '../../core/action';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import { AppState } from '../../app-state';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AccountSummaryActions } from './account-summary.actions';

@Injectable()
export class AccountSummaryEffects {
    @Effect() _refresh: Observable<Action> = this.update$
        .ofType(AccountSummaryActions.SEARCH)
        .map((): Action => {
            this.store.select((x: AppState) => x.accountSummary)
                .first()
                .subscribe((accountSummary: AccountSummary) =>
                    this.accountSummaryService.list(accountSummary)
                        .subscribe((summaryResults: AccountSummaryResponse) =>
                            this.store.dispatch(AccountSummaryActions.searchResults(summaryResults)))
                );
            return {type: 'noop'};
        });



    constructor(
        private update$: Actions,
        private store: Store<AppState>,
        private accountSummaryService: AccountSummaryService
    ) {
    }
}
