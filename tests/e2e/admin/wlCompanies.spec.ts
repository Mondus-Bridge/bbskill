import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';
let admin;

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
const authFilePathOwnerBB = path.resolve(__dirname, '../../../auth/OwnerLoginAuth.json');
const document = path.resolve(__dirname, '../../src/document.pdf');
const signature = path.resolve(__dirname, '../../src/signature.png');
const stamp = path.resolve(__dirname, '../../src/stamp.png');
const compnaiesUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_COMPANIES}`;
const companyName = 'Bitbanker';
const sameComapany = 'HUAWEI 33 Electronics'
const ownerBBemail = 'qa+ownerbb@bitbanker.org';
const adminEmail = 'qa@bitbanker.org';
const countryName = 'Соединенные Штаты Америки';
const bankTitle = "SVB";
const bankMin = "50";
const bankMax = "500000";
const bankName = "Silicon Valley National Bank";
const bankBIC = "044525987";
const bankKorSchet = "30101810400000000987";
const bankRachetSchet = "40702810900000012345";

test.describe('Check Settings, Companies subpage', {
    tag: ['@admin']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(compnaiesUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
    });

    test('Full admin don\'t have permissions to create a company', async () => {
        await admin.settingsPage.compnaniesAddCompanyBtn.click();
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.page.keyboard.press('Space');
        await admin.settingsPage.page.waitForTimeout(300);
        await admin.settingsPage.addCompanyNameInpt.fill('ZTE TRADING 01');
        await admin.settingsPage.addCompanyOwnerInpt.fill(ownerBBemail);
        await admin.settingsPage.addCompanyAdminInpt.fill(adminEmail);
        await admin.settingsPage.addCompanyCountryDrpdn.click();
        await admin.settingsPage.page.waitForTimeout(300);
        const targetElement = await admin.settingsPage.addCompanyCountryList.getByText('Россия', {exact:true});
        await targetElement.scrollIntoViewIfNeeded();
        await admin.settingsPage.addCompanyCountryList.getByText('Россия', {exact:true}).click({force:true});
        await admin.settingsPage.addCompanyCommissionInpt.fill('2.8');
        await admin.settingsPage.addCompanyWlclientsToggle.click();
        const [response] = await Promise.all([
          admin.settingsPage.page.waitForResponse(response => 
            response.url().includes('white-labels/companies') && response.request().method() === 'POST'
          ),
          admin.settingsPage.addCompanyBtns.getByText('Save', {exact:true}).click()
        ]);
      expect(response.status()).toBe(400);
      const responseBody = await response.json();
      expect(responseBody).toMatchObject({
          code: 'UserIsNotWhiteLabelOwner'
      });
    });

    test('Full admin don\'t have permissions to edit companies', async () => {
        const [response] = await Promise.all([
            admin.settingsPage.page.waitForResponse(response => 
              response.url().includes('white-labels/company-connections') && response.request().method() === 'PUT'
            ),
            admin.settingsPage.enableTogglFirst.click()
          ]);
        expect(response.status()).toBe(400);
        const responseBody = await response.json();
        expect(responseBody).toMatchObject({
            code: 'UserIsNotWhiteLabelOrCompanyOwner'
        });

        await admin.settingsPage.deleteFirstCompany.click();
        const [responseDelete] = await Promise.all([
          admin.settingsPage.page.waitForResponse(response => 
            response.url().includes('white-labels/company-connections') && response.request().method() === 'DELETE'
          ),
          admin.settingsPage.deleteModalBtn.click()
        ]);
      expect(responseDelete.status()).toBe(400);
      const responseBodyDelete = await responseDelete.json();
      expect(responseBodyDelete).toMatchObject({
          code: 'UserIsNotWhiteLabelOwner'
      });
      
      await admin.settingsPage.companyAddCompanyDropdown.click();
      await admin.settingsPage.page.waitForTimeout(300);
      await expect.soft(admin.settingsPage.companyEmptyList).toContainText('No third-party companies available')
    });
});


test.describe.serial('Check Settings, Companies subpage with owner BB permission', {
  tag: ['@companies', '@ownerbb']
},() => {
  test.use({ storageState: authFilePathOwnerBB});
  test.beforeEach(async ({ page }) => {
    admin = new AdminPomManager(page);
    await admin.loginPage.goto(compnaiesUrl);
    await admin.settingsPage.page.waitForTimeout(3000);
  });

  test(`Owner ${ownerBBemail} cant create the same company (${sameComapany}) twice`, async () => {
    await admin.settingsPage.compnaniesAddCompanyBtn.click();
    await admin.settingsPage.page.waitForTimeout(300);
    await admin.page.keyboard.press('Space');
    await admin.settingsPage.page.waitForTimeout(300);
    await admin.settingsPage.addCompanyNameInpt.fill(sameComapany);
    await admin.settingsPage.addCompanyOwnerInpt.fill(ownerBBemail);
    await admin.settingsPage.addCompanyAdminInpt.fill(adminEmail);
    await admin.settingsPage.addCompanyCountryDrpdn.click();
    await admin.settingsPage.page.waitForTimeout(300);
    const targetElement = await admin.settingsPage.addCompanyCountryList.getByText('Китай', {exact:true});
    await targetElement.scrollIntoViewIfNeeded();
    await admin.settingsPage.addCompanyCountryList.getByText('Китай', {exact:true}).click({force:true});
    await admin.settingsPage.addCompanyCommissionInpt.fill('1.3');
    await admin.settingsPage.addCompanyWlclientsToggle.click();
    const [response] = await Promise.all([
      admin.settingsPage.page.waitForResponse(response => 
        response.url().includes('white-labels/companies') && response.request().method() === 'POST'
      ),
      admin.settingsPage.addCompanyBtns.getByText('Save', {exact:true}).click()
    ]);
  expect(response.status()).toBe(400);
  const responseBody = await response.json();
  expect(responseBody).toMatchObject({
      code: 'WhiteLabelCompanyNameMustBeUnique' 
    });
  });

  test(`Owner BB can create company ${companyName}`, async () => {
    await admin.settingsPage.compnaniesAddCompanyBtn.click();
    await admin.settingsPage.page.waitForTimeout(300);
    await admin.page.keyboard.press('Space');
    await admin.settingsPage.page.waitForTimeout(300);
    await admin.settingsPage.addCompanyNameInpt.fill(companyName);
    await admin.settingsPage.addCompanyOwnerInpt.fill(ownerBBemail);
    await admin.settingsPage.addCompanyAdminInpt.fill(adminEmail);
    await admin.settingsPage.addCompanyCountryDrpdn.click();
    await admin.settingsPage.page.waitForTimeout(300);
    const targetElement = await admin.settingsPage.addCompanyCountryList.getByText(countryName, {exact:true});
    await targetElement.scrollIntoViewIfNeeded();
    await admin.settingsPage.addCompanyCountryList.getByText(countryName, {exact:true}).click({force:true});
    await admin.settingsPage.addCompanyCommissionInpt.fill('10');
    await admin.settingsPage.addCompanyWlclientsToggle.click();
    await admin.settingsPage.addCompanyCashlessWithdrawlToggle.click();
    await admin.settingsPage.addCompanyBtns.getByText('Save', {exact:true}).click();
  });

  test(`Owner BB can edit company ${companyName} and add bank details`, async () => {
    await admin.settingsPage.anyEditBtn.last().click();
    const companyLoc = await admin.settingsPage.getCompanyNameInptByValue(companyName);
    const ownerLoc = await admin.settingsPage.getCompanyOwnerInptByValue(ownerBBemail);
    const adminLoc = await admin.settingsPage.getCompanyAdminInptByValue(adminEmail);
    await expect.soft(companyLoc).toBeVisible();
    await expect.soft(ownerLoc).toBeVisible();
    await expect.soft(adminLoc).toBeVisible();
 
    await admin.settingsPage.noNameBtn.filter({hasText: 'Add bank details'}).click();
    await admin.settingsPage.page.waitForTimeout(300);
    await admin.settingsPage.addBankTitle.fill(bankTitle);
    await admin.settingsPage.addBankCurrencyInpt.click();
    const element = await admin.helper.findVisibleElementWithText(admin.settingsPage.addBankAnyListValue, 'Euro');
    await element.click();
    await admin.settingsPage.addBankLegalInpt.click();
    const element2 = await admin.helper.findVisibleElementWithText(admin.settingsPage.addBankAnyListValue, 'Legal entity');
    await element2.click();
    await admin.settingsPage.addBankMinInpt.fill(bankMin);
    await admin.settingsPage.addBankMaxInpt.fill(bankMax);
    await admin.settingsPage.addBankNameInpt.fill(bankName);
    await admin.settingsPage.addBankBicInpt.fill(bankBIC);
    await admin.settingsPage.addBankKorSchetInpt.fill(bankKorSchet);
    await admin.settingsPage.addBankRachetSchetInpt.fill(bankRachetSchet);
    await admin.settingsPage.addBankToggl.click();
    await admin.settingsPage.addBankSaveBtn.click();

    const [response] = await Promise.all([
      admin.settingsPage.page.waitForResponse(response => 
        response.url().includes('white-labels/company-details') && response.request().method() === 'POST'
      ),
      admin.settingsPage.addCompanyBtns.getByText('Save', {exact:true}).click()
    ]);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toMatchObject({
        name: bankTitle
      });
  });

  test(`Owner BB can edit company ${companyName} and delete the bank details`, async () => {
    await admin.settingsPage.anyEditBtn.last().click();
    await admin.settingsPage.page.waitForTimeout(3000);
    await admin.settingsPage.deleteBankDetails.click();
    const [response] = await Promise.all([
      admin.settingsPage.page.waitForResponse(response => 
        response.url().includes('white-labels/company-details') && response.request().method() === 'DELETE'
      ),
      admin.settingsPage.deleteBankDetailsModalBtn.click()
    ]);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toMatchObject({
        result: "success"
      });
  });

  // test('Owner BB can edit company X and upload stamp, signature, agreement (need this element <input type="file">', async () => {
  //   await admin.settingsPage.anyEditBtn.last().click();
  //   await admin.settingsPage.page.waitForTimeout(3000);
  //   const agreementInput = admin.settingsPage.noNameBtn.filter({hasText: 'Upload new agreement (.pdf)'});
  //   await admin.settingsPage.page.waitForTimeout(300);
  //   await agreementInput.setInputFiles(document);

  //   const signatureInput = admin.settingsPage.noNameBtn.filter({hasText: 'Replace (.png)'}).last();
  //   await admin.settingsPage.page.waitForTimeout(300);
  //   await signatureInput.setInputFiles(signature);

  //   const stampInput = admin.settingsPage.noNameBtn.filter({hasText: 'Replace (.png)'}).first();
  //   await admin.settingsPage.page.waitForTimeout(300);
  //   await stampInput.setInputFiles(stamp);

  //   await admin.settingsPage.addCompanyBtns.getByText('Save', {exact:true}).click();
  //   await admin.settingsPage.page.waitForTimeout(3000);
  // });

  test(`Owner BB can disable company ${companyName} and delete it`, async () => {
    await admin.helper.loaded();
    await admin.page.keyboard.press('Space');
    await admin.settingsPage.page.waitForTimeout(300);
    await expect.soft(admin.settingsPage.companyAddCompanyDropdown).toBeVisible();
    const [response] = await Promise.all([
      admin.settingsPage.page.waitForResponse(response => 
        response.url().includes('white-labels/company-connections') && response.request().method() === 'PUT'
      ),
      admin.settingsPage.disableCompany.last().click()
    ]);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toMatchObject({
        is_active: false
      });

    await admin.settingsPage.deleteAnyCompanyBtn.last().click();
      const [responseDelete] = await Promise.all([
        admin.settingsPage.page.waitForResponse(response => 
          response.url().includes('white-labels/company-connections') && response.request().method() === 'DELETE'
        ),
      admin.settingsPage.deleteModalBtn.click()
    ]);
    expect(responseDelete.status()).toBe(200);
    const responseBodyDelete = await responseDelete.json();
    expect(responseBodyDelete).toMatchObject({
        result: "success"
      });
  });
});
