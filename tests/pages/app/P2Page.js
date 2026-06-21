const { expect } = require('@playwright/test');

exports.P2Page = class P2Page {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.title = page.locator("h1[class='text-h2 md:text-h1']");
    this.telegramText = page.locator("div[class='flex flex-col gap-6'] div");
    this.telegramButton = page.locator(".button.is-outline.is-normal.w-fit");
    this.orders = page.locator("a.tab");
    this.noTrades = page.locator(".h2.mb-0");
    this.tabs = page.locator("div.button-tab")
    this.traderInput = page.locator("input[placeholder='Trader']")
    this.amountInput = page.locator("input[placeholder='Amount']")
    this.allBanksInput = page.locator("input[placeholder='All banks']")
    this.allMethodsInput = page.locator("input[placeholder='All methods']")
    this.showMyOrdersText = page.locator("span[class='input-label'] div")
    this.showMyOrdersToggl = page.locator("div[class='input-switch-component'] span[class='input-decorator']")
    this.headerRow = page.locator("thead tr")
    this.loadingSelector = page.locator('.is-loading.is-outline.is-big');
    this.traderColumnEl = page.locator("td div[class='flex items-center gap-2'] span")
    this.bankDropdownList = page.locator("div.list > div.list-el.is-small span");
    this.createMinDeposit = page.locator("input.input").nth(1);
    this.createMaxDeposit = page.locator("input.input").nth(2);
    this.createCompensation = page.locator("input.input").nth(3);
    this.createPhone = page.locator("input[placeholder='+7 9__ ___-__-__']");
    this.createCC = page.locator("input[placeholder='0000 0000 0000 0000']");
    this.createAccount = page.locator("input[placeholder='Account number']");
    this.createCardHolder = page.locator("input[placeholder='Full name (Surname, First name, Patronymic)']")
    this.createComment = page.locator("textarea[placeholder='Order details']");
    this.createTimeFrom = page.locator('div.input-wrapper input.input[name="input-text-name"]').nth(0);
    this.createTimeUntil = page.locator('div.input-wrapper input.input[name="input-text-name"]').nth(1);
    this.createButton = page.locator("button[class='button is-primary is-big w-full md:w-fit']");
    this.notificanText = page.locator('div[class="notification-content"]');
  }

  async createWithdraw(min, max, compensation, phone, CC, account, cardHolder, comment, timeStart, timeEnd){
    await this.createMinDeposit.fill(min);
    await this.createMaxDeposit.fill(max);
    await this.createCompensation.fill(compensation);
    await this.page.keyboard.press('Space');
    await this.createPhone.fill(phone);
    await this.createCC.fill(CC);
    await this.createAccount.fill(account);
    await this.createCardHolder.fill(cardHolder);
    await this.createComment.fill(comment);
    await this.page.keyboard.press('Space');
    await this.createTimeFrom.fill(timeStart);
    await this.createTimeUntil.fill(timeEnd);
    await this.createButton.click()

  }

  async createDeposit(min, max, compensation, comment, timeStart, timeEnd) {
    await this.createMinDeposit.fill(min);
    await this.createMaxDeposit.fill(max);
    await this.createCompensation.fill(compensation);
    await this.createComment.fill(comment);
    await this.page.keyboard.press('Space');
    await this.createTimeFrom.fill(timeStart);
    await this.createTimeUntil.fill(timeEnd);
    await this.createButton.click()
  }

  async getBank(text) {
    await this.allBanksInput.click()
    await this.bankDropdownList.filter({hasText: text}).click()

  }

  async typeTraderInput(text) {
    return this.traderInput.fill(text)
  }

  async cleanTraderInput(){
    return await this.traderInput.fill('');
  }

  async validateTraderColumn(expectedText, maxChecks = 10) {
    const traderElements = this.traderColumnEl;
    const count = await traderElements.count();
    const actualChecks = Math.min(count, maxChecks); 

    for (let i = 0; i < actualChecks; i++) {
        const text = await traderElements.nth(i).textContent();
        if (text.trim() !== expectedText) {
            console.log(`Mismatch at element ${i}: expected '${expectedText}', got '${text.trim()}'`);
            return false;
        }
    }
    return true;  
  }

  async ordersTab (text) {
    const tabText = this.orders;
     return tabText.getByText(text, { exact: true }).click()
  }

  async sectionTabs (text) {
    const tabText = this.tabs;
     return tabText.getByText(text, { exact: true }).click()
  }

  async columnExists(expectedColumns) {
    for (const columnText of expectedColumns) {
        const columnExists = await this.headerRow.locator(`text=${columnText}`).isVisible();
        if (!columnExists) {
            console.log(`Column not found: ${columnText}`);
            return false; 
        }
    }
    return true;  
  }

  async loaded() {
      try {
          await this.loadingSelector.waitFor({ state: 'attached', timeout: 10000 });
          await this.loadingSelector.waitFor({ state: 'detached' });
      } catch (e) {
          console.log("Loader did not appear, skipping wait.");
      }
    }

}