import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const p2pUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_P2P}`;
const headersRow = ['Deal', 'Seller', 'Buyer', 'Bank', 'Currency', 'Amount (fiat)', 'Amount (BB)', 'Status', 'Actions'];
const dealId = 600;
const emailp2p = 'loveandpeace1331+bb23@gmail.com';
const nickp2p = '4090super';


test.describe('Check WL P2P page', {
    tag: ['@admin', '@p2p']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(p2pUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });


    test("Check visibility of web elements in P2P page", async ()=> {
        await admin.helper.loaded();
        await expect.soft(admin.operationsPage.allStatusesInput).toBeVisible();
        await expect.soft(admin.operationsPage.p2pDealInpt).toBeVisible();
        await expect.soft(admin.operationsPage.p2pEmailInpt).toBeVisible();
        const result = await admin.helper.checkTableHeaders(admin.operationsPage.headers, headersRow);
        expect(result).toBe(true);
    });


    test("Status filter should return corrcect records, if applied single status", async ()=> {
        await admin.helper.loaded();
        await admin.operationsPage.allStatusesInput.click();
        await admin.operationsPage.manualDropdownSelector.filter({hasText: 'Canceled'}).click();
        await admin.settingsPage.page.waitForTimeout(1500);
        const count = await admin.operationsPage.p2pStatusColumnValueCanseled.count();
        expect(count).toBe(10);
        const result = await admin.helper.checkOneValueForColumn(admin.operationsPage.p2pStatusColumnValueCanseled, 'Canceled');
        expect(result).toBe(true);

        await admin.operationsPage.allStatusesInput.click();
        await admin.operationsPage.manualDropdownSelector.filter({hasText: 'Completed'}).click();
        await admin.settingsPage.page.waitForTimeout(1500);
        const countCompleted = await admin.operationsPage.p2pStatusColumnValueCanseled.count();
        expect(countCompleted).toBe(10);
        const resultCompleted = await admin.helper.checkOneValueForColumn(admin.operationsPage.p2pStatusColumnValueCanseled, 'Completed');
        expect(resultCompleted).toBe(true);

        await admin.operationsPage.allStatusesInput.click();
        await admin.operationsPage.manualDropdownSelector.filter({hasText: 'Suspended'}).click();
        await admin.settingsPage.page.waitForTimeout(1500);
        const countSuspended = await admin.operationsPage.p2pStatusColumnValueCanseled.count();
        expect(countSuspended).toBe(0);
        // const resultSuspended = await admin.helper.checkOneValueForColumn(admin.operationsPage.p2pStatusColumnValueCanseled, 'Suspended');
        // expect(resultSuspended).toBe(true); cause here zero records, future problem

        await admin.operationsPage.allStatusesInput.click();
        await admin.operationsPage.manualDropdownSelector.filter({hasText: 'Awaiting acceptance'}).click();
        await admin.settingsPage.page.waitForTimeout(2500);
        const countAwaiting = await admin.operationsPage.p2pStatusColumnValueCanseled.count();
        expect(countAwaiting).toBe(2);
        const resultAwaiting = await admin.helper.checkOneValueForColumn(admin.operationsPage.p2pStatusColumnValueCanseled, 'Awaiting acceptance');
        await admin.settingsPage.page.waitForTimeout(1500);
        expect(resultAwaiting).toBe(true);

        await admin.operationsPage.allStatusesInput.click();
        await admin.operationsPage.manualDropdownSelector.filter({hasText: 'Accepted by operator'}).click();
        await admin.settingsPage.page.waitForTimeout(1500);
        const countAccepted = await admin.operationsPage.p2pStatusColumnValueCanseled.count();
        expect(countAccepted).toBe(3);
        const resultAccepted = await admin.helper.checkOneValueForColumn(admin.operationsPage.p2pStatusColumnValueCanseled, 'Accepted by operator');
        expect(resultAccepted).toBe(true);
    });

    test(`The filters by ${dealId}, ${nickp2p} and ${emailp2p} should return valid records`, async () => {
      await admin.helper.loaded();
      await admin.operationsPage.p2pEmailInpt.fill(emailp2p);
      await admin.settingsPage.page.waitForTimeout(1500);
      const countemail = await admin.operationsPage.p2pEmaiList.count();
      expect(countemail).toBe(20);
    
      const valueEmail = await admin.operationsPage.getMatchingUsers(admin.operationsPage.p2pEmaiList, emailp2p);
      const { matchingElements, totalElements } = valueEmail; // Fix here
      await admin.settingsPage.page.waitForTimeout(1500);
      expect(matchingElements).toBeGreaterThanOrEqual(Math.max(1, Math.floor(totalElements / 2)));
    
      await admin.operationsPage.p2pEmailInpt.fill(nickp2p);
      await admin.settingsPage.page.waitForTimeout(1500);
      const countnick = await admin.operationsPage.p2pEmaiList.count();
      expect(countnick).toBe(20);
    
      const valueNick = await admin.operationsPage.getMatchingUsers(admin.operationsPage.p2pEmaiList, nickp2p);
      await admin.settingsPage.page.waitForTimeout(1500);
      const { matchingElements: matchingNick, totalElements: totalNick } = valueNick; // Use proper destructuring here too
      expect(matchingNick).toBeGreaterThanOrEqual(Math.max(1, Math.floor(totalNick / 2)));
      await admin.operationsPage.p2pEmailInpt.fill('');
      await admin.settingsPage.page.waitForTimeout(1500);
    
      await admin.operationsPage.p2pDealInpt.fill(dealId.toString());
      await admin.settingsPage.page.waitForTimeout(2500);
      const countStatus = await admin.operationsPage.p2pStatusColumnValueCanseled.count();
      expect(countStatus).toBe(1);
      await expect.soft(admin.operationsPage.p2p600id).toBeVisible();
    });
});