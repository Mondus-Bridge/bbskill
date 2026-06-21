const { expect } = require('@playwright/test');

exports.GeneralPage = class GeneralPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.bitbankerSettings = page.getByText('BitbankerWhite Label is');
    this.contactDataDropdown = page.getByRole('heading', { name: 'Сергей Горушунов' });
    this.newContactDataArea = page.getByText('Contact dataСергей Горушунов');
    this.debitAccountDropdown = page.getByText('Основной аккаунт1 (qa+ownerbb');
    this.debitAccountMain = page.getByText('TitleEmailSet as').first();
    this.addDebitAccountDropdown  = page.getByText('Add account');
    this.addDebitAccountArea = page.getByText('TitleEmailSet as').last();
   };
    async removeJivoPart() {
    await this.page.evaluate(() => {
        const banner = document.querySelector('div.app-cookies-banner');
        if (banner) banner.remove();
    });
    };
};