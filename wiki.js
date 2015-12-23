"use strict";

var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder()
  .usingServer('http://selenium-hub.pp-uswest2.otenv.com/wd/hub')
  .withCapabilities({'browserName': 'chrome'}).build();
var browser2 = new webdriver.Builder()
  .usingServer('http://selenium-hub.pp-uswest2.otenv.com/wd/hub')
  .withCapabilities({'browserName': 'firefox'}).build();

browser.get('http://en.wikipedia.org/wiki/Wiki');
browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
    console.log('Browser1: Found', links.length, 'Wiki links.' )
      browser.quit();
});

browser2.get('http://en.wikipedia.org/wiki/Wiki');
browser2.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
    console.log('Browser2: Found', links.length, 'Wiki links.' )
      browser2.quit();
});
