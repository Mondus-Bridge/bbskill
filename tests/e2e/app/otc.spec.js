import { request, test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const authFilePathCorpIP2 = path.resolve(__dirname, '../../../auth/CorpIP2Auth.json');
const mainPageUrl = `${process.env.BASE_URL}`;
const otcPageUrl = `${process.env.BASE_URL}${process.env.OTC_URL}`
const env = process.env.TEST_ENV || 'dev'

test.describe("Check avability and visibility of OTC page in the application", {
    tag: ['@app', '@prod', '@otc']
  }, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);
      await pm.loginPage.goto(mainPageUrl);
    });

    test("OTC functional should be available for this user, user can open the OTC page", async ()=>{
        await expect.soft(pm.mainPage.otcIcon).toBeVisible();
        const otcSection = await pm.mainPage.page.getByRole('link', { name: 'otc OTC Transactions' })
        expect.soft(otcSection).toBeVisible();
        await otcSection.click()
        await pm.mainPage.setTimeout(2000);
        await expect(pm.otcPage.page).toHaveURL(/otc\/offer/);
        await expect(pm.otcPage.otcScreenshot).toHaveScreenshot(`${env}-appOtcMain.png`);
    });
});

test.describe("Check functionality of OTC page for user 885", {
  tag: ['@app', '@prod', '@otc']
}, () => {
  test.use({ storageState: authFilePath });
  test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);
    await pm.loginPage.goto(otcPageUrl);
  });

  test("Create OTC transaction", async ()=>{
    await pm.otcPage.debitInpt.click();
    await pm.otcPage.page.waitForTimeout(500);
    await pm.otcPage.clickRightOne(pm.otcPage.debitList, "USDT");
    await pm.otcPage.page.waitForTimeout(1000);
    await pm.otcPage.debitAmountInpt.fill("10");
    await pm.otcPage.receivingInpt.click();
    await pm.otcPage.page.waitForTimeout(500);
    await pm.otcPage.clickRightOne(pm.otcPage.debitList, "RUBR");
    await pm.otcPage.page.waitForTimeout(500);
    await pm.otcPage.firstRateInpt.fill("0,01136363");
    await pm.otcPage.emailToSend.fill("qa+user2@bitbanker.org");
    await pm.otcPage.commentInpt.fill("Playwright Deal 111");
    await pm.otcPage.createOrderBtn.scrollIntoViewIfNeeded({timeout: 1000});
    const [responseCreateOtc] = await Promise.all([
      pm.otcPage.page.waitForResponse(response => 
        response.url().includes('otc-deals') && response.request().method() === 'POST'
        ),
        pm.otcPage.createOrderBtn.click()
        ]);
        expect(responseCreateOtc.status()).toBe(200);
        const responseOtcResult = await responseCreateOtc.json();
        expect(responseOtcResult).toMatchObject({
          base_id: 6,
          quote_id: 4,
          amount: 10,
          price: 88,
          base_symbol:"USDT",
          quote_symbol: "RUBR",
          cost: 880,
          status: "pending",
          comment: "Playwright Deal 111"
            });
    await pm.otcPage.page.waitForTimeout(2500);
  });

  test("Cancel the request to exchange", async ({request})=>{
    await pm.otcPage.page.getByRole('link', {name: "My transactions"}).click();
    await pm.otcPage.page.waitForTimeout(4500);
    await expect(pm.otcPage.myTransactionScreenshot).toHaveScreenshot(`${env}-myDealsInSent.png`, {
      mask: [pm.otcPage.otcStatusRow, pm.otcPage.otcDateRow]
    })
    await pm.otcPage.otcAnyStatusBtn.getByText("Pending").last().click();
    const [responseCreateOtc] = await Promise.all([
      pm.otcPage.page.waitForResponse(response => 
        response.url().includes('otc-deals/cancel') && response.request().method() === 'POST'
        ),
        pm.otcPage.clickRightOne(pm.otcPage.cancelBtn, "Cancel")
        ]);
        expect(responseCreateOtc.status()).toBe(200);
        const responseOtcResult = await responseCreateOtc.json();
        expect(responseOtcResult).toMatchObject({
          base_id: 6,
          quote_id: 4,
          amount: 10,
          price: 88,
          base_symbol:"USDT",
          quote_symbol: "RUBR",
          cost: 880,
          status: "canceled",
        });
    await pm.otcPage.page.waitForTimeout(2500);
  });

  test("Check the link to create new OTC transaction", async ()=>{
    await pm.otcPage.page.waitForTimeout(3000);
    await pm.otcPage.page.getByRole('link', {name: "Create OTC transaction"})
    await expect(pm.otcPage.otcScreenshot).toHaveScreenshot(`${env}-appOtcMain.png`);
    await pm.otcPage.page.getByRole('link', {name: "My transactions"}).click();
    await pm.otcPage.page.waitForTimeout(1500);
    await pm.otcPage.page.getByText("Inbox").click();
    await pm.otcPage.page.waitForTimeout(3000);
    await expect(pm.otcPage.myTransactionScreenshot).toHaveScreenshot(`${env}-noOtcTransactions.png`);
  });
});