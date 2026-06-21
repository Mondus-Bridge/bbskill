import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/SuperLoginAuth.json');
let admin;
const amlUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.GLOBAL_AML}`;

test.describe('Global => Settings => Aml', {
    tag: ['@aml', '@global', '@super-admin']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(amlUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test("Have a bitcoin section screenshots", async ()=> {
        await admin.helper.loaded();
        await admin.settingsPage.page.waitForTimeout(3000);
        await expect.soft(admin.settingsPage.globalAmlScreenOne).toHaveScreenshot('aml-settigsBTC-one.png');
        await expect.soft(admin.settingsPage.globalAmlScreenTwo).toHaveScreenshot('aml-settigsBTC-two.png');
    });
    test("Use dropdown and swtich the currency", async ()=> {
        await admin.helper.loaded();
        await admin.settingsPage.page.waitForTimeout(3000);
        await admin.settingsPage.globalAmlCurDropdown.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.settingsPage.globalAmlCurUsdt.click();
        await admin.settingsPage.page.waitForTimeout(2000);
        await admin.settingsPage.globalAmlDepositToggle.click();
        await admin.settingsPage.globalAmlInvoiceToggle.click();
        await admin.settingsPage.globalAmlTGinput.fill('');
        await admin.settingsPage.globalAmlTGinput.fill('telega');
        await admin.settingsPage.globalAmlTGinputMinute.fill('');
        await admin.settingsPage.globalAmlTGinputMinute.fill('2000');
        await admin.settingsPage.globalAmlTGinputMaxRisk.fill('');
        await admin.settingsPage.globalAmlTGinputMaxRisk.fill('99%');
        await admin.settingsPage.page.waitForTimeout(1000);
        await expect.soft(admin.settingsPage.globalAmlScreenOne).toHaveScreenshot('aml-settigsUSDT-one.png');
        await expect.soft(admin.settingsPage.globalAmlScreenTwo).toHaveScreenshot('aml-settigsUSDT-two.png');
    });
});
