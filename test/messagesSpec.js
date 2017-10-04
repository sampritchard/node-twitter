const Browser = require('zombie');
var app = require('../app');
var assert = require('assert');

Browser.localhost('localhost', 3000);

describe('User going to the messages page', () => {
  const browser = new Browser();

  before(() => {
    return browser.visit('/messages');
  })

  describe('Messages page can be seen', () => {
    it('should be successful', () => {
      browser.assert.success();
    })

    it('should return the heading of messages', () => {
      browser.assert.text('h1', 'Messages')
    })

    it('expects to see a list of saved messages', () => {
      browser.assert.text('.messages', 'Hello! Like? Dislike?')
    })
  })

})
