import { AccountSummaryService } from './routes/account-summary/account-summary.service';
import { AccountSummaryEffects } from './routes/account-summary/account-summary.effects';
import { AccountSummaryReducer } from './routes/account-summary/account-summary.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        StoreModule.forRoot({accountSummary: AccountSummaryReducer}),
        EffectsModule.forRoot([AccountSummaryEffects])
      ],
      // Normally, I would PROVIDE the service closer to the component(s) using them
      // but for this demo, I'm just going to stick it in app.module
      providers: [AccountSummaryService],
        }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: object = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
