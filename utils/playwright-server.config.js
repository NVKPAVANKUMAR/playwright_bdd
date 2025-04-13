import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Server specific settings
  webServer: {
    command: 'npx playwright run-server',
    url: 'http://localhost:4444', // Just a health check URL
    reuseExistingServer: true,
  },
});