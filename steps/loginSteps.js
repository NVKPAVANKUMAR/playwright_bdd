// steps/loginSteps.js
const { createBdd } = require('playwright-bdd');
const { test, expect } = require('../fixtures/fixtures');

const { Given, When, Then } = createBdd(test);

Given('I am on the login page', async function ({ loggedInPage }) {
  await loggedInPage.navigate();
});

When('I log in with valid credentials', async function ({ loggedInPage }) {
  await loggedInPage.login('Admin', 'admin123');
});

Then('I should see the dashboard', async function ({ dashboardPage }) {
  await expect(dashboardPage.getPage()).toHaveURL(/dashboard/);
  const welcomeText = await dashboardPage.getWelcomeMessage();
  console.log('Welcome Message:', welcomeText);
  await expect(welcomeText).not.toBe(''); // Adjust based on your app
});

Given('I am on home page', async ({ playwrightPage }) => {
    await playwrightPage.navigate('');
  });
  
  When('I click link {string}', async ({ playwrightPage }, name) => {
    await playwrightPage.clickGetStarted()
  });
  
  Then('I see in title {string}', async ({ getStartedPage }, keyword) => {
    const welcomeText = await getStartedPage.getInstallationText();
    console.log('Welcome Message:', welcomeText);
    await expect(welcomeText).toBe(keyword)
  });