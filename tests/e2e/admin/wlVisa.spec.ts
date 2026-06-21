import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const visaUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_VISA}`;
const headersRow = ['Transfer', 'User', 'Card number', 'Card holder name', 'Amount', 'Amount with commission', 
                'Commission', 'Status', 'Actions'];
const visaUser = 'qa+user1@bitbanker.org'

test.describe('Check WL VISA page', {
    tag: ['@admin', '@visa']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(visaUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });


    test("Check visibility of web elements in VISA page", async ()=> {
        await admin.helper.loaded();
        await expect.soft(admin.operationsPage.statusInput).toBeVisible();
        await expect.soft(admin.operationsPage.visaQueryInpt).toBeVisible();
        const result = await admin.helper.checkTableHeaders(admin.operationsPage.headers, headersRow);
        expect(result).toBe(true);
    });

    test(`Check ${visaUser} email input`, async ()=> {
        await admin.helper.loaded();
        await admin.operationsPage.visaQueryInpt.fill(visaUser);
        await admin.settingsPage.page.waitForTimeout(1500);
        const result = await admin.helper.checkOneValueForColumn(admin.operationsPage.tableUserColumn, visaUser)
        expect(result).toBe(true);
    });

    test(`The statuses filters awaiting, canceled and completed returning valid list of records`, async ()=> {
      await admin.helper.loaded();
      await admin.operationsPage.statusInput.click();
      await admin.operationsPage.visaStatusDropdwn.filter({hasText: 'Awaiting action'}).click();
      await admin.settingsPage.page.waitForTimeout(1500);
      const resultAwaiting = await admin.helper.checkOneValueForColumn(admin.operationsPage.p2pStatusColumnValue, 'Pending approval')
      expect(resultAwaiting).toBe(true);

      await admin.operationsPage.statusInput.click();
      await admin.operationsPage.visaStatusDropdwn.filter({hasText: 'Canceled'}).click();
      await admin.settingsPage.page.waitForTimeout(1500);
      const resultCanceled = await admin.helper.checkOneValueForColumn(admin.operationsPage.p2pStatusColumnValue, 'Canceled')
      expect(resultCanceled).toBe(true);

      await admin.operationsPage.statusInput.click();
      await admin.operationsPage.visaStatusDropdwn.filter({hasText: 'Completed'}).click();
      await admin.settingsPage.page.waitForTimeout(1500);
      const resultCompleted = await admin.helper.checkOneValueForColumn(admin.operationsPage.p2pStatusColumnValue, 'Completed')
      expect(resultCompleted).toBe(true);
    });
});