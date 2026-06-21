import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { AppMobilePage } from '../pages/appMobilePage.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const mainPageUrl = `${process.env.BASE_URL}`;
const env = process.env.TEST_ENV || 'dev'

test.describe("Visaul testing for application", {
    tag: ['@mobileapp', '@prod']
  }, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
        pm = new AppMobilePage(page);
        await pm.goto(mainPageUrl);
        await pm.wait(5000);
    });
    test("Visual test for main page", async ()=>{
        await expect(pm.page).toHaveScreenshot(`${env}-app-main.png`, {
            mask: [pm.totalBalanceAmountArea, pm.balanceAmountArea],
            maxDiffPixelRatio: 0.03
        });
        await expect(pm.page.locator("footer.flex")).toHaveScreenshot(`${env}-app-main-footer.png`)
    });

    test("Visual test for main page header buttons", async ()=>{
        await pm.page.locator('.button').first().click();
        await pm.wait(2000);
        await expect.soft(pm.page).toHaveScreenshot(`${env}-profile-mobile-full.png`, {
            fullPage: true
        });
        await pm.page.getByRole('banner').getByRole('img').click();
        await pm.page.getByRole('link', { name: 'Deposit' }).click();
        await pm.wait(2000);
        await expect.soft(pm.page).toHaveScreenshot(`${env}-wallet-deposit-full.png`, {
            fullPage: true
        });
        await pm.page.getByRole('banner').getByRole('img').click();
        await pm.page.getByRole('link', { name: 'Transfer' }).click();
        await pm.wait(2000);
        await expect.soft(pm.page).toHaveScreenshot(`${env}-wallet-transfer-full.png`, {
            fullPage: true
        });
        await pm.page.getByRole('banner').getByRole('img').click();
        await pm.page.getByRole('link', { name: 'Withdraw' }).click();
        await pm.wait(2000);
        await expect.soft(pm.page).toHaveScreenshot(`${env}-wallet-withdraw-full.png`, {
            fullPage: true
        });
        await pm.page.getByRole('banner').getByRole('img').click();
        await pm.page.getByRole('link', { name: 'History' }).click();
        await pm.wait(5000);
        await expect.soft(pm.page).toHaveScreenshot(`${env}-operations-full.png`, {
            fullPage: true,
            mask: [pm.page.locator('tbody')]
        });
        await pm.page.getByRole('banner').getByRole('img').click();

    });
    test("Visual test for main page footer buttons", async ()=>{
        await pm.page.getByRole('link', { name: 'Services', exact: true }).click();
        await pm.wait(2000);
        await expect.soft(pm.page).toHaveScreenshot(`${env}-services-btn.png`, {
            fullPage: true
        });
        await pm.page.getByRole('link', { name: 'More' }).click();
        await pm.wait(2000);
        await expect.soft(pm.page).toHaveScreenshot(`${env}-more-btn.png`, {
            fullPage: true
        });
        await pm.page.getByText('English').click();
        await pm.wait(3500);
        await expect.soft(pm.page).toHaveScreenshot(`${env}-eng-btn.png`, {
            fullPage: true
        });
        await pm.page.getByRole('link', { name: 'Chat' }).click();
        await pm.wait(4000);
        await expect.soft(pm.page).toHaveScreenshot(`${env}-jivoChat.png`, {
            fullPage: true
        });
    });

    test("Visual test for main page other buttons", async ()=>{
        await pm.page.getByRole('link', { name: 'Bitbanker services Buying and' }).locator('a').click();
        await pm.wait(2000);
        await expect.soft(pm.page).toHaveScreenshot(`${env}-services-btn.png`, {
            fullPage: true
        });
        await pm.page.getByRole('link', { name: 'Home' }).click();
        await pm.page.getByRole('link', { name: 'Exchange Rates BTC, USDT, USD' }).locator('a').click();
        await pm.wait(4000);
        await expect.soft(pm.page).toHaveScreenshot(`${env}-rates-btn.png`, {
            fullPage: true
        });
        await pm.page.getByRole('link', { name: 'Home' }).click();
        await pm.page.getByText('Video guide').click();
        await pm.wait(3000);
        await expect.soft(pm.page).toHaveScreenshot(`${env}-main-video.png`, {
            fullPage: true
        });
    });
});