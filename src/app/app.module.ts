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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
