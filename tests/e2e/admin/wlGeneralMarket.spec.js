import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const marketUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_MARKETS}`;
const loanUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_LOAN}`;
const lendUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_LEND}`;
const servicesUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_SERVICES}`;
const allPairs = [
    "ATOM/RUBR",      "ATOM/USDT",      "AVAX/RUBR",
    "AVAX/USDT",       "BTC/AED",        "BTC/EUR",
    "BTC/KGS",         "BTC/RUBR",      "BTC/USD.K",
    "BTC/USD.R",       "BTC/USDT",       "ETH/AED",
    "ETH/EUR",         "ETH/KGS",        "ETH/RUBR",
    "ETH/USD.K",       "ETH/USD.R",      "ETH/USDT",
    "EUR/RUBR",       "EUR/USDT",       "GLD.PD/AED.PD",
    "GLD.PD/USD.PD",   "GLD.PD/USDT",    "TON/RUBR",
    "TON/USDT",        "TRX/RUBR",      "TRX/USDT",
    "USDC/EUR",        "USDC/RUBR",     "USDC/USD.K",
    "USDC/USD.R",      "USDC/USDT",      "USD.PD/AED.PD",
    "USD.R/RUBR",     "USD.R/USD.K",    "USDT/AED",
    "USDT/AED.PD",     "USDT/EUR",       "USDT/KGS",
    "USDT/RUB.K",      "USDT/RUBR",     "USDT/TRY",
    "USDT/USD.K",      "USDT/USD.R"
  ];

  const inputTitle = [
    "Sort weight", "Min. amount of coins for buy/sell", "Max. amount of coins for buy/sell",
     "Precision of buy/sell coins", "Min. possible buy/sell price", "Max. possible buy/sell price",
     "Precision of buy price", "Precision of your price and order book price", "Taker fee", "Maker fee"
  ];

  const curNames = [
    "Bitcoin",            "Turkish lira",         "UAE Dirham Dubai",
    "Ether",              "Tether USD",           "USD Coin",
    "Tron",               "Ruble Coin",      "Rouble (Kyrgyzstan)",
    "US Dollar (Russia)", "Euro",                 "US Dollar (Kyrgyzstan)",
    "US Dollar Dubai",    "KG Som",               "Ton",
    "UAE Dirham",         "Cosmos",               "Avalanche",
    "Gold Dubai"
  ];

const lendFields = [
  'Demand Deposit', '7-day lending rate', '14-day lending rate', '21-day lending rate'
];

const servicesList = [
  "Deposits",                 "P2P",                       "Buy/Sell",
  "Investing",                   "Crypto Payment Processing", "Loans",
  "Bank cards",              "Documents",                 "Video assistants",
  "Faster Payments System (SBP) deposit", 'Transfers to Visa Card', 'SWIFT transfers',
  "Company onboarding", "Referral program", 
  'Withdrawal via Russian bank (for legal entities)', 'Withdrawal via Russian bank (for individuals)',
  "OTC Transactions", "Order book on login",
  'Non-cash top-up (QR code)'
];
  
  

test.describe('Check Marktet page', {
    tag: ['@admin', '@settings']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(marketUrl);
    });

    test('Check Markets has all pairs', async () => {
        test.setTimeout(40000);
        await admin.settingsPage.page.waitForTimeout(5000); 
        const result = await admin.helper.checkTableHeaders(admin.settingsPage.marketPairs, allPairs);
        expect(result).toBe(true);
    });

    test('Check all fields is available', async () => {
      await admin.settingsPage.page.waitForTimeout(5000);
      const result = await admin.helper.checkTableHeadersLim(admin.settingsPage.marketsFields, inputTitle, 10);
      expect(result).toBe(true);
      expect.soft(admin.settingsPage.saveBtn).toBeVisible();
    });
});

test.describe('Check Lend, Loans and Services pages', {
  tag: ['@admin', '@settings']
},() => {
  test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
    admin = new AdminPomManager(page);
  });

  test('Check all fields is available in lend page', async () => {
    await admin.loginPage.goto(lendUrl);
    await admin.settingsPage.page.waitForTimeout(5000);
    const result = await admin.helper.checkTableHeaders(admin.settingsPage.lendTitle, curNames);
    expect(result).toBe(true);
    expect.soft(admin.settingsPage.lendSaveBtn).toBeVisible();
    const result2 = await admin.helper.checkTableHeadersLim(admin.settingsPage.marketsFields, lendFields, 4);
    expect(result2).toBe(true);

  });

  test('Check all fields is available in loans page', async () => {
    await admin.loginPage.goto(loanUrl);
    await admin.settingsPage.page.waitForTimeout(5000);
    const result = await admin.helper.checkTableHeaders(admin.settingsPage.lendTitle, curNames);
    expect(result).toBe(true);
    expect.soft(admin.settingsPage.lendSaveBtn).toBeVisible(); 
    expect.soft(admin.settingsPage.marketsFields.nth(0)).toBeVisible(); 
  });

  test('Check services page', async () => {
    await admin.loginPage.goto(servicesUrl);
    await admin.settingsPage.page.waitForTimeout(5000);
    const result = await admin.helper.checkTableHeaders(admin.settingsPage.checkBoxFields, servicesList);
    expect(result).toBe(true);
    await admin.settingsPage.shouldBeChecked(admin.settingsPage.settingsToggl, 19)
  });
});

