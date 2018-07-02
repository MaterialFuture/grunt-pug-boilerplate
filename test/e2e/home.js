module.exports = {
  'Is Page Visible | Check Store Locator': function(browser) {
    browser
      .resizeWindow(1500, 1000)
      .url('https://www.academy.com/')
      .waitForElementVisible('body', 500)
      .assert.containsText('#findStoreLinkBlue', 'Find')
      .pause(1000);
  },

  'Check If Cart Is Empty': function(browser) {
    browser
      .waitForElementVisible('i[id="rh-cart-icon"]', 500)
      .click('i[id="rh-cart-icon"]')
      .pause(3000)
      .assert.containsText('.qc-empty-text', 'empty')

      .pause(1000);
  },

  'Test01': function(browser) {
    browser
      .waitForElementVisible('body', 1000)
      .assert.containsText('#findStoreLinkBlue', 'Find')
      .end();
  }
};
