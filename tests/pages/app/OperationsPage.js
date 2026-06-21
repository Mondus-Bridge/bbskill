const { expect } = require('@playwright/test');

exports.OperationsPage = class OperationsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.transactionTitle = page.locator('.h1')
    this.headerRow = page.locator('thead tr');
    this.loadingSelector = page.locator('.is-loading.is-big.is-white');
    this.periodInput = page.locator("input[placeholder='Period']");
    this.allOperationsInput = page.locator("input[placeholder='All Operations']");
    this.allCurrenciesOne = page.locator('input[placeholder="All currencies"]').nth(0);
    this.allCurrenciesTwo = page.locator('input[placeholder="All currencies"]').nth(1);;
    this.perPageInput = page.locator('button[data-test-id="page-100"]');
    this.paginatorInput = page.locator("button[data-test-id='first-page']");
    this.downloadButton = page.locator("div[class='inline-flex items-center w-full gap-2 whitespace-nowrap'] button[class='button is-icon is-gray is-normal']")
    const today = new Date();
    const previousDay = new Date(today);
    previousDay.setDate(today.getDate() - 1);
    this.today = page.locator(`div[id="dp-${this.formatDate(today)}"]`);
    this.previousDay = page.locator(`div[id="dp-${this.formatDate(previousDay)}"]`);
    this.setDate = page.locator("button[class='button is-primary is-normal']");
    this.removeDate = page.locator(".shrink-0.button.is-flat.is-icon.is-round.-mr-2");
    this.deleteButton = page.getByRole('cell', { name: 'Pending' });
    this.deleteButtonModal = page.locator('.button.is-danger.is-big');
  };

  async deleteAllOperations() {
    if (this.page.isClosed()) {
      console.log("Page is closed, skipping delete operations.");
      return;
    }
    let deleteButtonsCount = await this.deleteButton.count();
    if (deleteButtonsCount === 0) {
        console.log("No element to delete");
        return;
    }

    for (let i = deleteButtonsCount - 1; i >= 0 ; i--) {
        const isButtonVisible = await this.deleteButton.nth(i).isVisible();
        if (!isButtonVisible) {
            console.log(`Delete button ${i} is no longer visible. Skipping.`);
            continue;
        }

        try {
            await this.deleteButton.nth(i).click();
            await this.deleteButtonModal.waitFor({ state: 'visible', timeout: 5000 });
            await this.page.waitForTimeout(1000);
            await this.deleteButtonModal.click();
            await this.page.waitForTimeout(5000);
        } catch (error) {
            console.log(`Error deleting operation ${i}: ${error.message}`);
            continue; 
        }
        deleteButtonsCount = await this.deleteButton.count();
        if (deleteButtonsCount === 0) {
            console.log("No more elements to delete");
            return;
        }
    }

    console.log(`${deleteButtonsCount} operations deleted.`);
};

  formatDate(date) {
    return date.toISOString().split('T')[0];
};

  async setDateAndRemoveit(){
    await this.periodInput.click()
    await this.previousDay.first().click() //added .first()
    await this.today.first().click() //added .first()
    await this.setDate.click()
    await this.removeDate.click()
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
        await this.loadingSelector.waitFor({ state: 'attached', timeout: 5000 });
    } catch (e) {
        console.log("Loader did not appear, skipping wait.");
    }
    await this.loadingSelector.waitFor({ state: 'detached' });
  };
};