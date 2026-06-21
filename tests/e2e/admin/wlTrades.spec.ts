import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const tradesUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_TRADES}`;
const headersRow = [ "Trade -> (group ID)", "User", "Order", "(Order) amount", 
                    "(Order) price", "Side", "Currency", "(Order) cost", 
                    "Commission", "(Trade) market", "Buyout/Profit"];
const fillModaleadersRow = ['Amount', 'Cost', 'Buyback amount', 'Profit'];
const exchangesList = ['Binance', 'MOEX', 'Garantex'];
const tradeId = 67179;
const orderId = 76147;
const email23 = 'loveandpeace1331+bb23@gmail.com';
const emailAlert = 'alert@haschange.com'


test.describe('Check WL Trades page', {
    tag: ['@admin', '@trades']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(tradesUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });


    test("Check visibility of web elements in Trades page", async ()=> {
        await admin.helper.loaded();
        await expect.soft(admin.operationsPage.periodInput).toBeVisible();
        await expect.soft(admin.operationsPage.ledgerTitle).toBeVisible();
        await expect.soft(admin.operationsPage.quoteCurInpt).toBeVisible();
        await expect.soft(admin.operationsPage.tradeQueryInpt).toBeVisible();
        await expect.soft(admin.operationsPage.orderInpt).toBeVisible(); 
        await expect.soft(admin.operationsPage.tradeInpt).toBeVisible(); 
        const result = await admin.helper.checkTableHeaders(admin.operationsPage.headers, headersRow);
        expect(result).toBe(true);
    });

    test(`Trade ID input  should return records about trade ${tradeId} and records about order ${orderId} `, async ()=> {
        await admin.helper.loaded();
        await admin.operationsPage.clickAndFillTrade(tradeId);
        const value1 = await admin.operationsPage.tradeColumnValue.textContent();
        const count1 = await admin.operationsPage.tradeColumnValue.count();
        expect(value1).toEqual("67179");
        expect(count1).toEqual(1);
        await admin.operationsPage.tradeInpt.fill("")
        await admin.settingsPage.page.waitForTimeout(4000);

        
        await admin.operationsPage.clickAndFillOrder(orderId);
        const count2 = await admin.operationsPage.tradeColumnValue.count();
        expect(count2).toEqual(3);
        const value2 = await admin.operationsPage.getMatchingMarketNumbers('#76147');
        const { matchingElements, totalElements } = value2;
        expect(matchingElements).toBeGreaterThanOrEqual(Math.floor(totalElements / 2));
    });

    test(`Filled user email input should return records about ${email23}`, async ()=> {
      await admin.helper.loaded();
      await admin.operationsPage.tradeQueryInpt.fill(email23);
      await admin.settingsPage.page.waitForTimeout(2000);
      const value3 = await admin.operationsPage.getMatchingMarketUsers(email23);
      const { matchingElements, totalElements } = value3;
      expect(matchingElements).toBeGreaterThanOrEqual(Math.max(1, Math.floor(totalElements / 4)));
    });

    test(`By user ${emailAlert} should return records about and try to use fill modal to check some web elements`, async ()=> {
      await admin.helper.loaded();
      await admin.operationsPage.tradeQueryInpt.fill(emailAlert);
      await admin.settingsPage.page.waitForTimeout(2000);
      await admin.operationsPage.fillButton.nth(1).click();
      await admin.settingsPage.page.waitForTimeout(1000);
      const result = await admin.helper.checkTableHeaders(admin.operationsPage.fillModalHeaderRow, fillModaleadersRow);
      expect(result).toBe(true);
      const result2 = await admin.helper.checkTableHeaders(admin.operationsPage.fillModalExchanges, exchangesList);
      expect(result2).toBe(true);
    });
});