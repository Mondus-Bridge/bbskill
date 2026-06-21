import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';
let admin;

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
const authFilePathOwnerBB = path.resolve(__dirname, '../../../auth/OwnerLoginAuth.json');
const document = path.resolve(__dirname, '../../src/ticket.png');
const bankOperatorUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_OPERATOR_BANK}`;

test.describe('Operator => Bank transfer', {
    tag: ['@companies', '@operator']
  },() => {
    test.use({ storageState: authFilePathOwnerBB});
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(bankOperatorUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test('Make bank transfer for user 885', async () => {
        await admin.nonOperationsPage.bankOperatorUserIdInpt.fill("885");
        await admin.nonOperationsPage.bankOperatorFindUserBtn.click();
        await admin.settingsPage.page.waitForTimeout(1000);
        const fileInput = admin.nonOperationsPage.bankOperatorUploadInpt;
        await admin.settingsPage.page.waitForTimeout(300);
        await fileInput.setInputFiles(document);
        await admin.nonOperationsPage.bankOperatorSelCurInpt.click();
        await admin.settingsPage.page.waitForTimeout(300);
        const element = await admin.helper.findVisibleElementWithText(admin.nonOperationsPage.bankOperatorDropdownList, 'Euro');
        await element.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.nonOperationsPage.bankOperatoAmountInpt.locator('input').fill("50");
        await admin.nonOperationsPage.bankOperatorCompanyInpt.click();
        await admin.settingsPage.page.waitForTimeout(1200);
        const element2 = await admin.helper.findVisibleElementWithText(admin.nonOperationsPage.bankOperatorDropdownList, 'Tesla');
        await element2.click();
        await admin.settingsPage.page.waitForTimeout(1300);
        await admin.nonOperationsPage.bankOperatorBankInpt.click();
        await admin.settingsPage.page.waitForTimeout(300);
        const element3 = await admin.helper.findVisibleElementWithText(admin.nonOperationsPage.bankOperatorDropdownList, 'Silicon Valley National Bank');
        await element3.scrollIntoViewIfNeeded();
        await element3.click();
        await admin.nonOperationsPage.bankOperatorCommentInpt.fill("Tesla auto its too expensive");
        const [response] = await Promise.all([
            admin.settingsPage.page.waitForResponse(response => 
              response.url().includes('bank-transfer/deposits') && response.request().method() === 'POST'
            ),
            admin.nonOperationsPage.bankOperatorTopUpBtn.click()
          ]);
          expect(response.status()).toBe(200);
          const responseBody = await response.json();
          expect(responseBody).toMatchObject({
              amount: 49.5,
              fee_abs: 0.5
            });
    });
});