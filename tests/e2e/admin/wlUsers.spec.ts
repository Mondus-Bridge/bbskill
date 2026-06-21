import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const usersUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_USERS}`;

test.describe('Check WL Users page', {
    tag: ['@admin', '@users']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(usersUrl);
      await admin.settingsPage.page.waitForTimeout(7000);
    });

    test("Accounts page should have this elements and expected behaviour", async ()=> {
        await expect(admin.usersPage.accountPageArea).toHaveScreenshot('accounts-full.png', {
            fullPage: true,
            mask: [admin.usersPage.accountTableArea]
        })
    });

    test("Accounts page should have this behaviour after using filter citezenship", async ()=> {
        await admin.usersPage.clickAnUseFilters(admin.usersPage.citezenshipDropdown, 'ANT');
        const antQty = await admin.usersPage.emailColumn.count();
        expect(antQty).toBeGreaterThanOrEqual(2);
        expect(antQty).toBeLessThanOrEqual(5);

        await admin.usersPage.clickAnUseFilters(admin.usersPage.citezenshipDropdown, 'PHL');
        await admin.usersPage.paginator.nth(2).click()
        await admin.settingsPage.page.waitForTimeout(2000);
        const phlQty = await admin.usersPage.emailColumn.count();
        expect(phlQty).toBeGreaterThanOrEqual(30);
        expect(phlQty).toBeLessThanOrEqual(40);

        await admin.usersPage.clickAnUseFilters(admin.usersPage.citezenshipDropdown, 'RUS');
        const rusQty = await admin.usersPage.emailColumn.count();
        expect(rusQty).toEqual(4);
    });

    test("Accounts page should have this behaviour after using filter residence", async ()=> {
        await admin.usersPage.clickAnUseFilters(admin.usersPage.residenceDropdown, 'Canada');
        const canadaQty = await admin.usersPage.emailColumn.count();
        expect(canadaQty).toBeGreaterThanOrEqual(1);
        expect(canadaQty).toBeLessThanOrEqual(5);

        await admin.usersPage.clickAnUseFilters(admin.usersPage.residenceDropdown, 'Afghanistan');
        await admin.usersPage.paginator.nth(2).click()
        await admin.settingsPage.page.waitForTimeout(2000);
        const afghanistanQty = await admin.usersPage.emailColumn.count();
        expect(afghanistanQty).toBeGreaterThanOrEqual(30);
        expect(afghanistanQty).toBeLessThanOrEqual(40);

        await admin.usersPage.clickAnUseFilters(admin.usersPage.residenceDropdown, 'Honduras');
        const hondurasQty = await admin.usersPage.emailColumn.count();
        expect(hondurasQty).toEqual(1);
    });

    test("Accounts page should have this behaviour after using email/name/adress filter", async ()=> {
        await admin.usersPage.fillMainFilter(admin.usersPage.emailFilteInput, 'qa+dubai@bitbanker.org')
        const emailQty = await admin.usersPage.emailColumn.count();
        expect(emailQty).toEqual(1);
        await expect.soft(admin.usersPage.emailColumn).toHaveText('qa+dubai@bitbanker.org');
        await expect.soft(admin.usersPage.wlColumn).toHaveText('Bitbanker');
        await expect.soft(admin.usersPage.idColumn).toHaveText('917');
        await expect.soft(admin.usersPage.firstNameColumn).toHaveText('');
        await expect.soft(admin.usersPage.nickNameColumn).toHaveText('');

        await admin.usersPage.fillMainFilter(admin.usersPage.emailFilteInput, 'Michael')
        const emailQty4 = await admin.usersPage.emailColumn.count();
        expect(emailQty4).toEqual(1);
        await expect.soft(admin.usersPage.emailColumn).toHaveText('loveandpeace1331+postmanstandartkyc@gmail.com');
        await expect.soft(admin.usersPage.wlColumn).toHaveText('Bitbanker');
        await expect.soft(admin.usersPage.idColumn).toHaveText('822');
        await expect.soft(admin.usersPage.firstNameColumn).toHaveText('Michael Jordan');
        await expect.soft(admin.usersPage.nickNameColumn).toHaveText('StandartUser');
        await admin.usersPage.fillMainFilter(admin.usersPage.emailFilteInput, '')
        await admin.settingsPage.page.waitForTimeout(3000);

        await admin.usersPage.fillMainFilter(admin.usersPage.adressFilterInput, '16VMnCWCi8QK3PKxYeRpfuVDUWpDhfG41X')
        const emailQty2 = await admin.usersPage.emailColumn.count();
        expect(emailQty2).toEqual(1);
        await expect.soft(admin.usersPage.emailColumn).toHaveText('qa+user1@bitbanker.org');
        await expect.soft(admin.usersPage.wlColumn).toHaveText('Bitbanker');
        await expect.soft(admin.usersPage.idColumn).toHaveText('885');
        await expect.soft(admin.usersPage.firstNameColumn).toHaveText('');
        await expect.soft(admin.usersPage.nickNameColumn).toHaveText('');

        await admin.usersPage.fillMainFilter(admin.usersPage.adressFilterInput, '334678994')
        const emailQty3 = await admin.usersPage.emailColumn.count();
        expect(emailQty3).toEqual(1);
        await expect.soft(admin.usersPage.emailColumn).toHaveText('qa+user1@bitbanker.org');
        await expect.soft(admin.usersPage.wlColumn).toHaveText('Bitbanker');
        await expect.soft(admin.usersPage.idColumn).toHaveText('885');
        await expect.soft(admin.usersPage.firstNameColumn).toHaveText('');
        await expect.soft(admin.usersPage.nickNameColumn).toHaveText('');;
    });
});