import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import {LendingPage} from '../pages/lendingPage.js';
loadEnv();
const ppUrl = `${process.env.BASE_LENDING_URL}${process.env.PP_URL}`;
let pm;

test.describe("Check Hidden pages", {
    tag: ['@lending', '@prod', '@mobile']
  }, () => {
  test.beforeEach(async ({ page }) => {
    pm = new LendingPage(page);
  });
test('EN Privacy Policy', async () => {
    await pm.goto(ppUrl);
    await pm.wait(10000);
    await pm.removeLandingBanner();
    await expect(pm.page).toHaveScreenshot('pp.png');
    await expect(pm.ppArea).toHaveScreenshot('pp-full.png');
    });
});