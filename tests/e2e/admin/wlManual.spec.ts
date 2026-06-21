import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const tradesUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_MANUALS}`;
const headersRow = ['ID', 'Status', 'Interim status', 'Email', 'WL', 'Currency', 'Amount', 'MEMO', 'Transactions', 'Actions'];



test.describe('Check WL Trades page', {
    tag: ['@admin', '@manual']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(tradesUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });


    test("Check visibility of web elements in Manuals page", async ()=> {
        await admin.helper.loaded();
        await expect.soft(admin.operationsPage.statusInput).toBeVisible();
        await expect.soft(admin.operationsPage.ledgerTitle).toContainText('Manual withdrawal requests');
        const result = await admin.helper.checkTableHeaders(admin.operationsPage.headers, headersRow);
        expect(result).toBe(true);

        const result2 = await admin.helper.checkOneValueForColumn(admin.operationsPage.manualWlcolumn, 'Bitbanker');
        expect(result2).toBe(true);

        const count = await admin.operationsPage.manualWlcolumn.count()
        expect(count).toBe(10);
    });

    test ('Status filter should return filtered statuses: pending, completed, canceled', async ()=> {
        await admin.helper.loaded();
        await admin.operationsPage.statusInput.click();
        await admin.operationsPage.manualDropdownSelector.filter({hasText: 'Pending'}).click();
        await admin.settingsPage.page.waitForTimeout(3000);
        const count = await admin.operationsPage.manualStatusValue.count();
        expect(count).toBe(10);
        const result = await admin.helper.checkOneValueForColumn(admin.operationsPage.manualStatusValue, 'pending');
        expect(result).toBe(true);
        const countBtn = await admin.operationsPage.manualCancelBtn.count();
        expect(countBtn).toBe(10);

        await admin.operationsPage.statusInput.click();
        await admin.operationsPage.manualDropdownSelector.filter({hasText: 'Completed'}).click();
        await admin.settingsPage.page.waitForTimeout(3000);
        const count2 = await admin.operationsPage.manualStatusValue.count();
        expect(count2).toBe(10);
        const result2 = await admin.helper.checkOneValueForColumn(admin.operationsPage.manualStatusValue, 'complete');
        expect(result2).toBe(true);

        await admin.operationsPage.statusInput.click();
        await admin.operationsPage.manualDropdownSelector.filter({hasText: 'Canceled'}).click();
        await admin.settingsPage.page.waitForTimeout(3000);
        const count3 = await admin.operationsPage.manualStatusValue.count();
        expect(count3).toBe(10);
        const result3 = await admin.helper.checkOneValueForColumn(admin.operationsPage.manualStatusValue, 'cancelled');
        expect(result3).toBe(true);
    });

    test.skip('Check modal page for submit btn in status pending (test depricated on the dev)', async ()=> {
        await admin.helper.loaded();
        await admin.operationsPage.statusInput.click();
        await admin.operationsPage.manualDropdownSelector.filter({hasText: 'Pending'}).click();
        await admin.settingsPage.page.waitForTimeout(3000);
        await admin.nonOperationsPage.paginatorBtn100.click()
        await admin.settingsPage.page.waitForTimeout(3000);
    
        await admin.operationsPage.manualSbmtBtn.nth(0).click();
        await admin.settingsPage.page.waitForTimeout(300);
        await expect.soft(admin.operationsPage.manualSbmtText).toContainText('only if the automatic withdrawal did not occur');
        await admin.operationsPage.manualModalCancelBtn.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.manualSbmtBtn.nth(0).click();
        await admin.settingsPage.page.waitForTimeout(1000);
        await admin.operationsPage.manualModalSubmitBtn.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.manualConfirmBtn.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.manualTransactionHash.fill('0x5e6a9fd8b4a9b7e3a8c1f0b0c3a0f9d2b2e3a8b1f0b1e6c7a9f8d4b7a9c3d8e1');
        await admin.operationsPage.manualLastConfirmBtn.click();
        await admin.settingsPage.page.waitForTimeout(1500);
        const txNotInPending = await admin.helper.checkOneValueForColumn(admin.operationsPage.manualTXValue, '0x5e6a9fd8b4a9b7e3a8c1f0b0c3a0f9d2b2e3a8b1f0b1e6c7a9f8d4b7a9c3d8e1');
        expect(txNotInPending).toBe(false);
    });

    test('Check modal page for cancel btn in status pending', async ()=> {
        await admin.helper.loaded();
        await admin.operationsPage.statusInput.click();
        await admin.operationsPage.manualDropdownSelector.filter({hasText: 'Pending'}).click();
        await admin.settingsPage.page.waitForTimeout(3000);

        const idOfOpeation = await admin.operationsPage.manualFirstId.textContent();
        await admin.operationsPage.manualCancelBtn.nth(0).click();
        await admin.settingsPage.page.waitForTimeout(300);
        await expect.soft(admin.operationsPage.manualCancelModal).toContainText('Cancel user withdrawal');
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.manualCancelCancelBtn.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.manualCancelBtn.nth(0).click();
        await admin.operationsPage.manualCancelYesCancelBtn.click();
        await admin.settingsPage.page.waitForTimeout(1500);
        const txNotInPending = await admin.helper.checkOneValueForColumn(admin.operationsPage.manualTXValue, idOfOpeation);
        expect(txNotInPending).toBe(false);
    });
});