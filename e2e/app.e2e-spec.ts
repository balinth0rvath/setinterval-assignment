import { SetintervalExamplePage } from './app.po';

describe('setinterval-example App', () => {
  let page: SetintervalExamplePage;

  beforeEach(() => {
    page = new SetintervalExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
