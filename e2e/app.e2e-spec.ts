import { DesignToolsPage } from './app.po';

describe('design-tools App', function() {
  let page: DesignToolsPage;

  beforeEach(() => {
    page = new DesignToolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
