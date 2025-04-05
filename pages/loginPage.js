// pages/loginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("input[placeholder='Username']");
    this.passwordInput = page.locator("input[placeholder='Password']");
    this.loginButton = page.locator("button[type='submit']");
  }

  async navigate() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForURL(/dashboard/);
  }

  getPage() {
    return this.page;
  }
}

module.exports = { LoginPage };