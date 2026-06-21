import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import * as devData from '../../data/app/data.dev.js';
import * as prodData from '../../data/app/data.prod.js';
import path from 'path';

loadEnv();

// 1. Динамический выбор пути к файлу данных
const env = process.env.TEST_ENV || 'dev';
const cryptoData = env === 'prod' ? prodData : devData;

test.describe("Deposit currency validation", { tag: ['@app', '@prod', '@deposit']}, () => {
    let pm;
    
    const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
    const walletUrl = `${process.env.BASE_URL}${process.env.DEPOSIT_URL}`;

    test.use({ storageState: authFilePath });

    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page);
        await pm.loginPage.goto(walletUrl);
    });

    test('Deposit: Tether USD has valid network address: Tron (TRC20)', async () => {
        await pm.walletPage.clickCurrencyByText("Tether USD");
        await pm.walletPage.checkAndHandleSelectors("Tron (TRC20)");
        await pm.walletPage.setTimeout(2500);
        const address = await pm.walletPage.getCryptoAddress();
        expect.soft(address).toEqual(cryptoData.onlyTrx);
    });

    test('Deposit: Ether has valid network address: Ethereum (ERC20)', async () => {
        await pm.walletPage.clickCurrencyByText("Ether");
        await pm.walletPage.checkAndHandleSelectors("Ethereum (ERC20)");
        await pm.walletPage.setTimeout(2500);
        const address = await pm.walletPage.getCryptoAddress();
        expect.soft(address).toEqual(cryptoData.commonNets);
    });

    test('Deposit: Bitcoin has valid network address: Bitcoin', async () => {
        await pm.walletPage.clickCurrencyByText("Bitcoin");
        await pm.walletPage.checkAndHandleSelectors("Bitcoin");
        await pm.walletPage.setTimeout(2500);
        const address = await pm.walletPage.getCryptoAddress();
        expect.soft(address).toEqual(cryptoData.onlyBtc);
    });
});