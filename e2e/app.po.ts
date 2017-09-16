import { browser, element, by, promise } from 'protractor';

export class Ng2SeedPage {
  navigateTo(): promise.Promise<object> {
    return browser.get('/');
  }

  getParagraphText(): promise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
