const { expect } = require('@playwright/test');

exports.UsersPage = class UsersPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.accountPageArea = page.locator('div.row.section');
    this.accountTableArea = page.locator('table.table.is-clickable.is-responsive');
    this.citezenshipDropdown = page.locator("input[placeholder='All citizenship']");
    this.emailWaletInpt = page.locator("input[placeholder='User ID / Email / Full name / User nickname']");
    this.adressInpt = page.locator("input[placeholder='Wallet address / Memo']")
    this.residenceDropdown = page.locator("input[placeholder='All countries of residence']");
    this.emailFilteInput = page.locator("input[placeholder='User ID / Email / Full name / User nickname']");
    this.adressFilterInput = page.locator("input[placeholder='Wallet address / Memo']");
    this.accountsPageTab = page.locator('a[href="/wl/1/users/accounts"]');
    this.contractsPageTab = page.locator('a[href="/wl/1/users/contracts"]');
    this.tableRows = page.locator('tr th');
    this.emailColumn = page.locator('td[title="Email"]');
    this.paginator = page.locator('button[class="button-tab"]');
    this.dropdownList = page.locator('div[class="list-el is-small"] span');
    this.wlColumn = page.locator('td[title="WL"]');
    this.idColumn = page.locator('td[title="ID"]');
    this.firstNameColumn = page.locator('td[title="First name"]');
    this.nickNameColumn = page.locator('td[title="Nickname"]');
    this.userTitle = page.locator('.h1.mb-0');
    this.userEmail = page.locator('div[class="flex gap-2 flex-wrap w-full"] span[class="truncate cursor-pointer text-blue-up"]');
    this.userId = page.locator('div[class="flex gap-2 flex-wrap w-full"] div');
    this.techAccountToggl = page.locator("label[class='input-wrapper']");

    this.globalLogWlInpt = page.locator("input[placeholder='All White Labels']");
    this.bbInDropdown = page.locator('span').filter({ hasText: 'Bitbanker' }).nth(1);

    this.sumsubCardTitle = page.locator('div[class="text-h2"]');
    this.screenshotSumsubArea = page.locator('div[class="app-page-loader relative"]');
    this.missScreenshotInSumsubOne = page.locator('table.table');
    this.sumsubLastCardAvailableInpt = page.locator('input[name="dependencies[0].form_id"]');
    this.sumsubEditTitleText = page.locator('div[class="flex flex-row flex-wrap gap-2 items-center group/head-card-title transition-child-none"]');
    this.sumsubEditBtn = page.locator('button[class="button is-icon is-round is-flat is-normal invisible group-hover/head-card-title:visible"]');
    this.sumsubDeleteBtn = page.locator('button[class="button is-icon is-round is-danger is-normal absolute top-4 right-4 invisible group-hover/kyc-card:visible"]');
    


};

async clickAnUseFilters (locator, name) {
    await locator.click();
    await this.page.waitForTimeout(2000);
    await this.dropdownList.filter({hasText: name}).click();
    await this.page.waitForTimeout(2000);
};

async fillMainFilter (locator, name) {
    await locator.fill('');
    await locator.fill(name);
    await this.page.waitForTimeout(2000);
};

};