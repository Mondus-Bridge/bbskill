import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();
let pm;
let page;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');;
const withdrawUrl = `${process.env.BASE_URL}${process.env.WITHDRAW_URL}`;

test.describe("Try to create withdraw operation for rub", {
    tag: ['@app', '@withdraw', '@cash']
  }, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage(); 
        pm = new PomManager(page);
        await pm.loginPage.goto(withdrawUrl);
      });

      test.afterEach(async ({ page }) => {
        await page.close();
      });
  
      test('Create withdraw in Peterbug for RUBR', async ()=> {
          await pm.walletPage.clickCurrencyByText("Ruble Coin");
          await pm.walletPage.setTimeout(1000);
          await pm.walletPage.withdrawMethod('In cash');
          await pm.walletPage.choosePoint("Saint Petersburg");
          await pm.walletPage.cashInputAmount(5000);
          await pm.walletPage.setTimeout(2000);
          await pm.walletPage.extractAmount(pm.walletPage.cashAmount, 5000, 'RUBR');
          await pm.walletPage.extractAmount(pm.walletPage.cashTotalAmount, 5025, 'RUBR');
          await pm.walletPage.cashCreateOperation.click();
          await pm.walletPage.setTimeout(2000);
          await expect.soft(pm.walletPage.cashCreatedOperationTitle).toContainText("Request for withdrawal RUBR accepted");
          await pm.walletPage.setTimeout(1000);
          const operNumber = await pm.walletPage.cashOperNumber()
          expect(operNumber).not.toBeNaN();
          expect(operNumber).toBeGreaterThan(100000);
          expect(operNumber).toBeLessThan(9999999999);
          expect(pm.walletPage.cashCreatedOperationAdress).toContainText("Saint Petersburg, YE\'S Marata, Socialist st., 21");
      });
  
      test('Create withdraw in Moskow for RUBR', async ()=> {
          await pm.walletPage.clickCurrencyByText("Ruble Coin");
          await pm.walletPage.setTimeout(1000);
          await pm.walletPage.withdrawMethod('In cash');
          await pm.walletPage.choosePoint("Moscow");
          await pm.walletPage.cashInputAmount(5000);
          await pm.walletPage.setTimeout(2000);
          await pm.walletPage.extractAmount(pm.walletPage.cashAmount, 5000, 'RUBR');
          await pm.walletPage.extractAmount(pm.walletPage.cashTotalAmount, 5000, 'RUBR');
          await pm.walletPage.cashCreateOperation.click();
          await pm.walletPage.setTimeout(2000);
          await expect.soft(pm.walletPage.cashCreatedOperationTitle).toContainText("Request for withdrawal RUBR accepted");
          await pm.walletPage.setTimeout(1000);
          const operNumber = await pm.walletPage.cashOperNumber()
          expect(operNumber).not.toBeNaN();
          expect(operNumber).toBeGreaterThan(100000);
          expect(operNumber).toBeLessThan(9999999999);
          expect(pm.walletPage.cashCreatedOperationAdress).toContainText("Russia, Moscow, Moscow-City, Federation Tower. West");
      });
  
      test.skip('Create withdraw in Stavropol for RUBR', async ()=> {
          await pm.walletPage.clickCurrencyByText("Ruble Coin");
          await pm.walletPage.setTimeout(1000);
          await pm.walletPage.withdrawMethod('In cash');
          await pm.walletPage.choosePoint("Stavropol");
          await pm.walletPage.cashInputAmount(5000);
          await pm.walletPage.setTimeout(2000);
          await pm.walletPage.extractAmount(pm.walletPage.cashAmount, 5000, 'RUBR');
          await pm.walletPage.extractAmount(pm.walletPage.cashTotalAmount, 5037.5, 'RUBR');
          await pm.walletPage.cashCreateOperation.click();
          await pm.walletPage.setTimeout(2000);
          await expect.soft(pm.walletPage.cashCreatedOperationTitle).toContainText("Request for withdrawal RUBR accepted");
          await pm.walletPage.setTimeout(1000);
          const operNumber = await pm.walletPage.cashOperNumber()
          expect(operNumber).not.toBeNaN();
          expect(operNumber).toBeGreaterThan(100000);
          expect(operNumber).toBeLessThan(9999999999);
          expect(pm.walletPage.cashCreatedOperationAdress).toContainText("Stavropol, Tukhachevsky st., 12V, 1st floor");
      });
  
      test.skip('Create withdraw in Yekaterinburg for RUBR', async ()=> {
          await pm.walletPage.clickCurrencyByText("Ruble Coin");
          await pm.walletPage.setTimeout(1000);
          await pm.walletPage.withdrawMethod('In cash');
          await pm.walletPage.choosePoint('Yekaterinburg');
          await pm.walletPage.cashInputAmount(5000);
          await pm.walletPage.setTimeout(2000);
          await pm.walletPage.extractAmount(pm.walletPage.cashAmount, 5000, 'RUBR');
          await pm.walletPage.extractAmount(pm.walletPage.cashTotalAmount, 5025, 'RUBR');
          await pm.walletPage.cashCreateOperation.click();
          await pm.walletPage.setTimeout(2000);
          await expect.soft(pm.walletPage.cashCreatedOperationTitle).toContainText("Request for withdrawal RUBR accepted");
          await pm.walletPage.setTimeout(1000);
          const operNumber = await pm.walletPage.cashOperNumber()
          expect(operNumber).not.toBeNaN();
          expect(operNumber).toBeGreaterThan(100000);
          expect(operNumber).toBeLessThan(9999999999);
          expect(pm.walletPage.cashCreatedOperationAdress).toContainText('Yekaterinburg, DC "Dubrovin", st. Chernyshevsky, 7');
      });
  
      test.skip('Create withdraw in Bishkek for Rub.k', async ()=> {
          await pm.walletPage.clickCurrencyByText("Rouble (Kyrgyzstan)");
          await pm.walletPage.setTimeout(1000);
          await expect(pm.walletPage.youCanWithdrawAlert).toBeVisible();
      });

      test.afterAll(async () => {
        test.setTimeout(70000);
        await pm.walletPage.cashCleanHistory.click();
        await pm.walletPage.setTimeout(3000);
        await pm.operationsPage.deleteAllOperations();
        await page.close(); 
      });
});

test.describe("Try to create withdraw operation not for rub", {
    tag: ['@app', '@withdraw', '@cash']
  }, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage(); 
        pm = new PomManager(page);
        await pm.loginPage.goto(withdrawUrl);
      });

      test.afterEach(async ({ page }) => {
        await page.close();
      });
  
      test('Create withdraw in Moskow for USD.r', async ()=> {
        await pm.walletPage.clickCurrencyByText("US Dollar (Russia)");
        await pm.walletPage.setTimeout(1000);
        await pm.walletPage.withdrawMethod('In cash');
        await pm.walletPage.cashInputAmount(100);
        await pm.walletPage.setTimeout(2000);
        await pm.walletPage.extractAmount(pm.walletPage.cashAmount, 100, 'USD.r');
        await pm.walletPage.extractAmount(pm.walletPage.cashTotalAmount, 100, 'USD.r');
        await pm.walletPage.cashCreateOperation.click();
        await pm.walletPage.setTimeout(2000);
        await expect.soft(pm.walletPage.cashCreatedOperationTitle).toContainText("Request for withdrawal USD.r accepted");
        await pm.walletPage.setTimeout(1000);
        const operNumber = await pm.walletPage.cashOperNumber()
        expect(operNumber).not.toBeNaN();
        expect(operNumber).toBeGreaterThan(100000);
        expect(operNumber).toBeLessThan(9999999999);
        expect(pm.walletPage.cashCreatedOperationAdress).toContainText('Russia, Moscow, Moscow-City, Federation Tower. West');
    });

    test('Create withdraw in Moskow for EUR', async ()=> {
        await pm.walletPage.clickCurrencyByText("Euro");
        await pm.walletPage.setTimeout(1000);
        await pm.walletPage.withdrawMethod('In cash');
        await pm.walletPage.cashInputAmount(100);
        await pm.walletPage.setTimeout(2000);
        await pm.walletPage.extractAmount(pm.walletPage.cashAmount, 100, 'EUR');
        await pm.walletPage.extractAmount(pm.walletPage.cashTotalAmount, 100, 'EUR');
        await pm.walletPage.cashCreateOperation.click();
        await pm.walletPage.setTimeout(2000);
        await expect.soft(pm.walletPage.cashCreatedOperationTitle).toContainText("Request for withdrawal Euro accepted");
        await pm.walletPage.setTimeout(1000);
        const operNumber = await pm.walletPage.cashOperNumber()
        expect(operNumber).not.toBeNaN();
        expect(operNumber).toBeGreaterThan(100000);
        expect(operNumber).toBeLessThan(9999999999);
        expect(pm.walletPage.cashCreatedOperationAdress).toContainText('Russia, Moscow, Moscow-City, Federation Tower. West');
    });

    test.skip('Create withdraw in Dubai for AED', async ()=> {
        await pm.walletPage.clickCurrencyByText("UAE Dirham");
        await pm.walletPage.setTimeout(1000);
        await pm.walletPage.withdrawMethod('In cash');
        await expect(pm.walletPage.youCanWithdrawAlert).toBeVisible();
    });

    test.skip('Create withdraw in Dubai for Gold', async ()=> {
        await pm.walletPage.clickCurrencyByText("Gold Dubai");
        await pm.walletPage.setTimeout(1000);
        await pm.walletPage.withdrawMethod('In cash');
        await expect(pm.walletPage.youCanWithdrawAlert).toBeVisible();
    });

    test.skip('Create withdraw in Bishkek for USD.k', async ()=> {
        await pm.walletPage.clickCurrencyByText("US Dollar (Kyrgyzstan)");
        await pm.walletPage.setTimeout(1000);
        await pm.walletPage.withdrawMethod('In cash');
        await pm.walletPage.cashInputAmount(100);
        await pm.walletPage.setTimeout(2000);
        await pm.walletPage.extractAmount(pm.walletPage.cashAmount, 100, 'USD.k');
        await pm.walletPage.extractAmount(pm.walletPage.cashTotalAmount, 100.5, 'USD.k');
        await pm.walletPage.cashCreateOperation.click();
        await pm.walletPage.setTimeout(2000);
        await expect.soft(pm.walletPage.notificationError.filter({ hasText: 'To deposit/withdraw this currency, you need to complete Standard PLUS KYC' })).toBeVisible()
    });

    test.skip('Create withdraw in Bishkek for KG Som', async ()=> {
        await pm.walletPage.clickCurrencyByText("KG Som");
        await pm.walletPage.setTimeout(1000);
        await pm.walletPage.withdrawMethod('In cash');
        await pm.walletPage.cashInputAmount(1000);
        await pm.walletPage.setTimeout(2000);
        await pm.walletPage.extractAmount(pm.walletPage.cashAmount,  1000, 'KGS');
        await pm.walletPage.extractAmount(pm.walletPage.cashTotalAmount,  1005, 'KGS');
        await pm.walletPage.cashCreateOperation.click();
        await pm.walletPage.setTimeout(2000);
        await expect.soft(pm.walletPage.notificationError.filter({ hasText: 'To deposit/withdraw this currency, you need to complete Standard PLUS KYC' })).toBeVisible()
    });

    test.afterAll(async () => {
        test.setTimeout(70000);
        await pm.walletPage.cashCleanHistory.click();
        await pm.walletPage.setTimeout(3000);
        await pm.operationsPage.deleteAllOperations();
        await page.close(); 
      });
});