import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const currenciesUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_CURRENCIES}`;
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

const setsTitle = ['Sort weight', 'SBP deposit fee in %', 'Absolute SBP deposit fee',
    'Minimum P2P deposit amount', 'Minimum internal transfer amount', 'Minimum lending amount',
    'Minimum loan amount', 'Minimum withdrawal amount', 'Min. VISA withdrawal amount',
    'Minimum deposit for bonus eligibility', 'Minimum invoice amount', 'Min. SBP deposit amount',
    'Min. SWIFT withdrawal fee in USDT', 'Min. SWIFT withdrawal amount',
    'Maximum deposit amount', 'Maximum withdrawal amount to VISA', 'Max. SBP deposit amount',
    'Deposit amount increment', 'Withdrawal amount increment', 'SWIFT cost'
]

const checkboxes = ['Show in deposits?', 
    'Is this a lending currency?','Is this a collateral currency in loans?',
    'Is this a loan currency?', 'Available for creating an investment product?','Allow internal transfers?', 
    'Active', 'Is withdrawal allowed?', 'Allow SWIFT transfers?', 'Allow bank transfers?', 'Is this an invoice currency?',
    'Non-cash withdrawals in Russia (legal entities)', 'Non-cash withdrawals in Russia (individuals)', 'is_banking_available', 
    'Faster Payments System (SBP) deposits allowed?', 'SWIFT payout currency?', 'Non-cash top-up for legal entities',
    'Non-cash top-up for individuals', 'Block order book sales']


test.describe('Check Currencies page', {
    tag: ['@admin', '@settings']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(currenciesUrl);
    });

    test('Check Currencies fields', async () => {
        await admin.settingsPage.page.waitForTimeout(5000); 
        const result = await admin.helper.checkTableHeaders(admin.settingsPage.currenciesTitle, currencies);
        expect(result).toBe(true);
        const result2 = await admin.helper.checkTableHeadersLim(admin.settingsPage.fieldTitle, setsTitle, 20);
        expect(result2).toBe(true);
        expect.soft(admin.settingsPage.feesBtn.filter({hastext: 'Withdrawal fees'}).nth(0)).toBeEnabled();
        expect.soft(admin.settingsPage.feesBtn.filter({hastext: 'Deposit fees'}).nth(0)).toBeEnabled();
        const result3 = await admin.helper.checkTableHeadersLim(admin.settingsPage.checkBoxFields, checkboxes, 19);
        expect(result3).toBe(true);
        expect.soft(admin.settingsPage.saveBtn).toBeEnabled();
    });
});