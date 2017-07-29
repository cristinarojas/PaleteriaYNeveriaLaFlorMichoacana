import { PaleteriaProjectPage } from './app.po';

describe('paleteria-project App', () => {
  let page: PaleteriaProjectPage;

  beforeEach(() => {
    page = new PaleteriaProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
