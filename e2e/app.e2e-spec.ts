import { GeoffPlayPage } from './app.po';

describe('geoff-play App', function() {
  let page: GeoffPlayPage;

  beforeEach(() => {
    page = new GeoffPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
