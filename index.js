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
  const data = await driver.findElement(By.css('button.btn_util.btn_menu'));
  await driver.executeScript('arguments[0].click();', data)
  const liItem = await driver.findElement(By.css('ul.list_category > li(2) ul.list_sub_category > li(1) > a.link_menu'))
  await driver.executeScript('arguments[0].click();', liItem)
}
start()
// driver.quit();
