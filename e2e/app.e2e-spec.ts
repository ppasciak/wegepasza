import { WegepaszaPage } from './app.po';

describe('wegepasza App', () => {
  let page: WegepaszaPage;

  beforeEach(() => {
    page = new WegepaszaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
