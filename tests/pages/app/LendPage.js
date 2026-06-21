const { expect } = require('@playwright/test');

exports.LendPage = class LendPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.lendContent = page.locator(".row.section");
    this.lendTitle = page.locator("h1.h1");
    this.lendCurrencyTab = page.locator(".px-3.mb-1").nth(0);
    this.lendTermTab = page.locator(".px-3.mb-1").nth(1);
    this.lendUsdtTab = page.locator(".button-tab").nth(0);
    this.lendRubTab = page.locator(".button-tab").nth(1);
    this.loansWarning = page.locator(".alert.is-warning.w-full");
    this.lendTerms = page.locator("h3[class='h3']");
    this.lendTermsFilds = page.locator('div[class="flex justify-between gap-1"] span[class="text-gray"]');
    this.loandTermsP1 = page.locator("div[class='flex flex-col gap-1'] div").nth(0);
    this.loandTermsP2 = page.locator("div[class='flex flex-col gap-1'] div").nth(1);
    this.lendCheckbox = page.locator('input[type="checkbox"]');
    this.lengCheckboxInteractable = page.locator(".input-decorator");
    this.lendButton = page.locator("button[class='button is-primary is-big md:w-fit']");
    this.lendOperationCloseBtn = page.locator(".button.is-yellow").nth(0);
    this.lendOpeationModalCloseBtn = page.locator(".button.is-big.w-fit.is-primary");
    this.lendOpeationModalCloseBtnSecond = page.locator("button[class='button is-icon is-round is-flat is-big absolute -top-1 -right-1 md:top-3 md:right-3 z-30']");
    this.lendLoanTab = page.locator("a.tab").nth(0);
    this.lendLendTab = page.locator("a.tab").nth(1);
    this.lendInput = page.locator("div[type='number'] div[class='input-wrapper']");
    this.lendClosedModalText = page.locator("div[class='flex flex-col items-center'] h1[class='h1']"); //Closed
    this.lendCloseModalIcon = page.locator("button.button.is-icon.is-round");
  }

  async closeClosedModal(){
    await this.lendCloseModalIcon.click();
  }

  async closeFirstOperation(){
    await this.lendOperationCloseBtn.click();
    await this.lendOpeationModalCloseBtn.click();
    await this.lendOpeationModalCloseBtnSecond.click();
  }

  async agreeAndOpen(){
    await this.lengCheckboxInteractable.click();
    await this.lendButton.click();
  }

  async chooseTab(tab){
    tab == "lend"? this.lendLendTab.click() : this.lendLoanTab.click()
  }

  async checkTermsFields(locator, expectedFields) {
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

  
}