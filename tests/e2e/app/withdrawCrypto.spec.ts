import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import * as devData from '../../data/app/data.dev.js';
import * as prodData from '../../data/app/data.prod.js';
import path from 'path';
loadEnv();
const env = process.env.TEST_ENV || 'dev';
const cryptoData = env === 'prod' ? prodData : devData;

test.describe("Try to create withdraw operation for crypto currencies Part 1", {
    tag: ['@app', '@withdraw', '@crypto']
  }, () => {
    let pm;
    const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
    const withdrawUrl = `${process.env.BASE_URL}${process.env.WITHDRAW_URL}`;
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page);
        await pm.loginPage.goto(withdrawUrl);
      });
  
      test('Create invalid withdraw for Bitcoin', async ()=> {
        const amount = '100'
        await pm.walletPage.clickCurrencyByText("Bitcoin");
        await pm.page.keyboard.press('Space');
        await pm.walletPage.cryptoCheckbox.click();
        await pm.walletPage.withdrawCryptoAdress(cryptoData.onlyBtc);
        await pm.walletPage.cryptoWithdrawAmountInput(amount);
        await pm.walletPage.setTimeout(2000);
        await pm.walletPage.extractAmount(pm.walletPage.cryptoWithdrawalAmount, 100, 'BTC');
        await pm.walletPage.extractAmount(pm.walletPage.cryptoTotalWithdrawalAmount, amount, 'BTC');
        const [responseWithdrawBtc] = await Promise.all([
          pm.otcPage.page.waitForResponse(response => 
          response.url().includes('withdrawals/crypto-currency') && response.request().method() === 'POST'
          ),
          pm.walletPage.cashCreateOperation.click()
          ]);
          expect(responseWithdrawBtc.status()).toBe(400);
          const responseBtcResult = await responseWithdrawBtc.json();
          expect(responseBtcResult).toMatchObject({
            code: "InsufficientBalance"
          });
        await pm.walletPage.cashCreateOperation.click();
        await pm.walletPage.setTimeout(2000);
    });

    test('Create invalid withdraw with saved wallet for Ether erc20', async ()=> {
        const amount = '100'
        await pm.walletPage.clickCurrencyByText("Ether");
        await pm.page.keyboard.press('Space');
        await pm.walletPage.cryptoCheckbox.click();
        await pm.walletPage.cryptoAddressInputWithdraw.click();
        await pm.walletPage.cryptoSavedAdress.click();
        await pm.walletPage.cryptoWithdrawAmountInput(amount);
        await pm.walletPage.setTimeout(2000);
        await pm.walletPage.extractAmount(pm.walletPage.cryptoWithdrawalAmount, 100, 'ETH');
        await pm.walletPage.extractAmount(pm.walletPage.cryptoTotalWithdrawalAmount, amount, 'ETH');
        const [responseWithdrawEthErc] = await Promise.all([
          pm.otcPage.page.waitForResponse(response => 
          response.url().includes('withdrawals/crypto-currency') && response.request().method() === 'POST'
          ),
          pm.walletPage.cashCreateOperation.click()
          ]);
          expect(responseWithdrawEthErc.status()).toBe(400);
          const responseUsdcEthResult = await responseWithdrawEthErc.json();
          expect(responseUsdcEthResult).toMatchObject({
            code: "InsufficientBalance"
          });
        await pm.walletPage.setTimeout(2000);
    });



    test('Create valid withdraw for Tether USD trc20', async ()=> {
        const amount = '300'
        await pm.walletPage.clickCurrencyByText("Tether USD");
        await pm.walletPage.setTimeout(1000);
        await pm.walletPage.withdrawMethod('Crypto wallet');
        await pm.walletPage.setTimeout(1000);
        await pm.walletPage.checkAndHandleSelectorsWithdraw("Tron (TRC20)");
        await pm.walletPage.setTimeout(1000);
        await pm.page.keyboard.press('Space');
        await pm.walletPage.cryptoCheckbox.click();
        await pm.walletPage.withdrawCryptoAdress(tronUSDT);
        await pm.walletPage.cryptoWithdrawAmountInput(amount);
        await pm.walletPage.setTimeout(2000);
        await pm.walletPage.extractAmount(pm.walletPage.cryptoWithdrawalAmount, 300, 'USDT');
        await pm.walletPage.extractAmount(pm.walletPage.cryptoTotalWithdrawalAmount, amount, 'USDT');
        await pm.walletPage.cashCreateOperation.click();
        await pm.walletPage.setTimeout(3500);
        await expect.soft(pm.walletPage.cashCreatedOperationTitle).toContainText(`Withdrawal operation of ${amount} USDT created successfully`);
    });  


    test('Create invalid withdraw for TRON', async ()=> {
        const amount = '3000000'
        await pm.walletPage.clickCurrencyByText("Tron");
        await pm.page.keyboard.press('Space');
        await pm.walletPage.cryptoCheckbox.click();
        await pm.walletPage.withdrawCryptoAdress(cryptoData.onlyTrx);
        await pm.walletPage.cryptoWithdrawAmountInput(amount);
        await pm.walletPage.setTimeout(2000);
        await pm.walletPage.extractAmount(pm.walletPage.cryptoWithdrawalAmount, 3000000, 'TRX');
        await pm.walletPage.extractAmount(pm.walletPage.cryptoTotalWithdrawalAmount, amount, 'TRX');
        const [responseWithdrawTron] = await Promise.all([
          pm.otcPage.page.waitForResponse(response => 
          response.url().includes('withdrawals/crypto-currency') && response.request().method() === 'POST'
          ),
          pm.walletPage.cashCreateOperation.click()
          ]);
          expect(responseWithdrawTron.status()).toBe(400);
          const responseTronResult = await responseWithdrawTron.json();
          expect(responseTronResult).toMatchObject({
            code: "InsufficientBalance"
          });
        await pm.walletPage.setTimeout(2000);
    });
});

test.describe("Try to create withdraw operation for crypto currencies Part 2 (memo)", {
    tag: ['@app', '@withdraw', '@crypto']
  }, () => {
    const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
    const withdrawUrl = `${process.env.BASE_URL}${process.env.WITHDRAW_URL}`;
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page);
        await pm.loginPage.goto(withdrawUrl);
      });
  
    test('Create invalid withdraw for Ton', async ()=> {
        const amount = '3000000'
        await pm.walletPage.clickCurrencyByText("Ton");
        await pm.page.keyboard.press('Space');
        await pm.walletPage.cryptoCheckbox.click();
        await pm.walletPage.withdrawCryptoAdress(cryptoData.onlyTon);
        await pm.walletPage.cryptoWithdrawMemoInput(cryptoData.MEMO_TON);
        await pm.walletPage.cashInputAmount(amount);
        await pm.walletPage.setTimeout(2000);
        await pm.walletPage.extractAmount(pm.walletPage.cryptoWithdrawalAmount, 3000000, 'TON');
        await pm.walletPage.extractAmount(pm.walletPage.cryptoTotalWithdrawalAmount, amount, 'TON');
        const [responseWithdrawTon] = await Promise.all([
          pm.otcPage.page.waitForResponse(response => 
          response.url().includes('withdrawals/crypto-currency') && response.request().method() === 'POST'
          ),
          pm.walletPage.cashCreateOperation.click()
          ]);
          expect(responseWithdrawTon.status()).toBe(400);
          const responseTonResult = await responseWithdrawTon.json();
          expect(responseTonResult).toMatchObject({
            code: "InsufficientBalance"
          });
        await pm.walletPage.cashCreateOperation.click();
        await pm.walletPage.setTimeout(2000);
    });
});

