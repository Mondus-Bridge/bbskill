import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/SuperLoginAuth.json');
let admin;
const rolesUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.GLOBAL_ROLES}`;
const addRoleUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.GLOBAL_ADD_ROLES}`;
const noAdminUser = 'qa+user1@bitbanker.org';
const testAdmin = 'qa+autotestsapmle@bitbanker.org';
const persistentAdmin = 'loveandpeace1331+bb22@gmail.com';

test.describe('Global => Administrators filter', {
    tag: ['@roles', '@global', '@super-admin']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(rolesUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test("Super-admin can use Email filter to filter the list of users", async ()=> {
        await admin.helper.loaded();
        const [response] = await Promise.all([
            admin.settingsPage.page.waitForResponse(response => 
              response.url().includes('users/admin') && response.request().method() === 'GET'
            ),
            admin.nonOperationsPage.rolesEmailInpt.fill(noAdminUser)
          ]);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toMatchObject({
            items: [],
            count: 0
        });
        await admin.settingsPage.page.waitForTimeout(3000);
        await admin.nonOperationsPage.rolesEmailInpt.fill('');
        await admin.settingsPage.page.waitForTimeout(1000);
        await admin.nonOperationsPage.rolesEmailInpt.fill(persistentAdmin);
        await admin.settingsPage.page.waitForTimeout(3000);
        const nickValue = await admin.nonOperationsPage.rolesUserNickValue.textContent();
        const emailValue = await admin.nonOperationsPage.rolesUserEmailValue.textContent();
        const count = await admin.nonOperationsPage.rolesUserColumnValue.count();
        expect.soft(nickValue).toEqual('4090 Super');
        expect.soft(emailValue).toEqual('loveandpeace1331+bb22@gmail.com');
        expect.soft(count).toEqual(1);
    });

    test("Super-admin can use All White Labels filter to filter the list of users", async ()=> {
        test.setTimeout(40000);
        await admin.helper.loaded();
        expect.soft(admin.nonOperationsPage.rolesUserColumnValue.first()).toBeVisible();
        const countTen = await admin.nonOperationsPage.rolesUserColumnValue.count();
        expect.soft(countTen).toEqual(10);

        await admin.nonOperationsPage.rolesWLfilterInpt.click();
        const element = await admin.helper.findVisibleElementWithText(admin.nonOperationsPage.rolesWlList, 'crpto');
        const [responseRoyal] = await Promise.all([
            admin.settingsPage.page.waitForResponse(response => 
              response.url().includes('users/admin') && response.request().method() === 'GET'
            ),
            element.click()
          ]);
        expect(responseRoyal.status()).toBe(200);
        const responseRoyalBody = await responseRoyal.json();
        expect(responseRoyalBody).toMatchObject({"items": [{"id": 1020, "email": "ab003sko@yandex.ru", "first_name": null, "last_name": null, "is_super_admin": false, "is_kgz_admin": false, "wl_short_name": "crpto", "roles": [{"id": 58, "name": "WL Owner"}]}, {"id": 1024, "email": "dina+crpto1@bitbanker.org", "first_name": null, "last_name": null, "is_super_admin": false, "is_kgz_admin": false, "wl_short_name": "crpto", "roles": [{"id": 58, "name": "WL Owner"}]}, {"id": 1025, "email": "resq.maria@gmail.com", "first_name": null, "last_name": null, "is_super_admin": false, "is_kgz_admin": false, "wl_short_name": "crpto", "roles": [{"id": 3, "name": "Админ/Доступ ко всему"}]}], "page": 1, "count": 3, "per_page": 10});

        await admin.nonOperationsPage.rolesWLfilterInpt.click();
        const elementTest = await admin.helper.findVisibleElementWithText(admin.nonOperationsPage.rolesWlList, 'Test-dev-wl');
        await elementTest.click();
        await admin.settingsPage.page.waitForTimeout(3000);
        const countTest = await admin.nonOperationsPage.rolesUserColumnValue.count();
        expect.soft(countTest).toEqual(10);
        const wlValue = await admin.helper.checkOneValueForColumn(admin.nonOperationsPage.wlColumnValues, 'ЭПР');
        expect(wlValue).toBe(true);

        await admin.nonOperationsPage.rolesWLfilterInpt.click();
        const elementBB = await admin.helper.findVisibleElementWithText(admin.nonOperationsPage.rolesWlList, 'Bitbanker');
        await elementBB.click();
        await admin.settingsPage.page.waitForTimeout(3000);
        const countBB = await admin.nonOperationsPage.rolesUserColumnValue.count();
        expect.soft(countBB).toEqual(10);
        const wlBBValue = await admin.helper.checkOneValueForColumn(admin.nonOperationsPage.wlColumnValues, 'Bitbanker');
        expect(wlBBValue).toBe(true);
        await admin.nonOperationsPage.paginatorBtn20.click();
        await admin.settingsPage.page.waitForTimeout(3000);
        const countBB20 = await admin.nonOperationsPage.rolesUserColumnValue.count();
        expect.soft(countBB20).toEqual(20);
        await admin.nonOperationsPage.paginatorBtn20.click();
        await admin.settingsPage.page.waitForTimeout(3000);
        const countBB202 = await admin.nonOperationsPage.rolesUserColumnValue.count();
        expect.soft(countBB202).toEqual(20);
    });
});

test.describe.serial('Global => Administrators edit', {
    tag: ['@roles', '@global', '@super-admin']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(rolesUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test("Super-admin can add new admin", async ()=> {
        await admin.helper.loaded();
        await admin.nonOperationsPage.addAdmin.click();
        await admin.nonOperationsPage.addAdminEnterAdminEmail.fill(testAdmin);
        await admin.settingsPage.page.waitForTimeout(5000);
        const emailFound = await admin.helper.findVisibleElementWithText(admin.nonOperationsPage.rolesWlList, testAdmin);
        await emailFound.click();
        await admin.settingsPage.page.waitForTimeout(1000);
        const adminRolesCount = await admin.nonOperationsPage.adminModalRolesList.count();
        expect.soft(adminRolesCount).toBeGreaterThanOrEqual(30);
        await admin.nonOperationsPage.adminModalRolesList.nth(2).click();
        await admin.nonOperationsPage.adminModalRolesList.nth(4).click();
        const [responseAddAdmin] = await Promise.all([
            admin.settingsPage.page.waitForResponse(response => 
              response.url().includes('users/admin') && response.request().method() === 'POST'
            ),
            admin.nonOperationsPage.adminSaveBtn.click()
          ]);
        expect(responseAddAdmin.status()).toBe(200);
        const responseAddAdminBody = await responseAddAdmin.json();
        expect(responseAddAdminBody).toMatchObject({
            result: "success"
        });
        await admin.settingsPage.page.waitForTimeout(2000);
    });

    test("Super-admin can edit admin role and delete him", async ()=> {
        await admin.helper.loaded();
        await admin.nonOperationsPage.rolesEmailInpt.fill(testAdmin);
        await admin.settingsPage.page.waitForTimeout(3000);
        await admin.nonOperationsPage.adminEditBtn.click();
        await admin.settingsPage.page.waitForTimeout(1000);
        await admin.nonOperationsPage.adminModalRolesList.nth(2).click();
        await admin.nonOperationsPage.adminModalRolesList.nth(4).click();
        await admin.nonOperationsPage.adminSaveBtn.click();
        await admin.settingsPage.page.waitForTimeout(3000);

        await admin.nonOperationsPage.adminDeleteBtn.click();
        await admin.settingsPage.page.waitForTimeout(500);
        const [responseDeleteAdmin] = await Promise.all([
            admin.settingsPage.page.waitForResponse(response => 
              response.url().includes('users/admin') && response.request().method() === 'DELETE'
            ),
            admin.nonOperationsPage.adminDeleteModalBtn.click()
          ]);
        expect(responseDeleteAdmin.status()).toBe(200);
        const responseDeleteAdminBody = await responseDeleteAdmin.json();
        expect(responseDeleteAdminBody).toMatchObject({
            result: "success"
        });
    });
});

test.describe.serial('Global => Administrators roles', {
  tag: ['@roles', '@global', '@super-admin']
},() => {
  test.use({ storageState: authFilePath });
  test.beforeEach(async ({ page }) => {
    admin = new AdminPomManager(page);
    await admin.loginPage.goto(addRoleUrl);
    await admin.settingsPage.page.waitForTimeout(5000);
  });

  test("Super-admin can add role: \"Playwright role\"", async ()=> {
      await admin.helper.loaded();
      expect.soft(admin.nonOperationsPage.rolesTitleValues.first()).toBeVisible();
      const countRoles = await admin.nonOperationsPage.rolesTitleValues.count();
      expect.soft(countRoles).toEqual(10);
      await admin.nonOperationsPage.addRoleBtn.click(); 
      await admin.nonOperationsPage.rolesRoleNameInpt.fill('Playwright role');
      await admin.settingsPage.page.waitForTimeout(1000);
      const countCheck = await admin.nonOperationsPage.createNewRoleList.count();
      expect.soft(countCheck).toBeGreaterThanOrEqual(70);
      for (let i = 0; i < countCheck; i++) {
        await admin.nonOperationsPage.createNewRoleList.nth(i).click();
        await admin.settingsPage.page.waitForTimeout(50);
      };
      const [responseAddNewRole] = await Promise.all([
        admin.settingsPage.page.waitForResponse(response => 
          response.url().includes('admin/roles') && response.request().method() === 'POST'
        ),
        admin.nonOperationsPage.adminSaveBtn.click()
      ]);
    expect(responseAddNewRole.status()).toBe(200);
    const responseAddNewRoleBody = await responseAddNewRole.json();
    expect(responseAddNewRoleBody).toMatchObject({
      can_dw_currencies: [
        "AED", "AED.PD", "ATOM", "AVAX", "BTC", "ETH", "EUR", "GLD.PD",
        "KGS", "RUB.K", "RUB.N", "RUBR", "TON", "TRX", "TRY", "USDC",
        "USD.K", "USD.PD", "USD.R", "USDT"
      ],
      has_access_to_all_wl: true,
      has_read_access_to_options: true,
      has_read_access_to_users: true,
      name: "Playwright role"
    });
      await admin.settingsPage.page.waitForTimeout(4000);
    });

    test("Super-admin can add edit role: \"Playwright role\"", async ()=> {
      await admin.helper.loaded();
      expect.soft(admin.nonOperationsPage.rolesTitleValues.first()).toBeVisible();
      await admin.nonOperationsPage.paginatorBtn100.click();
      await admin.settingsPage.page.waitForTimeout(3000);
      const countRolesAll = await admin.nonOperationsPage.rolesTitleValues.count();
      expect.soft(countRolesAll).toBeGreaterThanOrEqual(30);
      await admin.nonOperationsPage.rolesEditRolesRndBtn.last().click();
      await admin.settingsPage.page.waitForTimeout(1000);
      const countCheck = await admin.nonOperationsPage.createNewRoleList.count();
      expect.soft(countCheck).toBeGreaterThanOrEqual(75);
      for (let i = 0; i < countCheck; i += 2) {
        await admin.nonOperationsPage.createNewRoleList.nth(i).click();
        await admin.settingsPage.page.waitForTimeout(50);
      };
      const [responseEditNewRole] = await Promise.all([
        admin.settingsPage.page.waitForResponse(response => 
          response.url().includes('admin/roles') && response.request().method() === 'PATCH'
        ),
        admin.nonOperationsPage.adminSaveBtn.click()
      ]);
    expect(responseEditNewRole.status()).toBe(200);
    const responseEditNewRoleBody = await responseEditNewRole.json();
    expect(responseEditNewRoleBody).toMatchObject({
      can_dw_currencies: [
        "AED.PD",  "AVAX", "ETH", "GLD.PD",
        "RUB.K",  "RUBR", "TRX", "USDC",
        "USD.PD", "USDT"
      ],
      has_access_to_all_wl: false,
      has_read_access_to_options: true,
      has_read_access_to_users: true,
      name: "Playwright role"
    });
      await admin.settingsPage.page.waitForTimeout(2000);
    });

    test("Super-admin can add delete role: \"Playwright role\"", async ()=> {
      await admin.helper.loaded();
      expect.soft(admin.nonOperationsPage.rolesTitleValues.first()).toBeVisible();
      await admin.nonOperationsPage.paginatorBtn100.click();
      await admin.settingsPage.page.waitForTimeout(3000);
      await admin.nonOperationsPage.rolesDeleteBtn.last().click();
      await admin.settingsPage.page.waitForTimeout(500);
      const [responseEditNewRole] = await Promise.all([
        admin.settingsPage.page.waitForResponse(response => 
          response.url().includes('admin/roles') && response.request().method() === 'DELETE'
        ),
        admin.nonOperationsPage.rolesDeleteModalBtn.click()
      ]);
    expect(responseEditNewRole.status()).toBe(200);
    const responseEditNewRoleBody = await responseEditNewRole.json();
    expect(responseEditNewRoleBody).toMatchObject({
      result: "success"
       });
    });
  });