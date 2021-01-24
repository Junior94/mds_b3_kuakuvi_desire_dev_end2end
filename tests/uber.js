describe('Uber', function() {

  beforeEach(browser => browser.url('https://www.uber.com/fr/fr/%27));

  test('Open Uber Website', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.elementPresent('title')
      .assert.elementPresent('head')
      .end();
  });