describe('Uber', function() {

  beforeEach(browser => browser.url('https://www.uber.com/fr/fr/%27));

  test('Open Uber Website', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.elementPresent('title')
      .assert.elementPresent('head')
      .end();
  });

test('Check block login in the header wrapper', function (browser) {
    browser
      .waitForElementVisible('body')
      .useXpath()
      .assert.visible('//[@id="main"]/nav/div/ul[4]/li[4]/button', 'Sign in button is visible')
      .assert.visible('//[@id="main"]/nav/div/ul[4]/li[5]/button', 'Sign up button is visible')
      .useCss()
      .end();
  });