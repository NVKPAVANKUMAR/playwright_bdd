// pages/dashboardPage.js
class GetStartedPage {
  constructor(page) {
    this.page = page;
    this.installation = page.locator("//h1[normalize-space()='Installation']"); // Example locator
  }

  async getInstallationText() {
    return await this.installation.textContent();
  }

  getPage() {
    return this.page;
  }
}

module.exports = { GetStartedPage };