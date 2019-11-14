const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const cheerio = require('cheerio');
const request = require('request');

function hideDriver () {
  const chromeCapabilities = webdriver.Capabilities.chrome();
  const chromeOptions = {
    'args': [
      '--headless',
      '--no-sandbox'
    ]
  };
};
// hideDriver()

const driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build()

const url = 'https://jinblog.kr';
driver.get(url);
// driver.quit();