import { LightingsPage } from './app.po';

describe('lightings App', () => {
  let page: LightingsPage;

  beforeEach(() => {
    page = new LightingsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
