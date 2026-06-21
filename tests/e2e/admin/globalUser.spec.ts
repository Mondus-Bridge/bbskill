import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/SuperLoginAuth.json');
let admin;
const userUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.GLOBAL_USER}`;
const allTecAccs = ['qa+eprrouble@bitbanker.org', 'qa+yekaterinburg@bitbanker.org', 'qa+stavropol@bitbanker.org', 'qa+peterburg@bitbanker.org',
    'qa+dubai@bitbanker.org', 'qa+bishkek@bitbanker.org', 'dina+4@bitbanker.org',
    'loveandpeace1331+bb67@gmail.com', 'deheki1587@goflipa.com']; //******@************* = dina+4@bitbanker.org'

test.describe('Global => Users', {
    tag: ['@super-admin', '@users', '@global']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(userUrl);
      await admin.usersPage.page.waitForTimeout(3000);
    });

    test("All white label filters works", async ()=> {
        await admin.helper.loaded();
        await admin.usersPage.globalLogWlInpt.click();
        await admin.usersPage.page.getByText('Test-dev-wl').click();
        await admin.usersPage.page.waitForTimeout(3000);
        const testWlCount = await admin.usersPage.wlColumn.count();
        expect(testWlCount).toEqual(10);
        const resulTestwl = await admin.helper.checkOneValueForColumn(admin.usersPage.wlColumn, 'ЭПР');
        expect(resulTestwl).toBe(true);
        await admin.usersPage.globalLogWlInpt.click();
        await admin.usersPage.bbInDropdown.click();
        await admin.usersPage.page.waitForTimeout(2000);
        const bbCount = await admin.usersPage.wlColumn.count();
        expect(bbCount).toEqual(10);
        const resultBBwl = await admin.helper.checkOneValueForColumn(admin.usersPage.wlColumn, 'Bitbanker');
        expect(resultBBwl).toBe(true);
        await admin.nonOperationsPage.paginatorBtn20.click()
        await admin.usersPage.page.waitForTimeout(3000);
        const bbCount20 = await admin.usersPage.wlColumn.count();
        expect(bbCount20).toEqual(20);
    });

    test("All citizenship filters works", async ()=> {
        await admin.helper.loaded();
        await admin.usersPage.citezenshipDropdown.click();
        await admin.usersPage.page.waitForTimeout(500);
        await admin.usersPage.page.getByText('IND').click();
        await admin.usersPage.page.waitForTimeout(2000);
        const indCount = await admin.usersPage.wlColumn.count();
        expect(indCount).toEqual(1);

        await admin.usersPage.citezenshipDropdown.click();
        await admin.usersPage.page.waitForTimeout(500);
        await admin.usersPage.page.getByText('PHL').click();
        await admin.usersPage.page.waitForTimeout(2000);
        const phlCount = await admin.usersPage.wlColumn.count();
        expect(phlCount).toEqual(10);
    });

    test("Country of residence filter works", async ()=> {
        await admin.helper.loaded();
        await admin.usersPage.residenceDropdown.click();
        await admin.usersPage.page.waitForTimeout(2000);
        await admin.usersPage.page.getByText('Belarus').click();
        await admin.usersPage.page.waitForTimeout(2000);
        const belCount = await admin.usersPage.wlColumn.count();
        expect(belCount).toEqual(1);

        await admin.usersPage.residenceDropdown.click();
        await admin.usersPage.page.waitForTimeout(2000);
        await admin.usersPage.page.getByText('Russia', { exact: true }).click();
        await admin.usersPage.page.waitForTimeout(2000);
        const rusCount = await admin.usersPage.wlColumn.count();
        expect(rusCount).toEqual(10);
    });

    test("Technical account filter works", async ()=> {
        await admin.helper.loaded();
        await admin.usersPage.page.getByText('Technical account').click();
        await admin.usersPage.page.waitForTimeout(2000);
        await admin.nonOperationsPage.paginatorBtn100.click();
        await admin.usersPage.page.waitForTimeout(2000);
        await admin.usersPage.page.waitForTimeout(2000);
        const resultTech = await admin.helper.checkTableHeaders(admin.usersPage.emailColumn, allTecAccs);
        expect(resultTech).toBe(true);
    });

    test("Email, wallet filter works", async ()=> {
        test.setTimeout(35000);
        const mail = 'art_tm@inbox.ru';
        const nick = 'stella';
        const name = 'Дмитрий';
        const address = 'bc1qq2nxh6968nrz5pvchqfy8n76zyecd0cr422t46' //might be changed over time
        await admin.helper.loaded();
        await admin.usersPage.emailWaletInpt.fill(mail);
        await admin.usersPage.page.waitForTimeout(2000);
        const resultMail = await admin.helper.checkOneValueForColumn(admin.usersPage.emailColumn, mail);
        expect(resultMail).toBe(true);

        await admin.usersPage.emailWaletInpt.fill('');
        await admin.usersPage.page.waitForTimeout(2000);
        await admin.usersPage.emailWaletInpt.fill(nick);
        await admin.usersPage.page.waitForTimeout(2000);
        const resultNick = await admin.helper.checkOneValueForColumn(admin.usersPage.nickNameColumn, nick);
        expect(resultNick).toBe(true);

        await admin.usersPage.emailWaletInpt.fill('');
        await admin.usersPage.page.waitForTimeout(2000);
        await admin.usersPage.emailWaletInpt.fill(name);
        await admin.usersPage.page.waitForTimeout(2000);
        const resultName = await admin.helper.checkOneValueForColumn(admin.usersPage.firstNameColumn, name);
        expect(resultName).toBe(true);

        await admin.usersPage.emailWaletInpt.fill('');
        await admin.usersPage.page.waitForTimeout(2000);
        await admin.usersPage.adressInpt.fill(address);
        await admin.usersPage.page.waitForTimeout(2000);
        const resultAddress = await admin.helper.checkOneValueForColumn(admin.usersPage.emailColumn, mail);
        expect(resultAddress).toBe(true);
    });
});