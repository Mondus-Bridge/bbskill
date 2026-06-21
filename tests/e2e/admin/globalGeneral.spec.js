import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/SuperLoginAuth.json');
let admin;
const settingsUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.GLOBAL_SETTINGS}`;
const marketsUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.GLOBAL_MARKETS}`;
const currenciesUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.GLOBAL_CURRENCY}`;
const setsTitle = ['Currency name', 'Decimal places', 'Exchange rate to USD', 'Minimum deposit amount', 'Is this a fiat currency?', 'Is this a token?', 'OTC transaction currency?'];
const pairsArray = [
    "atomrubr ATOM/RUBR", "atomusdt ATOM/USDT", "avaxrubr AVAX/RUBR",
    "avaxusdt AVAX/USDT", "btcaed BTC/AED", "btceur BTC/EUR",
    "btckgs BTC/KGS", "btcrubr BTC/RUBR", "btcusd.k BTC/USD.K",
    "btcusd.r BTC/USD.R", "btcusdt BTC/USDT", "ethaed ETH/AED",
    "etheur ETH/EUR", "ethkgs ETH/KGS", "ethrubr ETH/RUBR",
    "ethusd.k ETH/USD.K", "ethusd.r ETH/USD.R", "ethusdt ETH/USDT",
    "eurrubr EUR/RUBR", "eurusdt EUR/USDT", "gld.pdaed.pd GLD.PD/AED.PD",
    "gld.pdusd.pd GLD.PD/USD.PD", "gld.pdusdt GLD.PD/USDT", "rub.nrubr RUB.N/RUBR",
    "usdtrub.n USDT/RUB.N", "tonrubr TON/RUBR", "tonusdt TON/USDT",
    "trxrubr TRX/RUBR", "trxusdt TRX/USDT", "usdceur USDC/EUR",
    "usdcrubr USDC/RUBR", "usdcusd.k USDC/USD.K", "usdcusd.r USDC/USD.R",
    "usdcusdt USDC/USDT", "usd.pdaed.pd USD.PD/AED.PD", "usd.rrubr USD.R/RUBR",
    "usd.rusd.k USD.R/USD.K", "usdtaed USDT/AED", "usdtaed.pd USDT/AED.PD",
    "usdteur USDT/EUR", "usdtkgs USDT/KGS", "usdtrub.k USDT/RUB.K",
    "usdtrubr USDT/RUBR", "usdttry USDT/TRY", "usdtusd.k USDT/USD.K",
    "usdtusd.r USDT/USD.R"
  ];

  const currencies = [
    "US Dollar (Russia)",
    "Bitcoin",
    "Ruble Coin",
    "Ether",
    "Tether USD",
    "UAE Dirham",
    "Tron",
    "USD Coin",
    "KG Som",
    "US Dollar (Kyrgyzstan)",
    "Avalanche",
    "Cosmos",
    "Euro",
    "Rouble (Non resident)",
    "Turkish lira",
    "Rouble (Kyrgyzstan)",
    "US Dollar Dubai",
    "Gold Dubai",
    "UAE Dirham Dubai",
    "Ton"
];

test.describe('Global => Settings', {
    tag: ['@super-admin', '@settings', '@global']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(settingsUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test("Super-admin can use turn on Technical maintenance", async ()=> {
        await admin.helper.loaded();
        await expect.soft(admin.settingsPage.globalTechMaintenanceToggl).toBeVisible();
        await expect(admin.settingsPage.globalTechToggl).not.toBeChecked();

        const [responseClickToggl] = await Promise.all([
            admin.settingsPage.page.waitForResponse(response => 
              response.url().includes('settings/maintenance') && response.request().method() === 'POST'
            ),
            admin.settingsPage.globalTechMaintenanceToggl.click()
          ]);
        expect(responseClickToggl.status()).toBe(200);
        const responseClickTogglBody = await responseClickToggl.json();
        expect(responseClickTogglBody).toMatchObject({
            on_maintenance: true
        });
          await admin.settingsPage.page.waitForTimeout(2000);

          const [responseClickToggl2] = await Promise.all([
            admin.settingsPage.page.waitForResponse(response => 
              response.url().includes('settings/maintenance') && response.request().method() === 'POST'
            ),
            admin.settingsPage.globalTechMaintenanceToggl.click()
          ]);
        expect(responseClickToggl2.status()).toBe(200);
        const responseClickTogglBody2 = await responseClickToggl2.json();
        expect(responseClickTogglBody2).toMatchObject({
            on_maintenance: false
        });
        await admin.settingsPage.page.waitForTimeout(2000);
    });
});

test.describe('Global => Markets', {
    tag: ['@super-admin', '@settings', '@global']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(marketsUrl);
      await admin.settingsPage.page.waitForTimeout(5000);
    });

    test("Super-admin can see all market pairs", async ()=> {
        const result = await admin.helper.checkTableHeaders(admin.settingsPage.marketPairs, pairsArray);
        expect(result).toBe(true);
        const countResult = await admin.settingsPage.marketPairs.count();
        expect(countResult).toEqual(46);
    });

    test("Super-admin can change Kyrgyz KYC value of pair ATOM/RUBR and save it", async ()=> {
      await admin.settingsPage.page.waitForTimeout(5000);
      await expect.soft(admin.settingsPage.globalKYCrequiredCheckbox.nth(0)).toBeVisible();
      expect(admin.settingsPage.globalKYCrequiredCheckboxEl.nth(0)).not.toBeChecked();

      await admin.settingsPage.globalKYCrequiredCheckbox.nth(0).click()
      const [responseKirgizKYC] = await Promise.all([
        admin.settingsPage.page.waitForResponse(response => 
          response.url().includes('admin/markets/33') && response.request().method() === 'PUT'
        ),
        admin.settingsPage.saveBtn.click()
  
      ]);
    expect(responseKirgizKYC.status()).toBe(200);
    const responseKirgizKYCresult = await responseKirgizKYC.json();
    expect( responseKirgizKYCresult).toMatchObject({
        kyc_kgz_is_necessary:	false
    });
    await admin.settingsPage.page.waitForTimeout(4000);

    await admin.settingsPage.globalKYCrequiredCheckboxChecked.nth(0).click()
      const [responseKirgizKYC2] = await Promise.all([
        admin.settingsPage.page.waitForResponse(response => 
          response.url().includes('admin/markets/33') && response.request().method() === 'PUT'
        ),
        admin.settingsPage.saveBtn.click()
      ]);
    expect(responseKirgizKYC2.status()).toBe(200);
    const responseKirgizKYCresult2 = await responseKirgizKYC2.json();
    expect( responseKirgizKYCresult2).toMatchObject({
        kyc_kgz_is_necessary:	false
    });
    await admin.settingsPage.page.waitForTimeout(2000); 
    });

    test("Super-admin can change pair fees for ATOM/RUBR and save it", async ()=> {
      await admin.settingsPage.page.waitForTimeout(5000);
      const makerValue = await admin.settingsPage.globalMakerFeeInpt.nth(0).inputValue();
      const takerValue = await admin.settingsPage.globalTakerFeeInpt.nth(0).inputValue();
      expect.soft(makerValue).toEqual('0.1');
      expect.soft(takerValue).toEqual('0.15');

      await admin.settingsPage.globalMakerFeeInpt.nth(0).fill('');
      await admin.settingsPage.globalTakerFeeInpt.nth(0).fill('');
      await admin.settingsPage.globalMakerFeeInpt.nth(0).fill('0.2');
      await admin.settingsPage.globalTakerFeeInpt.nth(0).fill('0.3');

      const [responseChangeFee] = await Promise.all([
        admin.settingsPage.page.waitForResponse(response => 
          response.url().includes('admin/markets/33') && response.request().method() === 'PUT'
        ),
        admin.settingsPage.saveBtn.click()
      ]);
    expect(responseChangeFee.status()).toBe(200);
    const responseFeeResult = await responseChangeFee.json();
    expect(responseFeeResult).toMatchObject({
      market_fee:	0.3,
      limit_fee: 0.2
    });

    await admin.settingsPage.page.waitForTimeout(2000);
    await admin.settingsPage.globalMakerFeeInpt.nth(0).fill('');
    await admin.settingsPage.globalTakerFeeInpt.nth(0).fill('');
    await admin.settingsPage.globalMakerFeeInpt.nth(0).fill('0.1');
    await admin.settingsPage.globalTakerFeeInpt.nth(0).fill('0.15'); 
      const [responseReturnFee] = await Promise.all([
        admin.settingsPage.page.waitForResponse(response => 
          response.url().includes('admin/markets/33') && response.request().method() === 'PUT'
        ),
        admin.settingsPage.saveBtn.click()
      ]);
    expect(responseReturnFee.status()).toBe(200);
    const responseReturnResult = await responseReturnFee.json();
    expect(responseReturnResult).toMatchObject({
      market_fee:	0.15,
      limit_fee: 0.1
    });
    await admin.settingsPage.page.waitForTimeout(2000);
  });
});

test.describe('Global => Currency', {
  tag: ['@super-admin', '@settings', '@global']
},() => {
  test.use({ storageState: authFilePath });
  test.beforeEach(async ({ page }) => {
    admin = new AdminPomManager(page);
    await admin.loginPage.goto(currenciesUrl);
    await admin.settingsPage.page.waitForTimeout(5000);
  });

  test("Super-admin can see all currencies", async ()=> {
    await admin.settingsPage.page.waitForTimeout(5000); 
    const result = await admin.helper.checkTableHeaders(admin.settingsPage.currenciesTitle, currencies);
    expect(result).toBe(true);

    const result2 = await admin.helper.checkTableHeadersLim(admin.settingsPage.fieldTitle, setsTitle, 7);
    expect(result2).toBe(true);
  });
});