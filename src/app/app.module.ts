import { AccountSummaryService } from './routes/account-summary/account-summary.service';
import { AccountSummaryEffects } from './routes/account-summary/account-summary.effects';
import { AccountSummaryReducer } from './routes/account-summary/account-summary.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountSummaryComponent } from './routes/account-summary/account-summary.component';
import { AccountItemComponent } from './routes/account-summary/account-item/account-item.component';

@NgModule({
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
  bootstrap: [AppComponent]
})
export class AppModule { }
