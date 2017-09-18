import { AccountSummaryActions } from './account-summary.actions';
import { Action } from '../../core/action';
import { AccountSummary } from './account-summary';
import {ActionReducer} from '@ngrx/store';

export function accountSummaryReducer(state: AccountSummary = {
    response: {start: 0, count: 0, records: [], total: 0},
    sortOrder: 'asc',
    sortField: 'account',
    countToReturn: '3'
}, action: Action): AccountSummary {
    switch (action.type) {
        case AccountSummaryActions.SEARCH_RESULTS:
            return Object.assign({}, state, {response: action.payload});
        case AccountSummaryActions.LOAD_MORE:
            return Object.assign({}, state, {countToReturn: 'all'});
        case AccountSummaryActions.CASH_SORT:
            switch(state.sortField) {
                case 'account':
                    return Object.assign({}, state, {sortField: 'cash', sortOrder: 'asc'});
                default:
                    return Object.assign({}, state, {sortOrder: (state.sortOrder === 'asc' ? 'des' : 'asc')});
            }
        case AccountSummaryActions.ACCOUNT_SORT:
            switch(state.sortField) {
                case 'cash':
                    return Object.assign({}, state, {sortField: 'account', sortOrder: 'asc'});
                default:
                    return Object.assign({}, state, {sortOrder: (state.sortOrder === 'asc' ? 'des' : 'asc')});
            }
    default:
            return state;
    }
}

export const AccountSummaryReducer: ActionReducer<AccountSummary>
    = accountSummaryReducer;
