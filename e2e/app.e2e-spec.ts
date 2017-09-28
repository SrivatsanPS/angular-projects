import { FirstangularPage } from './app.po';

describe('firstangular App', () => {
  let page: FirstangularPage;

  beforeEach(() => {
    page = new FirstangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
