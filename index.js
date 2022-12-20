const puppeteer = require('puppeteer');

async function nodeScreenshot(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);
  const screenshot = await page.screenshot();
  await browser.close();
  return screenshot;
}

module.exports = {
  nodeScreenshot,
};
