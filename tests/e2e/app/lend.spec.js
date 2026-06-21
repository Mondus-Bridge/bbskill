import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const mainPageUrl = `${process.env.BASE_URL}`;
const LendUrl = `${process.env.BASE_URL}${process.env.LEND_URL}`;
const LoanUrl = `${process.env.BASE_URL}${process.env.LOAN_URL}`;
const env = process.env.TEST_ENV || 'dev'

test.describe("Check avability and visibility of Lend Page", {
    tag: ['@prod', '@app', '@lend']
  },  () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);
      await pm.loginPage.goto(mainPageUrl);
    });

    test.afterEach(async ({ page }) => {
      await page.close();
    });

    test("Check Loans web elements", async ()=>{
        await pm.mainPage.findSectionByText("lending Lend and Borrow");
        await pm.walletPage.setTimeout(7000);
        await expect.soft(pm.lendPage.lendContent).toHaveScreenshot(`${env}-loan-content.png`);
    });

    test("Check Lend&Earn web elements", async ()=>{
        await pm.mainPage.findSectionByText("lending Lend and Borrow");
        await pm.lendPage.chooseTab("lend");
        await pm.walletPage.setTimeout(7000);
        await expect.soft(pm.lendPage.lendContent).toHaveScreenshot(`${env}-deposits-content.png`);
    });
});

    test.describe("Check functionality of Lend Page", {
        tag: ['@app', '@lend']
      },  () => {
      test.use({ storageState: authFilePath });
      test.beforeEach(async ({ page }) => {
            pm = new PomManager(page);
            await pm.loginPage.goto(LendUrl);
          });

    test("Create for usdt deposit for 7 days, close it", async ()=>{
        await pm.walletPage.setTimeout(2500);
        await pm.page.keyboard.press('Space');
        await pm.lendPage.agreeAndOpen();
        await pm.walletPage.setTimeout(2500);
        await pm.lendPage.closeFirstOperation();
        await expect.soft(pm.lendPage.lendClosedModalText).toHaveText("Closed");
        await pm.walletPage.setTimeout(2500);
        await pm.lendPage.closeClosedModal();
        await expect.soft(pm.lendPage.lendClosedModalText).not.toBeVisible();
    });
});