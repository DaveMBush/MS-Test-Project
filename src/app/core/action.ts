import {Action as NgRxAction} from '@ngrx/store';
export interface Action extends NgRxAction {
    // tslint:disable-next-line:no-any
    payload?: any;
}
