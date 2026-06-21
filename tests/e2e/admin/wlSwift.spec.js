import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const swiftUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_SWIFT}`;
const headersRow = [ "Transfer", "Amount to be sent via SWIFT", "Transfer to agent", "Bank", "Sole proprietorship (SP)", "Transaction status", "Attach SWIFT",
                "Fee", "Sent to agent"];
const modalValues = [ "Intermediary bank name", "Intermediary bank SWIFT", "Recipient address", 
  "Recipient bank address", "Recipient bank city", "Recipient bank country", "Recipient bank name", 
  "Recipient bank SWIFT", "Recipient city", "Recipient country", "Recipient IBAN", "Recipient name", 
  "Transfer amount", "Transfer currency"
]

test.describe('Check WL SWIFT page', {
    tag: ['@admin', '@swift']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(swiftUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test("Check visibility of web elements in SWIFT page", async ()=> {
        await admin.helper.loaded();
        await expect.soft(admin.operationsPage.statusInput).toBeVisible();
        await expect.soft(admin.operationsPage.swiftSortInpt).toBeVisible();
        const result = await admin.helper.checkTableHeaders(admin.operationsPage.headers, headersRow);
        expect(result).toBe(true);
    });

    test("Status filter should return correct statuses per page", async ()=> {
        await admin.helper.loaded();
        await admin.operationsPage.statusInput.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.clickRightOne(admin.operationsPage.visaStatusDropdwn, 'Pending');
        await admin.settingsPage.page.waitForTimeout(2000);
        const resultCompleted = await admin.helper.checkOneValueForColumn(admin.operationsPage.swiftTransStatusValue, 'Pending');
        expect(resultCompleted).toBe(true);

        await admin.operationsPage.statusInput.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.clickRightOne(admin.operationsPage.visaStatusDropdwn, 'Edits required');
        await admin.settingsPage.page.waitForTimeout(2000);
        const resultEdits = await admin.helper.checkOneValueForColumn(admin.operationsPage.swiftTransStatusValue, 'Edits required');
        expect(resultEdits).toBe(true);

        await admin.operationsPage.statusInput.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.clickRightOne(admin.operationsPage.visaStatusDropdwn, 'Sent to bank');
        await admin.settingsPage.page.waitForTimeout(2000);
        const resultSent = await admin.helper.checkOneValueForColumn(admin.operationsPage.swiftTransStatusValue, 'Sent to bank');
        expect(resultSent).toBe(true);

        await admin.operationsPage.statusInput.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.clickRightOne(admin.operationsPage.visaStatusDropdwn, 'SWIFT sent');
        await admin.settingsPage.page.waitForTimeout(2000);
        const resultSWIFT = await admin.helper.checkOneValueForColumn(admin.operationsPage.swiftTransStatusValue, 'SWIFT sent');
        expect(resultSWIFT).toBe(true);

        await admin.operationsPage.statusInput.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.clickRightOne(admin.operationsPage.visaStatusDropdwn, 'Completed');
        await admin.settingsPage.page.waitForTimeout(2000);
        const resultComplet = await admin.helper.checkOneValueForColumn(admin.operationsPage.swiftTransStatusValue, 'Completed');
        expect(resultComplet).toBe(true);

        await admin.operationsPage.statusInput.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.clickRightOne(admin.operationsPage.visaStatusDropdwn, 'Canceled');
        await admin.settingsPage.page.waitForTimeout(2500);
        const resultCancel = await admin.helper.checkOneValueForColumn(admin.operationsPage.swiftTransStatusValue, 'Canceled');
        expect(resultCancel).toBe(true);
    });

    test("Sort filter should return records (will fall, cause bag /t/8696c03mp)", async ()=> {
        await admin.helper.loaded();
        await admin.operationsPage.swiftSortInpt.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.clickRightOne(admin.operationsPage.visaStatusDropdwn, 'Creation date');
        await admin.settingsPage.page.waitForTimeout(1500);
        const count1 = await admin.operationsPage.swiftTransStatusValue.count(); 
        expect(count1).toBe(10);

        await admin.operationsPage.swiftSortInpt.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.operationsPage.clickRightOne(admin.operationsPage.visaStatusDropdwn, 'Last modified');
        await admin.settingsPage.page.waitForTimeout(1500);
        const count2 = await admin.operationsPage.swiftTransStatusValue.count(); 
        expect(count2).toBe(10);
    });

    test("Check filters, IP and bank details of the one Pending record", async ()=> {
        await admin.helper.loaded();
        await admin.operationsPage.clickRightOne(admin.operationsPage.swiftTransStatusValue, 'Pending');
        await admin.settingsPage.page.waitForTimeout(100); 
        await admin.operationsPage.chooseRightOne(admin.operationsPage.visaStatusDropdwn, 'Pending');
        await admin.operationsPage.chooseRightOne(admin.operationsPage.visaStatusDropdwn, 'Edits required');
        await admin.operationsPage.chooseRightOne(admin.operationsPage.visaStatusDropdwn, 'Sent to bank');
        await admin.operationsPage.chooseRightOne(admin.operationsPage.visaStatusDropdwn, 'SWIFT sent');
        await admin.operationsPage.chooseRightOne(admin.operationsPage.visaStatusDropdwn, 'Completed');
        await admin.operationsPage.chooseRightOne(admin.operationsPage.visaStatusDropdwn, 'Canceled');

        await admin.operationsPage.swiftBanktDetailsText.first().click();
        await admin.settingsPage.page.waitForTimeout(1500); 
        await expect.soft(admin.operationsPage.swiftModalBtnCsv).toBeVisible();
        await expect.soft(admin.operationsPage.swiftModalBtnPdf).toBeVisible();
        const resultModal = await admin.helper.checkTableHeaders(admin.operationsPage.swiftModalNameColumnValue, modalValues);
        expect(resultModal).toBe(true);
    });
});