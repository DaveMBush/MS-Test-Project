import { MSTestProjectPage } from './app.po';

describe('ms-test-project App', () => {
  let page: MSTestProjectPage;

  beforeEach(() => {
    page = new MSTestProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
