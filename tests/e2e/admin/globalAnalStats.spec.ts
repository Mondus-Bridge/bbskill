import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/SuperLoginAuth.json');
let admin;
const statisticsUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_STATS}`;
const metrics = [
    "Deposited",
    "Total:",
    "Withdrawn",
    "Total:",
    "Profit",
    "Total:",
    "Limit set",
    "Total:",
    "Uncompleted limit orders",
    "Total:",
    "Order market",
    "Total:",
    "C2C order market",
    "Total:",
    "Invoices issued",
    "Total:",
    "Invoices paid",
    "Total:",
    "Deposits",
    "Total:",
    "Loans",
    "Total:",
    "Registrations",
    "Completed KYC",
    "To unregistered Telegram accounts",
    "Total:"
  ]
  

test.describe('Check global Statistics page & Lend & Earn page', {
    tag: ['@global', '@super-admin']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(statisticsUrl);
    });
  
    test('Check global Statistics page', async () => {
        await admin.analyticsPage.page.waitForTimeout(8000); 
        await expect.soft(admin.analyticsPage.statisticsBaseCur).toBeVisible();
        await expect.soft(admin.analyticsPage.statisticsPeriodBtn).toBeVisible();
        const result = await admin.helper.checkTableHeaders(admin.analyticsPage.statisticsMetrics, metrics);
        expect(result).toBe(true);
    });
});