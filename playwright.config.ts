const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 40000,
  expect: {
    toHaveScreenshot: {maxDiffPixelRatio: 0.01}
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['list'], ['html']],
  use: {
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'api-public'
    },
    {
      name: 'api-tests',
      dependencies: ["setup"]
    },
    {
      name: "setup",
      testDir: "./",
      testMatch: "global-setup.ts"
    },
    {
      name: 'chromium',
      dependencies: ["setup"],
      use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 }},
    },
    {
      name: 'firefox',
      dependencies: ["setup"],
      use: { ...devices['Desktop Firefox'], viewport: { width: 1920, height: 1080 }},
    },
    {
      name: 'webkit',
      dependencies: ["setup"],
      use: { ...devices['Desktop Safari'], viewport: { width: 1920, height: 1080 }},
    },
    {
      name: 'lending-chromium',
      use: { ...devices['Desktop Chrome']},
    },
    {
      name: 'lending-firefox',
      use: { ...devices['Desktop Firefox']},
    },
    {
      name: 'lending-webkit',
      use: { ...devices['Desktop Safari']},
    },
    {
      name: 'android-app',
      dependencies: ["setup"],
      use: { ...devices['Pixel 7']},
    },
    {
      name: 'android-lending',
      use: { ...devices['Pixel 7']},
    },
    {
      name: 'ios-app',
      dependencies: ["setup"],
      use: { ...devices['iPhone 15 Pro']},
    },
    {
      name: 'ios-lending',
      use: { ...devices['iPhone 15 Pro']},
    },
  ],
});
