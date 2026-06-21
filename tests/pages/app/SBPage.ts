const { expect } = require('@playwright/test');

exports.SBPage = class SBPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.youPayBtn = page.locator('div').filter({ hasText: /^rubles$/ }).getByRole('textbox');
    this.youReceiveBtn = page.locator('div').filter({ hasText: /^You receiveRUBRRUBR$/ }).getByRole('textbox');
    this.payBtn = page.getByRole('button', { name: 'Pay' });
    this.payBtnInModal = page.getByRole('button', { name: 'Pay' }).nth(1);
    this.payModal = page.getByText('Buy via SBP10,000.00 RUBRScan');
    this.payLink = page.getByRole('link', { name: 'https://qr.nspk.ru/' });
    this.payLinkWelcome = page.locator('div').filter({ hasText: 'Для оплатыотсканируйте QR' }).nth(3);
    this.payBanner = page.locator('div').filter({ hasText: /^You did not complete the SBP deposit of 10000 RUBRPay$/ }).first();
    this.sbpFullPage = page.locator('.panel.section.row');
  };


  async fillYouPayInput(num){
    await this.youPayBtn.fill(`${num}`);
  };
}