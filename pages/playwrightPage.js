// pages/dashboardPage.js
class PlaywrightPage {
  constructor(page) {
    this.page = page;
    this.getStarted = page.locator("//a[normalize-space()='Get started']"); // Example locator
  }
  async navigate() {
    await this.page.goto('https://playwright.dev');
  }
  async clickGetStarted() {
    return await this.getStarted.click();
  }

  getPage() {
    return this.page;
  }
}

module.exports = { PlaywrightPage };
