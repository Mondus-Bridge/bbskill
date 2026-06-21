const { expect } = require('@playwright/test');

exports.SettingsPage = class SettingsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.tableColimnName = page.locator('tr th');
    this.currenciesTitle = page.locator('span.text-xs');
    this.fieldTitle = page.locator('div[class="flex gap-2 items-center"]');
    this.feesBtn = page.locator('button[class="button is-outline is-normal"]');
    this.checkBoxFields = page.locator('span[class="input-label"] div');
    this.saveBtn = page.locator('button[class="button is-primary is-normal mt-5"]').nth(0);
    
    this.marketPairs = page.locator('div.transition-duration-300');
    this.marketsFields = page.locator('div[class="input-label"]');

    this.lendTitle = page.locator('div[class="text-h3 flex items-center gap-2"]');
    this.lendSaveBtn = page.locator('button[class="button is-primary is-normal"]').nth(0);

    this.settingsToggl = page.locator('input[type="checkbox"]');

    this.compnaniesAddCompanyBtn = page.getByRole('button', { name: 'Add company' });
    this.addCompanyNameInpt = page.locator("input[name='name']");
    this.addCompanyOwnerInpt = page.locator("input[name='owner_email']");
    this.addCompanyAdminInpt = page.locator("input[name='admin_email']");
    this.addCompanyCountryDrpdn = page.locator("input[name='country']");
    this.addCompanyCountryList = page.locator('div[class="dropdown-content-body py-2 overflow-hidden"] div.list-el span');
    this.addCompanyCommissionInpt = page.locator("input[inputmode='decimal']");
    this.addCompanyWlclientsToggle = page.getByText('Performs non-cash withdrawals to Russian banks (acting as a nominee organization) for legal entities');
    this.addCompanyCashlessWithdrawlToggle =  page.getByText('Can receive funds from other WL clients');

    this.addCompanyBtns = page.locator('button[class="button is-primary is-normal w-fit"]');
    this.companyAddCompanyDropdown = page.locator("input[placeholder='Select a third-party company']");
    this.companyEmptyList = page.locator(".flex.flex-row.justify-center.text-small.text-gray");

    this.enableTogglFirst = page.locator('label[class="input-wrapper"]').nth(0);
    this.deleteFirstCompany = page.locator('button[class="button is-danger is-normal"]').nth(0);
    this.deleteModalBtn = page.locator('.button.is-danger.is-big');
    this.anyEditBtn = page.locator('button[class="button is-primary is-normal"]');
    this.getCompanyNameInptByValue = (value) => page.locator(`input[value='${value}']`);
    this.getCompanyOwnerInptByValue = (value) => page.locator(`input[value='${value}']`);
    this.getCompanyAdminInptByValue = (value) => page.locator(`input[value='${value}']`);
    this.noNameBtn = page.locator('button.button');
    this.addBankTitle = page.locator("div[class='flex flex-col gap-2'] input[name='name']");
    this.addBankCurrencyInpt = page.locator("input[placeholder='Select currency']");
    this.addBankAnyListValue = page.locator("div.dropdown-content-body div.list div.list-el span");
    this.addBankLegalInpt = page.locator("input[name='business_entities']");
    this.addBankMinInpt = page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)");
    this.addBankMaxInpt = page.locator("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)");
    this.addBankNameInpt = page.locator("input[name='bank_name']");
    this.addBankBicInpt = page.locator("input[name='bank_bik']");
    this.addBankKorSchetInpt = page.locator("input[name='bank_kor_schet']");
    this.addBankRachetSchetInpt = page.locator("input[name='bank_rashet_schet']");
    this.addBankToggl = page.locator("div[class='input-switch-component'] div[class='input-container'] div");
    this.addBankSaveBtn = page.locator(".button.is-primary.is-big");
    this.deleteBankDetails = page.locator("button[class='button is-outline-danger is-normal']").last();
    this.deleteBankDetailsModalBtn = page.locator(".button.is-success.is-big");
    this.disableCompany = page.locator('div[class="input-switch-component"]');
    this.deleteAnyCompanyBtn = page.locator('button[class="button is-danger is-normal"]');

    this.globalTechMaintenanceToggl = page.locator(".input-switch-component.is-big");
    this.globalTechToggl = page.locator("input[value='false']");
    this.globalKYCrequiredCheckbox = page.locator('div[class="input-checkbox-component is-small ml-2"]');
    this.globalKYCrequiredCheckboxChecked = page.locator('div[class="input-checkbox-component is-touched is-dirty is-small ml-2"]');
    this.globalKYCrequiredCheckboxEl = page.locator('input[name="kyc_kgz_is_necessary"]');
    this.globalMakerFeeInpt = page.locator('input[name="limit_fee"]');
    this.globalTakerFeeInpt = page.locator('input[name="market_fee"]');
    this.globalAEDnameInpt = page.locator("input[value='UAE Dirham']");
    this.globalAEDdecimalInpt = page.locator('.input-number-component > .input-container > .input-wrapper > .input').first();
    this.globalAEDexchangelInpt = page.locator('div:nth-child(3) > .input-container > .input-wrapper > .input').first();
    this.globalAEDisFiatToggl = page.locator('span:nth-child(3) > .flex > span').first();
    this.globalAEDisTokenToggl = page.locator('div:nth-child(6) > .input-container > .input-wrapper > .input-label > .flex > span').first();
    this.globalAEDOTCToggl = page.locator('div:nth-child(7) > .input-container > .input-wrapper > .input-label > .flex > span').first();
    this.globalAEDSWIFTToggl = page.locator('div:nth-child(7) > .input-container > .input-wrapper > .input-label > div').first();
    this.globalAEDMinInpt = page.locator('input[name="min_deposit_amount"]').first();

    this.globalP2pAddBankBtn = page.locator(".button.is-outline.is-normal");
    this.globalP2pEditBtn = page.locator('button[class="button is-primary is-small"]');
    this.globalP2pActivateBtn = page.locator('button[class="button is-success is-small"]');
    this.globalP2pDeactivateBtn = page.locator('button[class="button is-danger is-small"]');
    this.globalDeactibateActivteBtn = page.getByRole('button', { name: 'Yes, deactivate' });
    this.globalActivteBtn = page.getByRole('button', { name: 'Yes, activate' });
    this.globalP2pModalCountryInpt = page.locator("input[placeholder='Select country']");
    this.globalP2pModalRussia = page.locator('span').filter({ hasText: 'Россия' });
    this.globalP2pModalBankNameInpt = page.locator("input[placeholder='Enter bank name']");
    this.globalP2pModalKeyInpt = page.locator("input[placeholder='Enter the transfer key name']");
    this.globalP2pModalSaveBtn = page.locator("button[class='button is-primary']");

    this.globalNetworkInpt = page.locator("input[name='network']");
    this.globalNetworkList = page.locator('div[class="dropdown-content-body py-2 overflow-hidden"] div[class="list-el is-small"]');
    this.globalNetworkTableColumn = page.locator('td[title="Network"]');

    this.globalLogEmailInpt = page.locator("input[placeholder='Enter email, name, or last name']");
    this.globalSpan = page.locator('span');
    this.globalLogAdminList = page.locator('td[title="Administrator"]');
    this.globalLogWlInpt = page.locator("input[placeholder='All White Labels']");
    this.globalLogWlList = page.locator('td[title="White Label"]');
    this.globalAmlScreenOne = page.locator('.flex.flex-col.gap-6');
    this.globalAmlScreenTwo = page.locator("div[class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6']");
    this.globalAmlCurDropdown = page.locator("input[placeholder='Select verification currency']");
    this.globalAmlCurUsdt = page.getByText('Tether USD');
    this.globalAmlDepositToggle = page.getByText('Check incoming wallet top-ups')
    this.globalAmlInvoiceToggle = page.getByText('Check incoming crypto')
    this.globalAmlTGinput = page.locator("input[placeholder='t.me/bboperators']")
    this.globalAmlTGinputMinute = page.locator("input[placeholder='10']")
    this.globalAmlTGinputMaxRisk = page.locator("input[placeholder='10%']").first();
  };

  async shouldBeChecked(locator, qty) {
    const count = await locator.count();
    if (count !== qty) {
        throw new Error(`Expected ${qty} elements, but found ${count}.`);
    }
    for (let i = 0; i < count; i++) {
        const isChecked = await locator.nth(i).isChecked();
        if (!isChecked) {
            throw new Error(`Element at index ${i} is not checked.`);
        }
    }

    console.log(`All ${qty} elements are checked and the count is correct.`);
}

};