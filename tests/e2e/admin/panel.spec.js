import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const adminUrl = `${process.env.BASE_ADMIN_PANEL}`;

test.describe('Login to admin panel tests', {
    tag: ['@admin']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(adminUrl);
    });
    test('Check Global and WL panel sections for full admin', async () => {
        await admin.investmentPage.loaded();
        await admin.panelPage.globalDropdown.click();
        await admin.investmentPage.page.waitForTimeout(1000); 
        await expect.soft(admin.panelPage.globalSections).toHaveScreenshot('global-section.png');
        await expect.soft(admin.panelPage.wlSections).toHaveScreenshot('wl-section.png');
    });
});