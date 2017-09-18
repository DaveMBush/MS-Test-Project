import { AccountItem } from './account-item/account-item';
export interface AccountSummaryResponse {
    start: number; // starting record - will always be zero for this exercise, but could accomodate virtual scrolling later
    total: number; // total number of records available
    count: number; // total number or recrods returned
    records: ReadonlyArray<AccountItem>;
}
