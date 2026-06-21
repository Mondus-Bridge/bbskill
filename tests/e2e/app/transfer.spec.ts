import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();


let pm;
const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const env = process.env.TEST_ENV || 'dev';
const transferUrl = `${process.env.BASE_URL}${process.env.TRANSFER_URL}`;
const apiBalance = `${process.env.API_BASE_URL}${process.env.API_BALANCE}`;



test.describe("Deposit currency can generate code and return valid crypto address",{
  tag: ['@app', '@prod', '@transfer']
}, () => {
  test.use({ storageState: authFilePath });
  test.beforeEach(async ({page}) => {
    pm = new PomManager(page);
    await pm.loginPage.goto(transferUrl);
  });



  test("Transfer 1 rouble to another account", async ()=>{
    // const initialRoubleBalance = await pm.mainPage.fetchBalance('RUBR', apiBalance);
    const email = "loveandpeace1331+bb2@gmail.com"
    await pm.walletPage.clickCurrencyByText("Ruble Coin");
    await pm.walletPage.setTimeout(500);
    await pm.walletPage.transfer(1, email, "1 coin for test purpose")
    const selector1 = await pm.walletPage.mail();
    // const updatedRoubleBalance = await pm.mainPage.fetchBalance('RUBR', apiBalance);
    expect.soft(selector1).toEqual(email)
    // await pm.walletPage.setTimeout(500);
    // expect(updatedRoubleBalance).toEqual(initialRoubleBalance - 1);
  });
})