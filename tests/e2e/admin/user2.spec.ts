import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const qaUserUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_USER}`;
const email = 'qa+user1@bitbanker.org';
const invoiceRow = ['No', 'To', 'Amount', 'Payment link', 'Received', 'Status'];
const currentAdresses = ['bc1q75ucz44d6s78nzt55vccmec26pst82mkadnlgk', '0xeE3d97C2f11FBdc465f6df434b772f2FA4241317', 
'TGUBBXLRYrExZ1yvg4vWcvWwr6Gm54o4tu', 'cosmos1hgycd9q0em0wavve89w5kt953xr5y2r69xmudn'];
const deviceRow = ['Authorized', 'IP address', 'Device name'];

test.describe(`Check accounts ${email} page with full admin permissions. Part 2`, {
    tag: ['@admin', '@user']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(qaUserUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test(`Check invoices of ${email}`, async ({context})=> {
        await admin.helper.loaded();
        await admin.nonOperationsPage.userAvailableTabsList.getByText('Invoices', {exact: true}).click();
        await admin.helper.loaded();
        const invoiceTable = await admin.helper.checkTableHeaders(admin.nonOperationsPage.headers, invoiceRow);
        expect(invoiceTable).toBe(true);
        const userCount = await admin.nonOperationsPage.invoiceTocolumn.count()
        expect(userCount).toEqual(10);
        const userColumn = await admin.helper.checkOneValueForColumn(admin.nonOperationsPage.invoiceTocolumn , 'Mr QA Bitbanker');
        expect(userColumn).toBe(true);

        const firstInvoiceUrl = admin.nonOperationsPage.invoiceFirstPaymentLink;
        const [newPage] = await Promise.all([
          context.waitForEvent('page'), 
          firstInvoiceUrl.click() 
        ]);
        await admin.nonOperationsPage.page.waitForTimeout(2000);
        await expect.soft(newPage).toHaveURL(/bitbanker\.org\/acquiring\/invoice/);
        await newPage.close();
    });

    test(`Check addresses of ${email}`, async ()=> {
        await admin.nonOperationsPage.userAvailableTabsList.getByText('Addresses', {exact: true}).click();
        await admin.settingsPage.page.waitForTimeout(5000);
        expect.soft(admin.nonOperationsPage.addressNetworkDropdown).not.toBeVisible(); //only super-admin has access to change it
        expect.soft(admin.nonOperationsPage.addressUpdateAllBtn).not.toBeVisible(); //only super-admin has access to change it
        expect.soft(admin.nonOperationsPage.addressUpdateActiveBtn).not.toBeVisible(); //only super-admin has access to change it
        const addressTable = await admin.helper.checkTableHeaders(admin.nonOperationsPage.addressCurrentOne, currentAdresses);
        expect(addressTable).toBe(true);
    });

    test(`Check Loans and Deposits of ${email}`, async ()=> {
        await admin.nonOperationsPage.userAvailableTabsList.getByText('Loans', {exact: true}).click();
        await admin.settingsPage.page.waitForTimeout(3000);
        expect.soft(admin.nonOperationsPage.loansNoDate).toHaveText('No data');

        await admin.nonOperationsPage.userAvailableTabsList.getByText('Deposits', {exact: true}).click();
        await admin.settingsPage.page.waitForTimeout(3000);

        const depCount = await admin.nonOperationsPage.depositsStatus.count()
        expect.soft(depCount).toEqual(10);
    });

    test(`Check Devices of ${email}`, async ()=> {
        await admin.nonOperationsPage.userAvailableTabsList.getByText('Devices', {exact: true}).click();
        await admin.settingsPage.page.waitForTimeout(3000);

        const deviceTable = await admin.helper.checkTableHeaders(admin.nonOperationsPage.headers, deviceRow);
        expect.soft(deviceTable).toBe(true);

        const deviceCount = await admin.nonOperationsPage.deviceAuthRowValue.count();
        expect.soft(deviceCount).toBeGreaterThanOrEqual(10);
    });

    test(`Check P2P of ${email}`, async () => {
        await admin.nonOperationsPage.userAvailableTabsList.getByText('P2P', { exact: true }).click();
        await admin.settingsPage.page.waitForTimeout(3000);
        const isChecked = await admin.nonOperationsPage.p2pTogglIcon.isChecked();
    
        if (!isChecked) {
            expect.soft(admin.nonOperationsPage.p2pTogglIcon).not.toBeChecked();
            await admin.nonOperationsPage.p2pTogglIcon.click({ force: true });
            await admin.settingsPage.page.waitForTimeout(300);
            expect.soft(admin.nonOperationsPage.p2pTogglIcon).toBeChecked();
            await admin.nonOperationsPage.p2pTogglIcon.click({ force: true });
            await admin.settingsPage.page.waitForTimeout(300);
            expect.soft(admin.nonOperationsPage.p2pTogglIcon).not.toBeChecked();
        } else {
            expect.soft(admin.nonOperationsPage.p2pTogglIcon).toBeChecked();
            await admin.nonOperationsPage.p2pTogglIcon.click({ force: true });
            await admin.settingsPage.page.waitForTimeout(300);
            expect.soft(admin.nonOperationsPage.p2pTogglIcon).not.toBeChecked();
        }
    });

    test(`Check Registration source of ${email}`, async () => {
        await admin.nonOperationsPage.userAvailableTabsList.getByText('Registration source', { exact: true }).click();
        await admin.settingsPage.page.waitForTimeout(3000);
        const txtContent = await admin.nonOperationsPage.regSourceTitle;
        expect(txtContent).toContainText('https://app.dev.bitbanker.org/')
    });

    test(`Full admin can change SWIFT withdrawal fees of user ${email}`, async () => {
        await admin.settingsPage.page.waitForTimeout(4000);
        await admin.nonOperationsPage.userAvailableTabsList.getByText('SWIFT', { exact: true }).click();
        await admin.settingsPage.page.waitForTimeout(4000);
        await admin.page.keyboard.press('Space');
        await admin.nonOperationsPage.swiftUsdk10KPercent.fill('');
        await admin.nonOperationsPage.swiftUsdk10KPercent.fill('5');
        await admin.nonOperationsPage.swiftUsdk100KFix.fill('');
        await admin.nonOperationsPage.swiftUsdk100KFix.fill('3');
        await admin.nonOperationsPage.swiftFirstSaveBtn.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.nonOperationsPage.userAvailableTabsList.getByText('P2P', { exact: true }).click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.nonOperationsPage.userAvailableTabsList.getByText('SWIFT', { exact: true }).click();
        await admin.settingsPage.page.waitForTimeout(4000);

        expect.soft(admin.nonOperationsPage.swiftUsdk10KPercent).toHaveValue('5');
        expect.soft(admin.nonOperationsPage.swiftUsdk100KFix).toHaveValue('3');

        await admin.nonOperationsPage.swiftFirstResetBtn.click();
        await admin.settingsPage.page.waitForTimeout(2000);
        await admin.nonOperationsPage.userAvailableTabsList.getByText('P2P', { exact: true }).click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.nonOperationsPage.userAvailableTabsList.getByText('SWIFT', { exact: true }).click();
        await admin.settingsPage.page.waitForTimeout(4000);

        expect.soft(admin.nonOperationsPage.swiftUsdk10KPercent).toHaveValue('2');
        expect.soft(admin.nonOperationsPage.swiftUsdk100KFix).toHaveValue('0');
    });
    
});