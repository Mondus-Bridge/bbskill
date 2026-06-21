import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const SBPUrl = `${process.env.BASE_URL}${process.env.SBP_URL}`;
const env = process.env.TEST_ENV || 'dev'

test.describe("Check avability and visibility of SBP Page", {
    tag: ['@prod', '@app', '@sbp']
  },  () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);
      await pm.loginPage.goto(SBPUrl);
    });

    test("Create SBP payment and check the link", async ({ context })=>{
      const pagePromise = context.waitForEvent('page');
      await pm.sbPage.youPayBtn.waitFor({ state: 'visible' });
      await pm.sbPage.fillYouPayInput(10000);
      await pm.walletPage.setTimeout(500);
      await pm.sbPage.payBtn.click();
      await pm.sbPage.payBtnInModal.waitFor({ state: 'visible' });
      await pm.sbPage.payBtnInModal.click();

      const newTab = await pagePromise;
      await newTab.waitForLoadState();
      const qrElement = newTab.locator('div').filter({ hasText: 'Для оплатыотсканируйте QR' }).nth(3);
      await expect(qrElement).toBeVisible({ timeout: 10000 });
    });
    test("Check SBP screen", async ()=>{
      await pm.sbPage.youPayBtn.waitFor({ state: 'visible' });
      await pm.sbPage.fillYouPayInput(10000);
      await pm.walletPage.setTimeout(500);
      await expect.soft(pm.sbPage.sbpFullPage).toHaveScreenshot(`${env}-sbp.png`);
   });
});

