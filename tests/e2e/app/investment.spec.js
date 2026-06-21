import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const mainPageUrl = `${process.env.BASE_URL}`;
const investmentPageUrl = `${process.env.BASE_URL}${process.env.INVESTMENT_URL}`;

test.describe.skip("Check functionality of product: CnBTC", {
        tag: ['@app', '@investment']
      }, () => {
        test.use({ storageState: authFilePath });
        test.beforeEach(async ({ page }) => {
          pm = new PomManager(page);
          await pm.loginPage.goto(`${investmentPageUrl}/89`);
        });

        test.afterEach(async ({ page }) => {
            await page.close();
          });

    test('Check the CnBTC Product', async ()=>{
        await pm.investmentPage.loaded();
        await expect.soft(pm.investmentPage.backButton).toBeVisible();
        await expect.soft(pm.investmentPage.productTitle).toHaveText('CnBTC');
        await expect.soft(pm.investmentPage.productMotto).toHaveText('Empowering your Bitcoin journey in China – secure, dynamic, and profitable.');
        await expect.soft(pm.investmentPage.productFirstInvestButton).toBeVisible();
        await expect.soft(pm.investmentPage.productAbout).toBeVisible();
        await expect.soft(pm.investmentPage.productAboutText).toBeVisible();
        await expect.soft(pm.investmentPage.productIdeaText).toBeVisible();
        await pm.page.keyboard.press('Space');
        await pm.page.keyboard.press('Space');
        await expect.soft(pm.investmentPage.productYieldtText).toBeVisible();
        await expect.soft(pm.investmentPage.productProtectiontTextPartOne).toBeVisible();
        await pm.page.keyboard.press('Space');
        await expect.soft(pm.investmentPage.productLastInvestButton).toBeVisible();
    });

    test('Check the navigation buttons', async ()=>{
        await pm.investmentPage.loaded();
        await pm.investmentPage.productFirstInvestButton.click();
        await pm.investmentPage.loaded();
        await expect.soft(pm.investmentPage.producPurchasePageTitle).toHaveText('Buying an investment product');
        await pm.investmentPage.productPurchaseDetailedButton.click()
        await pm.investmentPage.loaded();
        await pm.page.keyboard.press('Space');
        await pm.page.keyboard.press('Space');
        await pm.page.keyboard.press('Space');
        await pm.investmentPage.productLastInvestButton.click();
        await pm.investmentPage.loaded();
        await expect.soft(pm.investmentPage.productPurchaseButton).toHaveText('Buy CNB');
    });

    test('Try to purchace with no balance CNB', async ()=> {
        await pm.investmentPage.loaded();
        await pm.investmentPage.productFirstInvestButton.click();
        await pm.investmentPage.loaded();
        await pm.investmentPage.productPurchaseButton.click();
        await expect.soft(pm.investmentPage.productPurchaseInputError).toHaveText('Required field');
        await pm.investmentPage.fillYouRecieve("10000");
        await pm.walletPage.setTimeout(1500);
        await expect.soft(pm.investmentPage.productPurchaseInputError).toHaveText('Insufficient funds, top up your USDT balance');
        await pm.walletPage.setTimeout(1500);
        const extractedValue = await pm.investmentPage.extractNumberFromDiv()
        expect(extractedValue).not.toBeNull();
        expect(extractedValue).toBeGreaterThan(200); 
        expect(extractedValue).toBeLessThan(250);    
    });
});