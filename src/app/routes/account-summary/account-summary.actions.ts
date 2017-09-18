import { Action } from '../../core/action';
import { AccountSummaryResponse } from './account-summary-response';

export class AccountSummaryActions {
    /* tslint:disable:typedef */
    static SEARCH = 'AccountSummaryActions.Search';
    static SEARCH_RESULTS = 'AccountSummaryActions.SearchResults';
    static LOAD_MORE = 'AccountSummaryActions.LoadMore';
    static CASH_SORT = 'AccountSummaryActions.CashSort';
    static ACCOUNT_SORT = 'AccountSummaryActions.AccountSort';
    /* tslint:enable:typedef */

    static search(): Action {
        return {
            type: AccountSummaryActions.SEARCH
        };
    }

    static searchResults(results: AccountSummaryResponse): Action {
        return {
            type: AccountSummaryActions.SEARCH_RESULTS,
            payload: results
        };
    }

    static loadMore(): Action {
        return {
            type: AccountSummaryActions.LOAD_MORE
        }
    }

    static cashSort(): Action {
        return {
            type: AccountSummaryActions.CASH_SORT
        }
    }

    static accountSort(): Action {
        return {
            type: AccountSummaryActions.ACCOUNT_SORT
        }
    }
}
