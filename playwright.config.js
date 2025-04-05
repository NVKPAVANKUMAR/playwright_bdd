const { devices} = require("@playwright/test");
const { defineBddConfig, cucumberReporter } = require("playwright-bdd");

const bddConfig = defineBddConfig({
  paths: ["features/login.feature"], // Where your feature files are
  steps: ["fixtures/fixtures.js", "steps/*.js"], // Path to your step definitions
  tags: "@login",
});

module.exports = {
  testDir: bddConfig, // Where feature files are located
  fullyParallel: true,
  workers: 2,
  use: {
    video: "on",
    headless: !!process.env.CI, // Runs headless if in CI, otherwise headed,
    baseURL:
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", // Base URL for navigation
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  reporter: [
    cucumberReporter("html", {
      outputFile: `cucumber-report/playwright-report-${(() => {
        const now = new Date();
        const date = now.toLocaleDateString("en-CA"); // Format: YYYY-MM-DD
        const time = now
          .toLocaleTimeString("en-GB", { hour12: false }) // Format: HH:MM:SS
          .replace(/:/g, "-");
        const milliseconds = now.getMilliseconds().toString().padStart(3, "0");
        return `${date}T${time}-${milliseconds}Z`;
      })()}.html`,
    }),
  ], // Optional HTML report
};
