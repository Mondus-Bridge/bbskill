import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const ledgerUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_LEDGER}`;

const operations = [
    "Bank transfer", "Blocking funds", "Bonus", "Loan", "Clearing", "Commissions", 
    "Balance deposits", "Game deposit", "Profit order", "Investing", "Invoice", 
    "Staking deposit", "Deposit interest", "Order", "P2P deposit", "P2P withdrawal", 
    "Referral program", "Referral bonus", "Faster Payments System (SBP) Deposit", 
    "Transfer", "Withdraw", "SWIFT to send", "VISA withdrawal", "Debit account"];

const currenies = [
  "Rouble (Non resident)", "UAE Dirham", "UAE Dirham Dubai",
  "Cosmos", "Avalanche", "Bitcoin",
  "Ether", "Euro", "Gold Dubai",
  "KG Som", "Rouble (Kyrgyzstan)", "Ruble Coin",
  "Ton", "Tron", "Turkish lira",
  "USD Coin", "US Dollar (Kyrgyzstan)", "US Dollar Dubai",
  "US Dollar (Russia)", "Tether USD"];

test.describe('Check WL Operations page', {
    tag: ['@admin', '@ledger']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(ledgerUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test("Ledger page should have this view", async ()=> {
      await admin.settingsPage.page.waitForTimeout(5000);
      await expect(admin.operationsPage.ledgerArea).toHaveScreenshot('ledger-full.png', {
        fullPage: true,
        mask: [admin.operationsPage.periodInput, admin.operationsPage.tableArea]
      });
    });

    test('Check dropdowns values in ledger', async ()=>{
      test.setTimeout(40000);
      await admin.operationsPage.allOpeartionsInput.click()
      await admin.operationsPage.page.waitForTimeout(3000);
      const result = await admin.operationsPage.checkDropdownList(admin.operationsPage.allOpeartionsList, operations);
      expect(result).toBe(true);

      await admin.operationsPage.baseCurrencyinput.click()
      await admin.operationsPage.page.waitForTimeout(1000);
      const result2 = await admin.operationsPage.checkDropdownList(admin.operationsPage.baseCurrencyList, currenies);
      expect(result2).toBe(true);

      await admin.operationsPage.quoteCurInpt.click()
      await admin.operationsPage.page.waitForTimeout(1000);
      const result3 = await admin.operationsPage.checkDropdownList(admin.operationsPage.quoteCurrencyList, currenies);
      expect(result3).toBe(true);
    });

    test('Check the id & email input', async () => {
      const email = 'qa+user1@bitbanker.org'
      await admin.operationsPage.fillTheInput(admin.operationsPage.userEmailInpt, email);
      const emailQty = await admin.operationsPage.tableUserColumn.count();
      expect(emailQty).toEqual(10);
      const result = await admin.helper.checkTableHeaders(admin.operationsPage.tableUserColumn, email);
      expect(result).toBe(true);
      await admin.operationsPage.fillTheInput(admin.operationsPage.userEmailInpt, "");

      await admin.operationsPage.fillTheInput(admin.operationsPage.transactionInpt, 562933); //need to change every week Balance deposits.Cancel
      const userEmail = await admin.operationsPage.tableUserColumn.count();
      expect(userEmail).toEqual(2);
      const transactionText = await admin.operationsPage.transactionTwo.textContent();
      expect.soft(transactionText).toContain('Withdraw.Cancel ');
      const currencyText = await admin.operationsPage.currencyColumn.first().textContent();
      expect.soft(currencyText).toContain('USDT');
    });
      
      test('Check order input', async () => {
      await admin.operationsPage.clickAndChooseOperation('Order');
      const value = await admin.operationsPage.extractNumeric();
      const orderEmail = await admin.operationsPage.tableUserColumn.nth(0).textContent();
      await admin.operationsPage.removeIco.click()
      await admin.settingsPage.page.waitForTimeout(3000);
      await admin.operationsPage.clickAndFillOrder(value);
      const userEmail2 = await admin.operationsPage.tableUserColumn.count();
      expect(userEmail2).toBeGreaterThanOrEqual(1);
      expect(userEmail2).toBeLessThanOrEqual(7);
      const resultEmail = await admin.helper.checkTableHeaders(admin.operationsPage.tableUserColumn, orderEmail);
      expect(resultEmail).toBe(true);
    });

    test('Only our clients should be visible', async ()=> {
      const notOwrClient = 'loveandpeace1331+bb23@gmail.com'
      const owrClient = 'qa+user1@bitbanker.org'

      await admin.operationsPage.installPeriod();
      await admin.settingsPage.page.waitForTimeout(3000);
      await admin.operationsPage.fillUserEmailInpt(notOwrClient);
      const result = await admin.helper.checkTableHeaders(admin.operationsPage.tableUserColumn, notOwrClient);
      expect(result).toBe(true);
      await admin.operationsPage.ourClients.click();
      await admin.settingsPage.page.waitForTimeout(3000);
      const result2 = await admin.helper.checkTableHeaders(admin.operationsPage.tableUserColumn, notOwrClient);
      expect(result2).toBe(false);

      await admin.operationsPage.fillUserEmailInpt(owrClient );
      const result3 = await admin.helper.checkTableHeaders(admin.operationsPage.tableUserColumn, owrClient);
      expect(result3).toBe(true);
      await admin.operationsPage.ourClients.click();
      await admin.settingsPage.page.waitForTimeout(3000);
      const result4 = await admin.helper.checkTableHeaders(admin.operationsPage.tableUserColumn, owrClient);
      expect(result4).toBe(true);
    });
});