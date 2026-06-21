import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const generalBBUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_BB}`;

test.describe('Check General page', {
    tag: ['@admin', '@settings']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(generalBBUrl);
    });

    test('Check visibility of general settings page for full admin', async () => {
      await admin.settingsPage.page.waitForTimeout(5000); 
      await expect.soft(admin.generalPage.bitbankerSettings).toHaveScreenshot("bbwl-settings.png");
      await admin.generalPage.contactDataDropdown.click();
      await admin.settingsPage.page.waitForTimeout(500); 
      await expect.soft(admin.generalPage.newContactDataArea).toHaveScreenshot("contact-data.png");
      await admin.generalPage.debitAccountDropdown.click();
      await admin.settingsPage.page.waitForTimeout(500); 
      await expect.soft(admin.generalPage.debitAccountMain).toHaveScreenshot("debit-main.png");
      await admin.generalPage.addDebitAccountDropdown.click();
      await admin.settingsPage.page.waitForTimeout(500); 
      await expect.soft(admin.generalPage.addDebitAccountArea).toHaveScreenshot("debit-new.png");
    });
});