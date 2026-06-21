import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import { testCasesStandartPlus, testCasesStandart } from '../../data/admin/userKyc.js';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const qaUserUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_USER}`;
const otherUsersUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_USERS}`;
const emailQa = 'qa+user1@bitbanker.org';
const historyRow = ['Date', 'Administrator', 'Old status', 'New status', 'Reason'];
const orderRow = ['id', 'Side', 'Pair', 'Amount', 'Price', 'Type', 'Filled', 'Auto amount', 'Market maker', 'Date Create'];
const commissionsRow = ['Pair', 'End date', 'Maker fee', 'Taker fee', 'Actions'];

test.describe(`Check accounts ${emailQa} page with full admin permissions`, {
    tag: ['@admin', '@user']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(qaUserUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test(`Check info ${emailQa} and available tabs`, async ()=> {
        await admin.settingsPage.page.waitForTimeout(10000);
        await expect.soft(admin.page.locator('.flex.flex-col.gap-10.mb-10')).toHaveScreenshot('user885-first.png', {
          fullPage: true,
        });
        await expect.soft(admin.page.locator('div.row.section')).toHaveScreenshot('user885-full.png', {
          mask: [admin.page.locator('tbody'), admin.page.locator("input[placeholder='Period']")]
        });
    });

    test(`Check operations of ${emailQa} and some filter tests of ledger`, async ()=> {
      await admin.helper.loaded();
      await admin.page.keyboard.press('Space');
      await expect.soft(admin.operationsPage.allOpeartionsInput).toBeVisible();
      await expect.soft(admin.operationsPage.allStatusesInput).toBeVisible();
      await expect.soft(admin.operationsPage.quoteCurInpt).toBeVisible();
      await expect.soft(admin.operationsPage.transactionInpt).toBeVisible();
      await expect.soft(admin.operationsPage.orderInpt).toBeVisible(); 

      await admin.settingsPage.page.waitForTimeout(1500);
      const userColumn = await admin.helper.checkOneValueForColumn(admin.operationsPage.tableUserColumn, emailQa);
      expect(userColumn).toBe(true);

      await admin.nonOperationsPage.paginatorBtn20.click();
      await admin.settingsPage.page.waitForTimeout(3000);
      const userColumn20 = await admin.helper.checkOneValueForColumn(admin.operationsPage.tableUserColumn, emailQa);
      expect(userColumn20).toBe(true);

      const operationName = 'Order'
      await admin.operationsPage.clickAndChooseOperation(operationName);
      await admin.operationsPage.allStatusesInput.click();
      await admin.settingsPage.page.waitForTimeout(3000);
      const operationNamePending = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNamePending) {
        expect(operation).toBe(operationName);
      }
    });

    test(`Check the KYC of ${emailQa} and make sure user had the same info in certain fields`, async ()=> {
      await admin.helper.loaded();
      await admin.nonOperationsPage.userAvailableTabsList.getByText('KYC', {exact: true}).click();
      await admin.helper.loaded();
      await admin.nonOperationsPage.page.locator('div').filter({ hasText: /^Стандартный KYC$/ }).click();
      await admin.helper.loaded();
      await expect.soft(admin.nonOperationsPage.userKycName).toBeVisible();
      expect.soft(admin.nonOperationsPage.userKycLastName).toBeVisible();
      expect.soft(admin.nonOperationsPage.userKycDate).toHaveValue("1994-02-05")
      expect.soft(admin.nonOperationsPage.userKycResidence).toHaveValue("RUS")
      expect.soft(admin.nonOperationsPage.userKycDeclineBtn).toBeEnabled();
      expect.soft(admin.nonOperationsPage.userKycUpdateAppBtn).toBeEnabled();
      await admin.settingsPage.page.waitForTimeout(3000);
      const historyTable = await admin.helper.checkTableHeaders(admin.nonOperationsPage.headers, historyRow);
      expect(historyTable).toBe(true);

      const shouldBeAdmin = await admin.nonOperationsPage.userKycHistoryAdmin.nth(0).textContent();
      expect.soft(shouldBeAdmin).toEqual('4090 Super (loveandpeace1331+bb22@gmail.com) ')
    });

    test(`Check the KYC PLUS of ${emailQa}`, async ()=> {
      await admin.helper.loaded();
      await admin.nonOperationsPage.userAvailableTabsList.getByText('KYC', {exact: true}).click();
      await admin.helper.loaded();
      await admin.nonOperationsPage.page.locator('div').filter({ hasText: /^Стандартный PLUS KYC$/ }).click();
      await admin.helper.loaded();
      expect.soft(admin.nonOperationsPage.userKycApptoveBtn).toBeEnabled();
      expect.soft(admin.nonOperationsPage.userKycApptoveBtn).toBeVisible();
      await admin.settingsPage.page.waitForTimeout(3000);
      const historyTable = await admin.helper.checkTableHeaders(admin.nonOperationsPage.headers, historyRow);
      expect(historyTable).toBe(true);
    });

    test(`Check the Orders of ${emailQa}`, async ()=> {
      await admin.helper.loaded();
      await admin.nonOperationsPage.userAvailableTabsList.getByText('Orders', {exact: true}).click();
      await admin.helper.loaded();

      const ordersTable = await admin.helper.checkTableHeaders(admin.nonOperationsPage.headers, orderRow);
      expect(ordersTable).toBe(true);
    });
  });

test.describe.serial(`Check the Commissions of ${emailQa}`, {
  tag: ['@admin', '@user']
},() => {
test.use({ storageState: authFilePath });
test.beforeEach(async ({ page }) => {
    admin = new AdminPomManager(page);
    await admin.loginPage.goto(qaUserUrl);
    await admin.settingsPage.page.waitForTimeout(5000);
  });

test(`Install new fees of ${emailQa}`, async ()=> {
  let responseData = [];
  admin.settingsPage.page.on('response', (response) => {
    if (response.url().includes('admin/markets?domain=app.dev.bitbanker.org') && response.status() === 200) {
      response.json().then((data) => {
        responseData = data;
      });
    }
  });
  await admin.helper.loaded();
  await admin.nonOperationsPage.userAvailableTabsList.getByText('Commissions', {exact: true}).click();
  await admin.helper.loaded();
  const activeMarkets = responseData
    .filter(market => market.is_active)
    .map(market => market.name);
  const commissionsTable = await admin.helper.checkTableHeaders(admin.nonOperationsPage.headers, commissionsRow);
  expect(commissionsTable).toBe(true);
  const tablePairs = await admin.nonOperationsPage.commissionsPairColumn.allTextContents();
  activeMarkets.forEach(activeMarket => {
  expect(tablePairs).toContain(activeMarket);
  });

  await admin.nonOperationsPage.commissionsPairFirstPeriod.click();
  await admin.settingsPage.page.waitForTimeout(300);
  await admin.nonOperationsPage.createToday.click();
  await admin.nonOperationsPage.commissionsConfirmPeriodBtn.click();
  await admin.nonOperationsPage.commissionsPairFirstMakerFee.fill('');
  await admin.nonOperationsPage.commissionsPairFirstMakerFee.fill('0.35');
  await admin.nonOperationsPage.commissionsPairFirstTakerFee.fill('');
  await admin.nonOperationsPage.commissionsPairFirstTakerFee.fill('0.75');
  await admin.nonOperationsPage.commissionsPairFirstSaveBtn.click();
  await admin.settingsPage.page.waitForTimeout(3000);
  await admin.page.reload();
  await admin.helper.loaded();
  await admin.nonOperationsPage.userAvailableTabsList.getByText('Commissions', {exact: true}).click();
  await admin.helper.loaded();
  await admin.settingsPage.page.waitForTimeout(3000);
  const makerFee = await admin.nonOperationsPage.commissionsPairFirstMakerFee.inputValue()
  const takerFee = await admin.nonOperationsPage.commissionsPairFirstTakerFee.inputValue()
  expect.soft(makerFee).toEqual('0.35');
  expect.soft(takerFee).toEqual('0.75');
});

test(`Reset fees of ${emailQa}`, async ()=> {
  await admin.helper.loaded();
  await admin.nonOperationsPage.userAvailableTabsList.getByText('Commissions', {exact: true}).click();
  await admin.helper.loaded();
  await admin.nonOperationsPage.commissionsPairFirstResetBtn.click();
  await admin.settingsPage.page.waitForTimeout(3000);
  await admin.page.reload();
  await admin.helper.loaded();
  await admin.nonOperationsPage.userAvailableTabsList.getByText('Commissions', {exact: true}).click();
  await admin.helper.loaded();
  const makerFee = await admin.nonOperationsPage.commissionsPairFirstMakerFee.inputValue()
  const takerFee = await admin.nonOperationsPage.commissionsPairFirstTakerFee.inputValue()
  expect.soft(makerFee).toEqual('0.1');
  expect.soft(takerFee).toEqual('0.15');
});
});

test.describe("Different users doesnot have errors in kyc subpage", {
  tag: ['@admin', '@user']
},() => {
  test.use({ storageState: authFilePath });
  test.beforeEach(async ({ page }) => {
  admin = new AdminPomManager(page);
});
  testCasesStandart.forEach(({ id, user_id, first_name, last_name, email, status, documents }) => {
  test(`User ${user_id} has expected attributes in KYC standart subpage`, async ({ page }) => {
    await admin.loginPage.goto(`${otherUsersUrl}/${user_id}/kyc`);
    await admin.settingsPage.page.waitForTimeout(3000);
    const [responseKYC] = await Promise.all([
          admin.nonOperationsPage.page.waitForResponse(response => 
            response.url().includes('admin/kyc/sumsub/applications/') && response.request().method() === 'GET'
            ),
            admin.nonOperationsPage.page.locator('div').filter({ hasText: /^Стандартный KYC$/ }).click()
            ]);
            expect(responseKYC.status()).toBe(200);
            const responseKYCResult = await responseKYC.json();
            expect(responseKYCResult).toMatchObject({
              id,
              user_id,
              first_name,
              last_name,
              email,
              status,
              documents
            });
        const element = await admin.nonOperationsPage.screenshotKYC;
        await element.scrollIntoViewIfNeeded();
        await admin.nonOperationsPage.page.waitForTimeout(7000);
        await expect(element).toHaveScreenshot(`user-${user_id}-kyc.png`);
    });
});

  testCasesStandartPlus.forEach(({ id, user_id, first_name, last_name, email, status, documents }) => {
  test(`User ${user_id} has expected attributes in KYC standart plus subpage`, async ({ page }) => {
  await admin.loginPage.goto(`${otherUsersUrl}/${user_id}/kyc`);
  await admin.settingsPage.page.waitForTimeout(3000);
  // await admin.nonOperationsPage.userAvailableTabsList.getByText('KYC', {exact: true}).click();
  const [responseKYC] = await Promise.all([
        admin.nonOperationsPage.page.waitForResponse(response => 
          response.url().includes('admin/kyc/sumsub/applications/') && response.request().method() === 'GET'
          ),
          admin.nonOperationsPage.page.locator('div').filter({ hasText: /^Стандартный PLUS KYC$/ }).click()
          ]);
          expect(responseKYC.status()).toBe(200);
          const responseKYCResult = await responseKYC.json();
          expect(responseKYCResult).toMatchObject({
            id,
            user_id,
            first_name,
            last_name,
            email,
            status,
            documents
          });
    });
  });
});