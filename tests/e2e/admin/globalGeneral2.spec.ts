import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/SuperLoginAuth.json');
let admin;
const p2pUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.GLOBAL_P2P}`;
const sbpUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.GLOBAL_SBP}`;
const logUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.GLOBAL_LOG}`;
const walletUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.GLOBAL_WALLET}`;
const tableColumnNames = ['First name', 'Country', 'Currency', 'Translation key', 'Is active', 'Action'];
const sbpColumnNames = ['First name',  'Currency', 'Minimum amount', 'Maximum amount', 'Action'];
const networkList = ['Cosmos', 'Avalanche C-Chain', 'BNB Smart Chain (BEP20)', 'Bitcoin', 'Ethereum (ERC20)', 'Ton', 'Tron (TRC20)'];
const changeHistory = ['Date', 'Network', 'Operator', 'Scope (All / Active)'];

test.describe('Global => Settings.P2P', {
    tag: ['@super-admin', '@settings', '@global']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(p2pUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test("P2P banks return in all web elements and data what it should", async ()=> {
        await admin.helper.loaded();
        expect.soft(admin.settingsPage.globalP2pAddBankBtn).toBeVisible();
        expect.soft(admin.settingsPage.globalP2pEditBtn.first()).toBeVisible();
        expect.soft(admin.settingsPage.globalP2pActivateBtn.first()).toBeVisible();
        expect.soft(admin.settingsPage.globalP2pDeactivateBtn.first()).toBeVisible();
        const result = await admin.helper.checkTableHeaders(admin.settingsPage.tableColimnName, tableColumnNames);
        expect(result).toBe(true);
    });

    test("Super admin can add P2P bank", async ()=> {
        function generateRandomPlaywright() {
            const today = new Date(); 
            const seed = today.getTime();
            const randomNum = Math.abs(Math.sin(seed) * 100000); 
            const firstThreeDigits = Math.floor(randomNum).toString().slice(0, 6); 
            return `Playwright${firstThreeDigits}`;
          }
        await admin.helper.loaded();
        await admin.settingsPage.globalP2pAddBankBtn.click();
        await admin.settingsPage.globalP2pModalCountryInpt.click();
        await admin.settingsPage.globalP2pModalRussia.click();
        let bankName = generateRandomPlaywright();
        await admin.settingsPage.globalP2pModalBankNameInpt.fill(bankName);
        await admin.settingsPage.globalP2pModalKeyInpt.fill(bankName);

        const [responseKirgizKYC] = await Promise.all([
            admin.settingsPage.page.waitForResponse(response => 
              response.url().includes('p2p/banks') && response.request().method() === 'POST'
            ),
            admin.settingsPage.globalP2pModalSaveBtn.click()
          ]);
        expect(responseKirgizKYC.status()).toBe(200);
        const responseKirgizKYCresult = await responseKirgizKYC.json();
        expect( responseKirgizKYCresult).toMatchObject({
            country_name: "Россия",
            name: bankName,
            iname: bankName,
            currency_name: "Ruble Coin",
            is_active: true
        });
        await admin.settingsPage.page.waitForTimeout(2000);
    });

    test("Super admin can activate & deactivate the Bank", async ()=> {
        await admin.helper.loaded();
        await admin.settingsPage.globalP2pActivateBtn.first().click();
        await admin.settingsPage.page.waitForTimeout(500);
        const [responseActivate] = await Promise.all([
          admin.settingsPage.page.waitForResponse(response => 
            response.url().includes('p2p/banks') && response.request().method() === 'PATCH'
          ),
          admin.settingsPage.globalActivteBtn.click()
        ]);
      expect(responseActivate.status()).toBe(200);
      const responseActivateResult = await responseActivate.json();
      expect(responseActivateResult).toMatchObject({
          is_active: true
      });
      await admin.settingsPage.page.waitForTimeout(2000);

      await admin.settingsPage.globalP2pDeactivateBtn.last().click();
      await admin.settingsPage.page.waitForTimeout(500);
        const [responseDeactivate] = await Promise.all([
          admin.settingsPage.page.waitForResponse(response => 
            response.url().includes('p2p/banks') && response.request().method() === 'PATCH'
          ),
          admin.settingsPage.globalDeactibateActivteBtn.click()
        ]);
      expect(responseDeactivate.status()).toBe(200);
      const responseDeactivateResult = await responseDeactivate.json();
      expect(responseDeactivateResult).toMatchObject({
          is_active: false
      });
      await admin.settingsPage.page.waitForTimeout(2000);  
    });

    test("Super admin can edit the bank", async ()=> {
      await admin.helper.loaded();
      await admin.settingsPage.globalP2pEditBtn.first().click();
      await admin.settingsPage.page.waitForTimeout(200); 
      const [request, response] = await Promise.all([
        admin.settingsPage.page.waitForRequest(request =>
          request.url().includes('p2p/banks') && request.method() === 'PATCH'
        ),
        admin.settingsPage.page.waitForResponse(response =>
          response.url().includes('p2p/banks') && response.request().method() === 'PATCH'
        ),
        admin.settingsPage.globalP2pModalSaveBtn.click(),
      ]);
      expect(response.status()).toBe(200);
      const requestBody = JSON.parse(request.postData() || '{}');
      const responseBody = await response.json();
      const sharedFields = Object.keys(requestBody).reduce((acc, key) => {
        if (responseBody.hasOwnProperty(key)) {
          acc[key] = requestBody[key];
        }
        return acc;
      }, {});
      expect(responseBody).toMatchObject(sharedFields);
      await admin.settingsPage.page.waitForTimeout(2000); 
    });
});


test.describe.serial('Global => Settings.Wallet', {
  tag: ['@super-admin', '@settings', '@global']
  },() => {
  test.use({ storageState: authFilePath });
  test.beforeEach(async ({ page }) => {
    admin = new AdminPomManager(page);
    await admin.loginPage.goto(sbpUrl);
  });

  test("Get all fields and elements on SBP banks page", async ()=> {
    const expectedData = {
  "items": [
    {
      "min_limit": 100,
      "max_limit": 10000,
      "bank_id": 154,
      "name": "Vyatichi",
      "currency_id": 13,
      "currency_symbol": "RUBR"
    },
    {
      "min_limit": 1,
      "max_limit": 1000000,
      "bank_id": 176,
      "name": "Pay2me",
      "currency_id": 13,
      "currency_symbol": "RUBR"
    },
    {
      "min_limit": 200,
      "max_limit": 20000,
      "bank_id": 17,
      "name": "Agora",
      "currency_id": 13,
      "currency_symbol": "RUBR"
    }
  ]
};
    let responseData = [];
    admin.settingsPage.page.on('response', (response) => {
      if (response.url().includes('admin/sbp/banks?page=1&per_page=10') && response.status() === 200) {
        response.json().then((data) => {
          responseData = data;
        });
      }
    });
      await admin.helper.loaded();
      await expect(responseData).toMatchObject(expectedData);
      expect.soft(admin.settingsPage.page.getByRole('button', { name: 'Limits' }).first()).toBeVisible();
      const result = await admin.helper.checkTableHeaders(admin.settingsPage.tableColimnName, sbpColumnNames);
      expect(result).toBe(true);
    });

    test("Update the min-max values for Agora bank, return for original state", async ()=> {
      await admin.settingsPage.page.getByRole('button', { name: 'Limits' }).first().click();
      await admin.settingsPage.page.getByRole('textbox').first().fill('');
      await admin.settingsPage.page.getByRole('textbox').first().fill('200');
      await admin.settingsPage.page.getByRole('textbox').nth(1).fill('');
      await admin.settingsPage.page.getByRole('textbox').nth(1).fill('20000');
      const [responseAgora] = await Promise.all([
        admin.settingsPage.page.waitForResponse(response => 
          response.url().includes('admin/sbp/banks') && response.request().method() === 'PATCH'
        ),
        admin.settingsPage.page.getByRole('button', { name: 'Update app' }).click()
      ]);
          expect(responseAgora.status()).toBe(200);
          const responseAgoraRes = await responseAgora.json();
          expect(responseAgoraRes).toMatchObject({
            min_limit: 200,
            max_limit: 20000
          });
      await admin.settingsPage.page.waitForTimeout(2000);
      await admin.settingsPage.page.getByRole('button', { name: 'Limits' }).first().click();
      await admin.settingsPage.page.getByRole('textbox').first().fill('');
      await admin.settingsPage.page.getByRole('textbox').first().fill('100');
      await admin.settingsPage.page.getByRole('textbox').nth(1).fill('');
      await admin.settingsPage.page.getByRole('textbox').nth(1).fill('10000');
      const [responseAgoraRollback] = await Promise.all([
        admin.settingsPage.page.waitForResponse(response => 
          response.url().includes('admin/sbp/banks') && response.request().method() === 'PATCH'
        ),
        admin.settingsPage.page.getByRole('button', { name: 'Update app' }).click()
      ]);
        expect(responseAgoraRollback.status()).toBe(200);
        const responseAgoraRoll = await responseAgoraRollback.json();
        expect(responseAgoraRoll ).toMatchObject({
          min_limit: 100,
          max_limit: 10000
      });
    });
});

test.describe('Global => Settings.SBP', {
    tag: ['@super-admin', '@settings', '@global']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(walletUrl);
    });
  
    test("Get all fields and elements on Wallet updates page", async ()=> {
      await expect(admin.settingsPage.page.getByRole('button', { name: 'Update all addresses' })).toBeDisabled();
      await expect(admin.settingsPage.page.getByRole('button', { name: 'Update only active addresses' })).toBeDisabled();

      await admin.settingsPage.globalNetworkInpt.click();
      await admin.settingsPage.page.waitForTimeout(2000);
      const resultGroup = await admin.helper.checkTableHeaders(admin.settingsPage.globalNetworkList, networkList);
      expect(resultGroup).toBe(true);

      await admin.settingsPage.globalNetworkList.filter({hasText: 'Bitcoin'}).click();
      await admin.settingsPage.page.waitForTimeout(500);
      await expect(admin.settingsPage.page.getByRole('button', { name: 'Update all addresses' })).toBeEnabled();
      await expect(admin.settingsPage.page.getByRole('button', { name: 'Update only active addresses' })).toBeEnabled();

      const resultTable = await admin.helper.checkTableHeaders(admin.settingsPage.tableColimnName, changeHistory);
      expect(resultTable).toBe(true);

      const element = await admin.settingsPage.globalNetworkTableColumn.last();
      await element.scrollIntoViewIfNeeded();
      const countOfRecord = await admin.settingsPage.globalNetworkTableColumn.count();
      await expect(countOfRecord).toEqual(10);
    });
});

test.describe('Global => Settings.Logs', {
  tag: ['@super-admin', '@settings', '@global']
},() => {
  test.use({ storageState: authFilePath });
  test.beforeEach(async ({ page }) => {
    admin = new AdminPomManager(page);
    await admin.loginPage.goto(logUrl);
  });

  test("Get results using filter search by user in Settings log page", async ()=> {
    const adminMail = 'qa+fulladmin@bitbanker.org'
    await admin.settingsPage.globalLogEmailInpt.fill(adminMail);
    await admin.settingsPage.page.waitForTimeout(1000);
    await admin.settingsPage.globalSpan.filter({ hasText: adminMail }).click();
    await admin.settingsPage.page.waitForTimeout(3000);
    const result = await admin.helper.checkOneValueForColumn(admin.settingsPage.globalLogAdminList, adminMail);
    expect(result).toBe(true);
    const count = await admin.settingsPage.globalLogAdminList.count();
    expect(count).toEqual(10);
    await admin.nonOperationsPage.paginatorBtn20.click();
    await admin.settingsPage.page.waitForTimeout(4000);
    const count20 = await admin.settingsPage.globalLogAdminList.count();
    expect(count20).toEqual(20);
  });

  test("Get results using WL filter in Settings log page", async ()=> {
    await admin.settingsPage.page.waitForTimeout(3000);
    await admin.settingsPage.globalLogWlInpt.click();
    await admin.settingsPage.page.waitForTimeout(1000);
    await admin.settingsPage.globalSpan.filter({ hasText: 'Test-dev-wl' }).click();
    await admin.settingsPage.page.waitForTimeout(3000);
    const resultTestWl = await admin.helper.checkOneValueForColumn(admin.settingsPage.globalLogWlList, 'test-wl.dev.bitbanker.org');
    expect(resultTestWl).toBe(true);

    await admin.settingsPage.globalLogWlInpt.click();
    await admin.settingsPage.page.waitForTimeout(1000);
    await admin.settingsPage.globalSpan.filter({ hasText: 'Bitbanker' }).nth(1).click();
    await admin.settingsPage.page.waitForTimeout(3000);
    const resultBBwl = await admin.helper.checkOneValueForColumn(admin.settingsPage.globalLogWlList, 'app.dev.bitbanker.org');
    expect(resultBBwl).toBe(true);
  });
});