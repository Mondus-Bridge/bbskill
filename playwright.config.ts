import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

// Helper to load environment variables for a given stage
function loadEnv(stage: 'dev' | 'preprod' | 'prod') {
  const envPath = path.resolve(__dirname, `.env.${stage}`);
  dotenv.config({ path: envPath });
}

// Factory that creates a Playwright project for a specific app, test type, and stage
function makeProject(
  app: 'lending' | 'app' | 'admin',
  type: 'e2e' | 'api' | 'screenshot',
  stage: 'dev' | 'preprod' | 'prod'
) {
  const name = `${app}-${type}-${stage}`;
  loadEnv(stage);

  const base = {
    baseURL: process.env.BASE_URL,
    auth: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
  };

  const use: Record<string, any> = { ...base };

  // Browser/device selection per test type
  if (type === 'e2e') {
    Object.assign(use, devices['Desktop Chrome']);
  } else if (type === 'screenshot') {
    use.viewport = { width: 1280, height: 720 };
    Object.assign(use, devices['Desktop Chrome']);
  }
  // API tests do not need a browser – keep defaults

  return {
    name,
    testDir: `tests/${type}/${app}`,
    use,
  };
}

// Build the matrix: 3 apps × 3 types × 3 stages = 27 projects
const apps = ['lending', 'app', 'admin'] as const;
const types = ['e2e', 'api', 'screenshot'] as const;
const stages = ['dev', 'preprod', 'prod'] as const;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: apps
    .flatMap(app => types.flatMap(type => stages.map(stage => makeProject(app, type, stage)))),
});
