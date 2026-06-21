const { expect } = require('@playwright/test');

exports.AppMobilePage = class AppMobilePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.forgotPassArea = page.locator("div[class='w-[610px] panel row section']").nth(0);
    this.authEmailInpt = page.locator("input[placeholder='Email']");
    this.signUpEmailInpt = page.locator("input[placeholder='alex@example.com']");
    this.signUpPassInpt = page.locator("input[placeholder='********'][name='password']");
    this.signUpConfirmPassInpt = page.locator("input[placeholder='********'][name='confirmPassword']");
    this.promocodeInpt = page.locator("input[placeholder='Enter promo code']");
    this.signUpArea = page.locator("div[class='w-[610px] panel row section']").nth(0);
    this.totalBalanceAmountArea = page.locator('.text-h2.mb-0');
    this.balanceAmountArea = page.locator('div[class="flex flex-col items-end"]');
    this.closeJivoChatBtn = page.locator('.closeBox__E_y9g');
    this.lendingBanner = page.locator('div.app-cookies-banner');
    };

async goto (url) {
    await this.page.goto(url);
    };

async wait (time=5000) {
    await this.page.waitForTimeout(time);
};

async removeLandingBanner() {
  await this.page.evaluate(() => {
    const banner = document.querySelector('div.app-cookies-banner');
    if (banner) banner.remove();
  });
}

};  

