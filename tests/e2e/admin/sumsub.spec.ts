
import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/SuperLoginAuth.json');
let admin;
const sumsubUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.GLOBAL_SUMSUB}`;

test.describe.serial("Global => Sumsub", {
    tag: ['@super-admi', '@sumsub', '@global']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(sumsubUrl);
      await admin.usersPage.page.waitForTimeout(3000);
    });

    test("Visual comparisons Sumsub page", async ()=> {
        await admin.helper.loaded();
        await expect(admin.usersPage.screenshotSumsubArea).toBeVisible();
        await admin.usersPage.page.waitForTimeout(3000);
        await expect(admin.usersPage.screenshotSumsubArea).toHaveScreenshot('adminSumsub.png', {
            mask: [admin.usersPage.missScreenshotInSumsubOne]
        });
    });

    test("Create the new Sumsub card", async ()=> {
        await admin.helper.loaded();
        await admin.usersPage.page.locator('.flex.flex-col.items-center').click();
        await admin.usersPage.page.waitForTimeout(500);
        await admin.usersPage.sumsubEditTitleText.last().hover();
        const editTitle = admin.usersPage.sumsubEditBtn.last();
        await editTitle.waitFor({ state: 'visible' });
        await editTitle.hover();
        await editTitle.click();
        await admin.usersPage.page.getByPlaceholder('Enter / edit text').press('ControlOrMeta+a');
        await admin.usersPage.page.getByPlaceholder('Enter / edit text').fill('Playwright card title');
        await admin.usersPage.page.getByRole('button', { name: 'Edit' }).click();
        await admin.usersPage.page.getByText('Card available when:').last().scrollIntoViewIfNeeded({timeout: 2000});
        await admin.usersPage.page.getByText('Card available when:').last().click();
        await admin.usersPage.page.locator('form').filter({ hasText: 'Playwright card title' }).getByPlaceholder('Select level').click();
        await admin.usersPage.page.waitForTimeout(500);
        await admin.usersPage.page.getByText('Стандартный KYC').last().click();
        await admin.usersPage.page.getByText('Link to Sumsub').last().click();
        await admin.usersPage.page.locator('form').filter({ hasText: 'Playwright card title' }).getByPlaceholder(' ', { exact: true }).click();
        await admin.usersPage.page.locator('form').filter({ hasText: 'Playwright card title' }).getByPlaceholder(' ', { exact: true }).fill('playwright-link');
        const [responseCreateCard] = await Promise.all([
          admin.settingsPage.page.waitForResponse(response => 
            response.url().includes('kyc/sumsub/forms') && response.request().method() === 'POST'
          ),
          admin.usersPage.page.getByRole('button', { name: 'Save' }).last().click()
        ]);
          expect(responseCreateCard.status()).toBe(200);
          const responseCreateResult = await responseCreateCard.json();
          expect(responseCreateResult).toMatchObject({
            level_name: "playwright-link",
            is_kgz: false
        });
        await admin.usersPage.page.waitForTimeout(500);
    });

    test("Delete the new Sumsub card", async ()=> {
      await admin.helper.loaded();
      await admin.usersPage.sumsubEditTitleText.last().hover();
      const deleteCard = admin.usersPage.sumsubDeleteBtn.last();
      await deleteCard.waitFor({ state: 'visible' });
      await deleteCard.hover();
      await deleteCard.click();
      const [responseDeleteCard] = await Promise.all([
        admin.settingsPage.page.waitForResponse(response => 
          response.url().includes('kyc/sumsub/forms') && response.request().method() === 'DELETE'
        ),
        admin.usersPage.page.getByRole('button', { name: 'Yes' }).click()
      ]);
        expect(responseDeleteCard.status()).toBe(200);
        const responseDeleteResult = await responseDeleteCard.json();
        expect(responseDeleteResult).toMatchObject({
          result: "success"
      });
      await admin.usersPage.page.waitForTimeout(2500);
    });
});