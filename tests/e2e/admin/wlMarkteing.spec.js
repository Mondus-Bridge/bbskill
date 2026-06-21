import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const marketingInfobox = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_MARKETING_INFOBOX}`;

test.describe("Check elements in marketing page", {
    tag: ['@admin', '@marketing']
    },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
    });
    test("Get all sections for infoboxs", async ()=> {
        await admin.loginPage.goto(marketingInfobox);
        await admin.settingsPage.page.waitForTimeout(3000);
        await admin.settingsPage.page.getByText('Cash deposit').click();
        await admin.settingsPage.page.waitForTimeout(300);
        const elementForScreen = await admin.settingsPage.page.locator('div[class="flex flex-col gap-8"]');
        await expect(elementForScreen).toHaveScreenshot('infobox-content-one.png');
        const lastElement = await admin.settingsPage.page.getByText('Promo codes');
        await lastElement.scrollIntoViewIfNeeded();
        await admin.settingsPage.page.waitForTimeout(300);
        await expect(elementForScreen).toHaveScreenshot('infobox-content-two.png');
    });
});