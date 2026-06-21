
import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const bankUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_BANK_TRANSFER}`;
const headersRow = ['Date', 'User', 'WL', 'Company', 'Bank', 'Currency', 'Amount', 'Commission', 'Credit amount to client', 'Top-up reason', 'Cashier', 'Document'];

test.describe('Check WL Bank trasfer page', {
    tag: ['@admin', '@bank-transfer']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(bankUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test("Check visibility of web elements in the Bank trasfer page", async ()=> {
        await admin.helper.loaded();
        await admin.settingsPage.page.waitForTimeout(3000);
        await expect.soft(admin.nonOperationsPage.bankCompanyDropdown).toBeVisible();
        await expect.soft(admin.nonOperationsPage.bankCurrencyDropdown).toBeVisible();
        await admin.settingsPage.page.waitForTimeout(3000);
        const result = await admin.helper.checkTableHeaders(admin.nonOperationsPage.headers, headersRow);
        expect(result).toBe(true);
        const rowCount = await admin.nonOperationsPage.wlColumnValues.count();
        expect(rowCount).toBeGreaterThanOrEqual(4);
        const resultWL = await admin.helper.checkOneValueForColumn(admin.nonOperationsPage.wlColumnValues, 'Bitbanker');
        expect(resultWL).toBe(true);
    });

    test("Check filters in the Bank trasfer page", async ()=> {
        await admin.helper.loaded();
        await admin.settingsPage.page.waitForTimeout(3000);
        await admin.nonOperationsPage.bankCompanyDropdown.click();
        await admin.settingsPage.page.waitForTimeout(1000);
        await admin.nonOperationsPage.page.getByText('Sony').click();
        await admin.settingsPage.page.waitForTimeout(3000);
        const resultCompany = await admin.helper.checkOneValueForColumn(admin.nonOperationsPage.bankCompanyColumnValue, 'Sony Corporation');
        expect(resultCompany).toBe(true);

        await admin.page.reload();
        await admin.settingsPage.page.waitForTimeout(3000);
        await admin.nonOperationsPage.bankCurrencyDropdown.click();
        await admin.nonOperationsPage.page.getByText('Euro', {exact:true}).click({ force: true });
        await admin.settingsPage.page.waitForTimeout(3000);
        const resultCurrency = await admin.helper.checkOneValueForColumn(admin.nonOperationsPage.bankCurrencyColumnValue, 'EUR');
        expect(resultCurrency).toBe(true);
    });
});
