const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.logoBB = page.locator("img[alt='Header logo']");
    this.noBalanceBtn = page.locator("button[class='button2 button-large button-primary mt-4']");
    this.transactionBtn = page.locator("button[class='button2 button-large button-outline-link']");
    // page.getByRole('banner').getByRole('button').filter({ hasText: /^$/ });
    this.depositIcon = page.locator('div[class="flex justify-between"] a:nth-child(1)');
    this.transferIcon = page.locator('div[class="flex justify-between"] a:nth-child(2)');
    this.kycModalWindowClose = page.locator('button[class="button is-icon is-round is-flat is-big absolute -top-1 -right-1 md:top-3 md:right-3 z-30"]')
    this.balanceBar = page.locator("div[class='flex items-center justify-between']");
    // this.sections = page.locator("a.rounded-2xl");
    this.languageBtn = page.locator('div[data-testid="langBtn"]')
    this.servicesDropdown = page.locator("div[class='flex items-center gap-4 flex-nowrap hidden lg:flex']");
    this.servicesList = page.locator('div.dropdown-content-body div.panel.list a[class="list-el"]');
    this.personalIco = page.locator("div[class='inline-flex duration-300 cursor-pointer lg:p-1 lg:pr-2 rounded-full hover:bg-white']"); //not reversable if clicked
    this.personalList = page.locator('div[class="list"] a.list-el');

    this.refStatsBtn = page.locator('a[class="button is-link is-small mt-6"]');
    this.howPromoWorkBtn = page.locator('button[class="button is-link is-small mt-6"]');

    this.footerBBlink = page.locator('.text-accent');
    this.footerMail = page.locator('a[itemprop="email"]');
    this.footerInfoList = page.locator('div[class="flex flex-col gap-2"] a');
    this.footerFolloeUsList = page.locator('a[itemprop="sameAs"]');
    this.otcIcon = page.locator("img[alt='otc']").nth(0);
  }

  async serviceList(dropdown, list, expectedFields) {
    await dropdown.click();
    const count = await list.count();
    for (const expectedField of expectedFields) {
        let fieldFound = false;
        for (let i = 0; i < count; i++) {
            const text = await list.nth(i).textContent();
            if (text.includes(expectedField)) {
                const isVisible = await list.nth(i).isVisible();
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
    };

    async chooseLanguage(text = 'EN English') {
    await this.languageBtn.click();
    await this.page.waitForTimeout(500);
    await this.page.getByText(text).click();
    await this.page.waitForTimeout(500);
    };

    async closeModalWindow() {
        await this.kycModalWindowClose.click()
    };

    async findSectionByText(text){
        const section = this.page.getByRole('link', { name: (text) })
        await section.click(); 
    }

    async setTimeout(time) {
        return await this.page.waitForTimeout(time);
    };

    async clickDepositIcon(){
        await this.depositIcon.click()
    }

    async fetchBalance(symbol, url) {
        const response = await this.page.request.get(url);
        const balances = await response.json();
        console.log("Balances Data:", balances);  // Log to see the actual structure
        if (!Array.isArray(balances)) {
            console.error("The API response is not an array:", balances);
            return null;
        }
        const targetBalance = balances.find(b => b.symbol === symbol);
        return targetBalance ? targetBalance.available : null;
    }
}