import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const emailUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_EMAIL}`;
const headers = ['ID', 'Type', 'Description', 'Status', 'Templates'];

test.describe('Check WL Email page', {
    tag: ['@admin', '@email']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(emailUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test("Check visibility of web elements in Email page", async ()=> {
        await admin.helper.loaded();
        expect.soft(admin.nonOperationsPage.emailHeader).toContainText('Email templates');
        expect.soft(admin.nonOperationsPage.emailTabs.filter({hasText: 'Transactional'})).toBeVisible();
        expect.soft(admin.nonOperationsPage.emailTabs.filter({hasText: 'Informational'})).toBeVisible();
        expect.soft(admin.nonOperationsPage.emailSelectGroupInpt).toBeVisible();
        expect.soft(admin.nonOperationsPage.emailCreateTemplate).toBeVisible();
        expect.soft(admin.nonOperationsPage.emailBasicTemplate).toBeVisible();
        const result = await admin.helper.checkTableHeaders(admin.nonOperationsPage.headers, headers);
        expect(result).toBe(true);
    });

  test("Create template and check template", async ()=> {
    await admin.nonOperationsPage.emailCreateTemplate.click();
    await admin.settingsPage.page.waitForTimeout(100);
    await expect.soft(admin.nonOperationsPage.emailModalTypeInpt).toBeVisible();
    await expect.soft(admin.nonOperationsPage.emailModalDescInpt).toBeVisible();
    await expect.soft(admin.nonOperationsPage.emailModalTabs).toContainText('TransactionalInformational');
    await expect.soft(admin.nonOperationsPage.emailModalSubgrpInpt).toBeVisible();
    await expect.soft(admin.nonOperationsPage.emailModalAddBtn).toBeVisible();
    await expect.soft(admin.nonOperationsPage.emailModalCreateBtn).toBeDisabled();
    await admin.nonOperationsPage.emailModalCloseIco.click()
    await admin.settingsPage.page.waitForTimeout(100);
    await admin.nonOperationsPage.emailBasicTemplate.click();
    await admin.settingsPage.page.waitForTimeout(3000);

    await admin.nonOperationsPage.emailBasicTempltPageBtns.getByText('Russian HTML',{ exact: true }).click();
    await admin.settingsPage.page.waitForTimeout(100);
    await expect.soft(admin.nonOperationsPage.emailBasicTempRedactorTitle).toContainText('Authorization emailsruhtml | Third-party MJML editor| MJML documentation');
    await expect.soft(admin.nonOperationsPage.emailBasicTemplatePreview).toBeVisible();
    await expect.soft(admin.nonOperationsPage.emailBasicSaveTmplBtn).toBeVisible();

    await admin.nonOperationsPage.emailBasicTempltPageBtns.getByText('English HTML',{ exact: true }).click();
    await admin.settingsPage.page.waitForTimeout(100);
    await expect.soft(admin.nonOperationsPage.emailBasicTempRedactorTitle).toContainText('Authorization emailsenhtml | Third-party MJML editor| MJML documentation');
    await expect.soft(admin.nonOperationsPage.emailBasicTemplatePreview).toBeVisible();
    await expect.soft(admin.nonOperationsPage.emailBasicSaveTmplBtn).toBeVisible();

    await admin.nonOperationsPage.emailBasicTempltPageBtns.getByText('Russian MJML',{ exact: true }).click();
    await admin.settingsPage.page.waitForTimeout(100);
    await expect.soft(admin.nonOperationsPage.emailBasicTempRedactorTitle).toContainText('Transactional emailsrumjml | Third-party MJML editor| MJML documentation');
    await expect.soft(admin.nonOperationsPage.emailBasicTemplatePreview).toBeVisible();
    await expect.soft(admin.nonOperationsPage.emailBasicSaveTmplBtn).toBeVisible();

    await admin.nonOperationsPage.emailBasicTempltPageBtns.getByText('English MJML',{ exact: true }).click();
    await admin.settingsPage.page.waitForTimeout(100);
    await expect.soft(admin.nonOperationsPage.emailBasicTempRedactorTitle).toContainText('Transactional emailsenmjml | Third-party MJML editor| MJML documentation');
    await expect.soft(admin.nonOperationsPage.emailBasicTemplatePreview).toBeVisible();
    await expect.soft(admin.nonOperationsPage.emailBasicSaveTmplBtn).toBeVisible();
  });
});