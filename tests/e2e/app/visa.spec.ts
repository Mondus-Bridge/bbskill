import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const mainPageUrl = `${process.env.BASE_URL}`;
const visaUdtUrl = `${process.env.BASE_URL}${process.env.VISA_URL}`;

test.describe("Check avability and visibility of Visa subpage", {
    tag: ['@app', '@prod']
  },  () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);
      await pm.loginPage.goto(mainPageUrl);
    });

    test("Check visa web elements", async ()=>{
        await pm.mainPage.findSectionByText("visa Withdraw to Visa");
        pm.page.keyboard.press('Space');
        await expect.soft(pm.walletPage.visaInternationalWarning).toContainText('International VISA cards supported');
        expect.soft(pm.walletPage.visaCannotWarning).toContainText('Transfer cannot be sent to the following countries:');
        const inputValue = await pm.walletPage.quantityInput.inputValue();
        expect(inputValue).toBe('100');
        expect(pm.walletPage.ccInput).toHaveAttribute('placeholder', '0000 0000 0000 0000');
        expect(pm.walletPage.ccCardHolder).toHaveAttribute('placeholder', 'JOHN SMITH');
        expect.soft(pm.walletPage.visaCommission).toContainText('Withdrawal commission:');
        expect.soft(pm.walletPage.visaRepayment).toContainText('Repayment amount:');
        expect.soft(pm.walletPage.visaDeducted).toContainText('Will be deducted from the account:');
        pm.page.keyboard.press('Space');
        expect.soft(pm.walletPage.visaCreateOperation).toBeVisible();
        expect.soft(pm.walletPage.visaCreateOperation).toHaveText('Create new operation');
        expect.soft(pm.walletPage.visaCreateOperation).toBeDisabled();
        expect.soft(pm.walletPage.visaContactUs).toBeVisible();
        expect.soft(pm.walletPage.visaContactUs).toHaveText('Contact us');
        expect.soft(pm.walletPage.visaTransactionHistory).toBeVisible();
    });
});

test.describe("Check functions of Visa subpage", {
    tag: ['@app', '@visa']
    },  () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page);
        await pm.loginPage.goto(visaUdtUrl);
    });

    test("Create Invalid VISA operation", {
        tag: ['@app', '@prod', '@visa']
        }, async ()=>{
        await pm.walletPage.setTimeout(1000);
        await pm.walletPage.withdrawMethod('To VISA card');
        await pm.page.keyboard.press('Space');
        await expect(pm.walletPage.ccInput).toHaveAttribute('placeholder', '0000 0000 0000 0000');
        await pm.walletPage.inputAmount(200)
        await pm.walletPage.typeVisaCC('5425 2334 3010 9903','BILL GATES');
        await expect.soft(pm.walletPage.visaCreateOperation).toBeEnabled();
    });
});