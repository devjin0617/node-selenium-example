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
async function start () {
  const data = await driver.findElements(By.css('.btn_util.btn_menu'));
  data.click(); // click test
}
start()
// driver.quit();
