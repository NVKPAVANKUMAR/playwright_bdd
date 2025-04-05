// pages/dashboardPage.js
class DashboardPage {
  constructor(page) {
    this.page = page;
    this.welcomeMessage = page.locator("//span[@class='oxd-userdropdown-tab']"); // Example locator
    this.logoutButton = page.locator("//a[normalize-space()='Logout']"); // Example locator
  }

  async getWelcomeMessage() {
    return await this.welcomeMessage.textContent();
  }

  async logout() {
    await this.logoutButton.click();
    await this.page.waitForURL(/login/); // Adjust based on your app
  }

  getPage() {
    return this.page;
  }
}

module.exports = { DashboardPage };