import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const mainPageUrl = `${process.env.BASE_URL}`;
const MarketUrl = `${process.env.BASE_URL}${process.env.MARKET_URL}`;


test.describe.serial("Check functionality of Market Page", {
    tag: ['@app', '@market']
  },  () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);
      await pm.loginPage.goto(MarketUrl);
    });

    test("Buy by market order 10 USDT", async ()=>{
        await pm.marketPage.proModeSwitcher();
        await pm.walletPage.setTimeout(2000);
        await pm.marketPage.shooseMarketSideTab('buy')
        const buyAmount = 10
        await pm.marketPage.amounToBuyByMarket(buyAmount);
        const buy10 = await pm.marketPage.extractFloatValueFromBalanceHelper();
        await pm.marketPage.checkCurrentRateValues('1', 'USDT', '75.00', '90.00', 'RUBR');
        await pm.marketPage.buyByMarket();
        await pm.walletPage.setTimeout(5000);
        const buyHelper = await pm.marketPage.extractFloatValueFromBalanceHelper();
        expect(buyHelper).toBeLessThanOrEqual(buy10+buyAmount+1);
    });

    test("Sell by market order 10 USDT", async ()=>{
        await pm.marketPage.proModeSwitcher();
        await pm.walletPage.setTimeout(2000);
        await pm.marketPage.shooseMarketSideTab('sell')
        const sellAmount = 10
        await pm.marketPage.amounToBuyByMarket(sellAmount);
        await pm.walletPage.setTimeout(1000);
        const sell10 = await pm.marketPage.extractFloatValueFromBalanceHelper();
        await pm.walletPage.setTimeout(1000);
        await pm.marketPage.checkCurrentRateValues('1', 'USDT', '75.00', '90.00', 'RUBR');
        await pm.marketPage.sellByMarket();
        await pm.walletPage.setTimeout(8000);
        const sellHelper = await pm.marketPage.extractFloatValueFromBalanceHelper();
        expect(sellHelper).toBeLessThanOrEqual(sell10-sellAmount+1);
    });
});