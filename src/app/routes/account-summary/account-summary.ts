import { AccountSummaryResponse } from './account-summary-response';
export interface AccountSummary {
    response: AccountSummaryResponse;
    sortOrder: 'asc' | 'des';
    sortField: 'account' | 'cash'
    countToReturn: '3' | 'all'
}
