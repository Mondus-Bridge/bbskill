// import { test } from '@playwright/test';
// import PomManager from '../../pages/app/PomManager.js'
// import { loadEnv } from '../../utils/envLoader.js';
// import path from 'path';
// loadEnv();
// let pm



// const MarketUrl = `${process.env.BASE_URL}${process.env.MARKET_URL}`;
// const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');;



// test.describe.only("Load testing of usdt/RUBR pair", {
//     tag: ['@load']
//   }, () => {
//     test.use({ storageState: authFilePath });
//     test.setTimeout(4000000);
//     test.beforeEach(async ({ page }) => {
//       pm = new PomManager(page);
//       await pm.loginPage.goto(MarketUrl);
//     });
// test("Buy by market order from '10,01' to '10099,99' USDT", async ({ page })=>{
//     await pm.marketPage.repeatBuy('buy', 300, '10,01', '10099,99' )
// });

// test("Sell by market order from '10,01' to '10099,99' USDT", async ({ page })=>{
//     await pm.marketPage.repeatBuy('sell', 300, '10,01', '10099,99' )
//     });
// });