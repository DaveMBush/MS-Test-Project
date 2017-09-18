import { AccountItem } from './account-item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.css']
})
export class AccountItemComponent implements OnInit {

  @Input('item') item: AccountItem;
  constructor() { }

  ngOnInit(): void {
  }

  absolute(n: number): number {
    if(n < 0) {
      return -1 * n;
    }
    return n;
  }

}
