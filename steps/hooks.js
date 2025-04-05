// steps/hooks.js
const { createBdd } = require('playwright-bdd');
const { test } = require('../fixtures/fixtures');

const { BeforeAll, AfterAll, Before, After } = createBdd(test);

BeforeAll(async function () {
  console.log('BeforeAll: Global setup');
});

AfterAll(async function () {
  console.log('AfterAll: Global cleanup');
});

Before(async function () {
  console.log('Before: Setting up for scenario');
  // Per-scenario setup (e.g., reset page state)
});

After(async function () {
  console.log('After: Cleaning up after scenario');
  // Per-scenario cleanup (e.g., clear cookies)
});