import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');;
const mainPageUrl = `${process.env.BASE_URL}`;
const env = process.env.TEST_ENV || 'dev'
const acquiringPageUrl = `${process.env.BASE_URL}${process.env.AQUIRING_URL}`;
const expectedInvoiceFieldsRu = ['Счет от', 'Счет для', 'Оплата за', 'Сумма', 'Статус'];
const expectedInvoiceValuesRu = ['Test INC', 'Mr QA Bitbanker', 'testing service', '2,000 RUBR'];
const expectedInvoiceFieldsEn = ['Invoice from', 'Invoice for', 'Payment for', 'Amount', 'Status'];
const expectedInvoiceValuesEn = ['Test INC', 'Mr QA Bitbanker', 'testing service', '50 USDT'];

test.describe("Check avability and visibility of Acquiring page", {
    tag: ['@app', '@prod', '@acquiring']
  }, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);
      await pm.loginPage.goto(mainPageUrl);
    });
    test('Enter to Acquiring from Main page and check visible web elements, which is not used for other tests', async ()=> {
        await pm.mainPage.findSectionByText("acquiring Crypto Payment");
        await expect.soft(pm.acquiringPage.acquitingTitle).toHaveText("Accept payments from all over world");
        await expect.soft(pm.acquiringPage.acquiringGuide).toBeVisible();
        await expect.soft(pm.acquiringPage.acquiring100).toBeVisible();
        await expect.soft(pm.acquiringPage.acquiringLastPage).toBeVisible();
        await expect.soft(pm.acquiringPage.acquiringPageRigt).toBeVisible();
        await expect.soft(pm.acquiringPage.acquiringFaq1).toBeVisible();
        await expect.soft(pm.acquiringPage.acquiringFaq2).toBeVisible();
        await expect.soft(pm.acquiringPage.acquiringFaq3).toBeVisible();
        await expect.soft(pm.acquiringPage.acquiringFaq4).toBeVisible();
        await expect.soft(pm.acquiringPage.acquiringBinoculeImage).toBeVisible();
    });
});


test.describe("Check functionality of Acquiring page", {
    tag: ['@app', '@prod', '@acquiring']
  }, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);
      await pm.loginPage.goto(acquiringPageUrl);
      await pm.walletPage.setTimeout(3000);
    });

    test("Create invoice on Russian", async ()=>{
      test.setTimeout(45000);
        await expect.soft(pm.acquiringPage.createInvoiceButton).toBeVisible();
        await pm.acquiringPage.createInvoiceButton.click()
        await pm.acquiringPage.chooseLanguage("Russian")
        await pm.acquiringPage.createInvoice(
            'Test INC',
            'Mr QA Bitbanker',
            'qa@bitbanker.org',
            'testing service',
            'Ruble Coin',
            '2000',
            'Bitcoin',
        )
        await pm.walletPage.setTimeout(2500);
        await expect.soft(pm.acquiringPage.createdInvoiceTitle).toHaveText('Счет выставлен');
        expect.soft(pm.acquiringPage.copyInvoice).toBeVisible();
        expect.soft(pm.acquiringPage.seeTheInvoice).toBeVisible();
        await pm.acquiringPage.loaded()
        await pm.walletPage.setTimeout(3500);
        await pm.acquiringPage.showCreatedInvoice()
        await pm.walletPage.setTimeout(3000);
        await pm.acquiringPage.loaded()
        await expect.soft(pm.acquiringPage.invoiceBackButton).toBeVisible();
        const allInvoiceFieldsExist = await pm.acquiringPage.checkInvoiceOfFields(pm.acquiringPage.invoiceFields, expectedInvoiceFieldsRu);
        expect.soft(allInvoiceFieldsExist).toBe(true); 
        const allInvoiceValuesExist = await pm.acquiringPage.checkInvoiceOfFields(pm.acquiringPage.invoiceValues, expectedInvoiceValuesRu);
        expect.soft(allInvoiceValuesExist).toBe(true); 
        await pm.acquiringPage.currencyTab(0.0001, 0.0003, 'BTC');
        await pm.acquiringPage.tabElementByText('Bitcoin');
        await pm.acquiringPage.assertCryptoAddress('Bitcoin');
        await pm.acquiringPage.tabElementByText('BNB Smart Chain (BEP20)');
        await pm.acquiringPage.assertCryptoAddress('Bep-20');
    });

    test("Create invoice on English", async ()=>{
      test.setTimeout(45000);
        await expect.soft(pm.acquiringPage.createInvoiceButton).toBeVisible();
        await pm.acquiringPage.createInvoiceButton.click()
        await pm.acquiringPage.chooseLanguage("English")
        await pm.acquiringPage.createInvoice(
            'Test INC',
            'Mr QA Bitbanker',
            'qa@bitbanker.org',
            'testing service',
            'Tether USD',
            '50',
            'Tether USD',
        )
        await pm.walletPage.setTimeout(2500);
        await expect.soft(pm.acquiringPage.createdInvoiceTitle).toHaveText('Invoice created');
        expect.soft(pm.acquiringPage.copyInvoice).toBeVisible();
        expect.soft(pm.acquiringPage.seeTheInvoice).toBeVisible();
        await pm.acquiringPage.loaded()
        await pm.walletPage.setTimeout(3500);

        await pm.acquiringPage.showCreatedInvoice()
        await pm.walletPage.setTimeout(3000);
        await pm.acquiringPage.loaded()
        await expect.soft(pm.acquiringPage.invoiceBackButton).toBeVisible();
        const allInvoiceFieldsExist = await pm.acquiringPage.checkInvoiceOfFields(pm.acquiringPage.invoiceFields, expectedInvoiceFieldsEn);
        expect.soft(allInvoiceFieldsExist).toBe(true); 
        const allInvoiceValuesExist = await pm.acquiringPage.checkInvoiceOfFields(pm.acquiringPage.invoiceValues, expectedInvoiceValuesEn);
        expect.soft(allInvoiceValuesExist).toBe(true); 
        await pm.acquiringPage.currencyTab(49, 51, 'USDT');
        await pm.acquiringPage.tabElementByText('Ethereum (ERC20)');
        await pm.acquiringPage.assertCryptoAddress('Bep-20');
        await pm.acquiringPage.tabElementByText('BNB Smart Chain (BEP20)');
        await pm.acquiringPage.assertCryptoAddress('Bep-20');
        await pm.acquiringPage.tabElementByText('Tron (TRC20)');
        await pm.acquiringPage.assertCryptoAddress('TRX');
    });

    test("Created invoices list, check filters part 1", async ()=>{
      await pm.acquiringPage.loaded()
      await pm.walletPage.setTimeout(2500);
      await expect.soft(pm.acquiringPage.noPaidInvoices).not.toBeVisible();
      await expect.soft(pm.acquiringPage.filterNo).toBeVisible();
      await expect.soft(pm.acquiringPage.filterInvoiceSource).toBeVisible();
      await expect.soft(pm.acquiringPage.filterInvoiceStatus).toBeVisible();
      await expect.soft(pm.acquiringPage.filterInvoiceRecipient).toBeVisible();
      await expect.soft(pm.acquiringPage.filterReport).toBeVisible();
      await pm.acquiringPage.lookByFilterNo(1);
      await pm.walletPage.setTimeout(2500);
      await expect.soft(pm.acquiringPage.listNoIvoice).toHaveText('There are no invoices');
      await pm.acquiringPage.cleanNoInput();
      await pm.walletPage.setTimeout(2500);
      await pm.acquiringPage.chooseOneSource("Manual");
      await pm.walletPage.setTimeout(2500);
      const textCount = await pm.acquiringPage.countTextOccurrences("Set manually");
      expect(textCount).toBe(10);
    });

    test("Created invoices list, check filters part 2", async ()=>{
      await pm.acquiringPage.loaded();
      await pm.acquiringPage.filterByRecipient("Mr QA Bitbanker");
      await expect.soft(pm.acquiringPage.firsRecipientName).toHaveText("Mr QA Bitbanker")
      await pm.acquiringPage.cleanByRecipientInput();
      await pm.acquiringPage.chooseOneStatus("Partially paid");
      await pm.walletPage.setTimeout(2500);
      await expect.soft(pm.acquiringPage.nvoiceContent ).toHaveScreenshot(`${env}-particailpaid-status.png`);
      await pm.acquiringPage.chooseOneStatus("Paid");
      await pm.walletPage.setTimeout(2500);
      await expect.soft(pm.acquiringPage.nvoiceContent ).toHaveScreenshot(`${env}-paid-status.png`);
    });

});