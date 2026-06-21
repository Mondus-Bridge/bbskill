const { expect } = require('@playwright/test');

exports.OtcPage = class OtcPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.otcScreenshot = page.locator("div[class='w-full']");
    this.debitInpt = page.locator("input[placeholder='Select currency'][name='base_currency']");
    this.debitList = page.locator("div.list-el div span");
    this.cancelBtn = page.locator('div[class="list-el is-small text-negative"]');
    this.debitAmountInpt = page.locator("div[class='input-text-component is-normal'] div[class='input-container'] input[type='text']");
    this.receivingInpt = page.locator("input[placeholder='Select currency'][name='quote_currency']");
    this.firstRateInpt = page.locator('input.input[inputmode="decimal"]').nth(1);
    this.amountToReceive = page.locator('input.input[inputmode="decimal"]').nth(3);
    this.emailToSend = page.locator("input[placeholder='name@gmail.com']");
    this.commentInpt = page.locator("textarea[placeholder='This rate and plus my fee']");
    this.createOrderBtn = page.locator(".button.is-primary.is-big.w-fit");
    this.myTransactionScreenshot = page.locator(".stretch.content.section.row");
    this.otcStatusRow = page.locator('td[title="Status"]');
    this.otcDateRow = page.locator('td[title="Date and time"]');
    this.otcAnyStatusBtn = page.locator('td[title="Status"] span');

};

async clickRightOne(locator, text) {
    const elements = await locator.filter({ hasText: text });
    const count = await elements.count();
    for (let i = 0; i < count; i++) {
        if (await elements.nth(i).isVisible()) {
            await elements.nth(i).click();
            break; 
        }
    }
  };

};