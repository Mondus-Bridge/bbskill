import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { AppMobilePage } from '../pages/appMobilePage.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const walletPageUrl = `${process.env.BASE_URL}${process.env.DEPOSIT_URL}`;

test.describe("Visaul testing for noncash method", {
    tag: ['@mobileapp', '@prod']
  }, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
        pm = new AppMobilePage(page);
        await pm.goto(walletPageUrl);
    });
    test("Visual test for qr code", async ()=>{
        await pm.page.getByRole('textbox').click();
        await pm.page.getByText('Ruble Coin').click();
        await pm.page.getByText('Non-cash transfer').click();
        await pm.wait(3000);
        await pm.page.getByText('Confirm').click();
         await pm.wait(2000);
        await expect.soft(pm.page).toHaveScreenshot(`qrcode.png`, { fullPage: true });
        await pm.page.getByText('Enter manually').click();
        const downloadPaymentPorp = await pm.page.getByText('Payment purpose', {exact: true });
        downloadPaymentPorp.scrollIntoViewIfNeeded();
        await pm.wait(3000);
        await expect.soft(pm.page).toHaveScreenshot(`manual.png`, { fullPage: true });
    });
});