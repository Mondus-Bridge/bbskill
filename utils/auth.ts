import { test as baseTest } from '@playwright/test';

type Auth = {
  username?: string;
  password?: string;
};

export const test = baseTest.extend<{
  auth: Auth;
}>({
  // Default empty auth; will be filled from project.use
  auth: [{}, { scope: 'test' }],

  // Override the page fixture to perform login when credentials exist
  page: async ({ page, auth, baseURL }, use) => {
    if (auth.username && auth.password) {
      const loginUrl = `${baseURL}/auth/login?url=/`;
      await page.goto(loginUrl);
      await page.fill('input[name="username"]', auth.username);
      await page.fill('input[name="password"]', auth.password);
      await page.click('button[type="submit"]');
      // Adjust the post‑login URL pattern if your app redirects elsewhere
      await page.waitForURL('**/dashboard');
    }
    await use(page);
  },
});
