import { AccountItem } from './account-item/account-item';
import { AccountSummaryResponse } from './account-summary-response';
import { Observable } from 'rxjs/Rx';
import { AccountSummary } from './account-summary';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountSummaryService {

  constructor() { }
  list(accountSummary: AccountSummary): Observable<AccountSummaryResponse> {
    // normally we would use httpClient here, but for now we will fake the returns using Observable.of();
    const list: Array<AccountItem> = [
      {
        id: 1,
        accountNumber: '5200',
        name: 'IRA',
        balance: 5763.36,
        percentChange: -0.08,
        valueChange: -8916.69
      },
      {
        id: 2,
        accountNumber: '1812',
        name: 'AAA',
        balance: 2010926.10,
        percentChange: 0.21,
        valueChange: 38881.63
      },
      {
        id: 3,
        accountNumber: '3810',
        name: 'AAA',
        balance: 10050054.07,
        percentChange: 0.07,
        valueChange: 8916.69
      },
      {
        id: 4,
        accountNumber: '0029',
        name: 'AAA',
        balance: 39160334.42,
        percentChange: -0.07,
        valueChange: -31435.87
      },
      {
        id: 5,
        accountNumber: '0146',
        name: 'IRA',
        balance: 15884302.39,
        percentChange: 0.03,
        valueChange: 7430.83
      },
      {
        id: 6,
        accountNumber: '2019',
        name: 'REG',
        balance: 13465679.34,
        percentChange: 0.00,
        valueChange: 0.00
      }
    ];
    let returnArray: Array<AccountItem>;
    let fieldName: string;
    switch(accountSummary.sortField) {
      case 'account':
        fieldName = 'accountNumber';
        break;
      case 'cash':
        fieldName = 'balance';
        returnArray = list.sort()
    }
    returnArray = list.sort((itemA: AccountItem, itemB: AccountItem) =>
      itemA[fieldName] < itemB[fieldName] ? -1 : (itemA[fieldName] > itemB[fieldName] ? 1 : 0) );

    if(accountSummary.sortOrder === 'des') {
      returnArray = returnArray.reverse();
    };

    if(accountSummary.countToReturn === '3') {
      returnArray = returnArray.slice(0, 3);
    }
    return Observable.of({start: 0, count: returnArray.length, total: 6, records: returnArray});
  }

}
