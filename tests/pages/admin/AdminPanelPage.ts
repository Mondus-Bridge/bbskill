const { expect } = require('@playwright/test');

exports.AdminPanelPage = class AdminPanelPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.wlIcon = page.getByText('White Label', { exact: true });
    this.globalSections = page.locator('div.panel').first();
    this.wlSections = page.locator('div.panel').nth(1);
    this.globalDropdown = page.getByText('Global', { exact: true });
  }

async assertLoggedInAdmin() {
    await expect(this.wlIcon).toBeVisible();
  }
};