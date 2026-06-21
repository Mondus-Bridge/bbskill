import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const rolesUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_ROLES}`;
const email = 'loveandpeace1331+rusadmin@gmail.com';
const headers = ['User', 'WL', 'Roles', 'Actions']

test.describe('WL => Administrators', {
    tag: ['@admin', '@roles']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(rolesUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test("Check Administrators page for full admin", async ()=> {
        await admin.helper.loaded();
        await expect.soft(admin.nonOperationsPage.rolesEmailInpt).toBeVisible();
        expect.soft(admin.nonOperationsPage.addAdmin).toBeVisible();
        const result = await admin.helper.checkTableHeaders(admin.nonOperationsPage.headers, headers);
        expect(result).toBe(true);
        const editButtons = await admin.nonOperationsPage.rolesEditBtnDisbld.count();
        for (let i = 0; i < editButtons; i++) {
            const isDisabled = await admin.nonOperationsPage.rolesEditBtnDisbld.nth(i).isDisabled();
            expect(isDisabled).toBe(true); 
        };
        const deleteButtons = await admin.nonOperationsPage.rolesDeleteBtnDisbld.count();
        for (let i = 0; i < deleteButtons; i++) {
            const isDisabled = await admin.nonOperationsPage.rolesDeleteBtnDisbld.nth(i).isDisabled();
            expect(isDisabled).toBe(true); 
        };

        await admin.nonOperationsPage.paginatorBtn100.click()
        await admin.helper.loaded();
        await admin.settingsPage.page.waitForTimeout(3000);
        const wlResult = await admin.helper.checkOneValueForColumn(admin.nonOperationsPage.wlColumnValues, 'Bitbanker');
        expect(wlResult).toBe(true);

        await admin.nonOperationsPage.rolesEmailInpt.fill(email);
        await admin.helper.loaded();
        const count = await admin.nonOperationsPage.rolesUserColumnValue.count();
        expect(count).toEqual(1);
        const firstEmail = await admin.nonOperationsPage.rolesUserColumnValue.textContent()
        expect(firstEmail).toEqual('Дядя Фёдорloveandpeace1331+rusadmin@gmail.com');
    });

    test("Full admin don\'t have permissions to add new admin", async ()=> {
      await admin.helper.loaded();
      await admin.nonOperationsPage.addAdmin.click();
      await admin.nonOperationsPage.addAdminEnterAdminEmail.fill('qa+user1@bitbanker.org');
      await admin.settingsPage.page.waitForTimeout(3000);
      await admin.nonOperationsPage.addAdminEmailList.click();
      await admin.settingsPage.page.waitForTimeout(1000);
      await admin.nonOperationsPage.addContactBtn.click()
      expect.soft(admin.nonOperationsPage.addContactBtn).toBeVisible();
    });
});