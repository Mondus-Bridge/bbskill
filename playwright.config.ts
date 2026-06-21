// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  // ── Test discovery ──────────────────────────────────────────────
  testDir: './tests',
  testMatch: '**/*.spec.ts',

  // ── Execution ───────────────────────────────────────────────────
  fullyParallel: true,
  forbidOnly: !!process.env.CI,       // fail CI if test.only left in
  retries: process.env.CI ? 2 : 0,    // retry flakes in CI only
  workers: process.env.CI ? '50%' : undefined, // half CPU in CI, auto locally

  // ── Reporting ───────────────────────────────────────────────────
  reporter: process.env.CI
    ? [['html', { open: 'never' }], ['github']]
    : [['html', { open: 'on-failure' }]],

  // ── Timeouts ────────────────────────────────────────────────────
  timeout: 30_000,                     // per-test timeout
  expect: {
    timeout: 5_000,                    // per-assertion retry timeout
  },

  // ── Shared browser context options ──────────────────────────────
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    storageState: '.auth/user.json',
    actionTimeout: 10_000,             // click, fill, etc.
    navigationTimeout: 15_000,         // goto, waitForURL, etc.

    // Artifact collection
    trace: 'on-first-retry',          // full trace on first retry only
    screenshot: 'only-on-failure',     // screenshot on failure
    video: 'retain-on-failure',        // video only kept for failures

    // Sensible defaults
    locale: 'en-US',
    timezoneId: 'America/New_York',
    extraHTTPHeaders: {
      'x-test-automation': 'playwright',
    },
  },

  // ── Projects (browser targets) ─────────────────────────────────
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 7'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 14'] },
    },
  ],

  // ── Dev server ──────────────────────────────────────────────────
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,                  // 2 min for cold builds
    stdout: 'pipe',
    stderr: 'pipe',
  },
});