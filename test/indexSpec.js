const Browser = require('zombie');
var app = require('../app');
var assert = require('assert');

Browser.localhost('localhost', 3000);

describe('User going to the index page', () => {
  const browser = new Browser();

  before(() => {
    return browser.visit('/');
  })

  describe('User can see the index page', () => {
    it('should be successful', () => {
      browser.assert.success();
    })
  })

})
