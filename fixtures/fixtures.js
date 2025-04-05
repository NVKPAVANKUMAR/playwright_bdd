const { test: bddTest } = require("playwright-bdd");
const { LoginPage } = require("../pages/loginPage");
const { DashboardPage } = require('../pages/dashboardPage');
const { PlaywrightPage } = require("../pages/playwrightPage");
const { GetStartedPage } = require("../pages/getStartedPage");

const test = bddTest.extend({
  loggedInPage: [
    async ({ page }, use) => {
      const loginPage = new LoginPage(page);
      await use(loginPage);
    },
    { auto: false }, // Non-auto fixture
  ],
  dashboardPage: [
    async ({ loggedInPage }, use) => {
      const dashboardPage = new DashboardPage(loggedInPage.getPage());
      await use(dashboardPage);
    },
    { auto: false },
  ],
  playwrightPage: [
    async ({ page }, use) => {
      const playwrightPage = new PlaywrightPage(page);
      await use(playwrightPage);
    },
    { auto: false }, // Non-auto fixture
  ],
  getStartedPage: [
    async ({ playwrightPage }, use) => {
      const getStartedPage = new GetStartedPage(playwrightPage.getPage());
      await use(getStartedPage);
    },
    { auto: false },
  ],
});
module.exports = { test, expect: require("@playwright/test").expect };
