const { expect } = require('@playwright/test');

exports.AdminInvestmentPage = class AdminInvestmentPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.addProductName = (lang='en') => `input[placeholder=' '][name='description.${lang}.name']`;
    this.loader = page.locator(".is-loading");
    this.tableHeader = page.locator("tr th");
    this.clientColumn = page.locator('td[title="Client"]');
    this.userEmailInpt = page.locator("input[placeholder='User email']");
    this.userIdInpt = page.locator("input[placeholder='User ID']");
    this.statusInpt = page.locator("input[placeholder='Status']");
    this.productsInpt = page.locator("input[placeholder='Products']");
    this.administratorInpt = page.locator("input[placeholder='Administrator']");
    this.preCardForInvest = page.locator("div[class='flex flex-col items-stretch gap-10 p-8 rounded-3xl relative min-h-[200px] max-w-[837px]']");
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth()+1).padStart(2,'0');
    this.currentYearMonth = `${year}-${month}`;
    this.investLastDate = page.locator(`div[id="dp-${this.currentYearMonth}-30"]`);
  }

  async checkVisibilityOfValues(locator, expectedValue) {
    const count = await locator.count();
    let allFieldsMatch = true;

    for (let j = 0; j < count; j++) {
        const text = await locator.nth(j).textContent();

        if (!text.includes(expectedValue)) {
            console.log(`Field '${expectedValue}' not found in element ${j}. Found: '${text}'`);
            allFieldsMatch = false;
            break;
        }

        const isVisible = await locator.nth(j).isVisible();
        if (!isVisible) {
            console.log(`Field '${expectedValue}' is not visible in element ${j}.`);
            allFieldsMatch = false;
            break;
        }
    }

    return allFieldsMatch;
}



  async checkTableHeaders(locator, expectedFields) {
    const count = await locator.count();
    for (const expectedField of expectedFields) {
        let fieldFound = false;
        for (let i = 0; i < count; i++) {
            const text = await locator.nth(i).textContent();
            if (text.includes(expectedField)) {
                const isVisible = await locator.nth(i).isVisible();
                if (isVisible) {
                    fieldFound = true;
                    break;
                }
            }
        }
        if (!fieldFound) {
            console.log(`Field '${expectedField}' not found or not visible.`);
            return false;
        }
    }
    return true;
}

  async loaded() {
    try {
        await this.loader.waitFor({ state: 'attached', timeout: 5000 });
        await this.loader.waitFor({ state: 'detached' });
    } catch (e) {
        console.log("Loader did not appear, skipping wait.");
    }
  }

  getAddProductNameSelector(lang) {
    return this.addProductName(lang);
  }
  
  async chooseLocalizationLang (lang="EN") {
    await this.localizationTab.filter({hasText: lang}).click()
  }



}