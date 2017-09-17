import { AccountItemComponent } from './routes/account-summary/account-item/account-item.component';
import { AccountSummaryComponent } from './routes/account-summary/account-summary.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AccountSummaryComponent,
        AccountItemComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: object = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
