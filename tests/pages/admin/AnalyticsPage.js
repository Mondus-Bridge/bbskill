const { expect } = require('@playwright/test');

exports.AnalyticsPage = class AnalyticsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.balancePage = page.locator('a[href="/analytics/balances"]');
    this.statisticsPage = page.locator('a[href="/analytics/usage"]');
    this.statisticsBaseCur = page.locator("input[placeholder='Base currency']");
    this.statisticsPeriodBtn = page.locator("input[placeholder='Period']");
    this.statisticsMetrics = page.locator('td[title="Metric"] div');

    this.lendEarnPage = page.locator('a[href="/analytics/lendings"]');
    this.usersSubPage = page.locator('a[href="/analytics/balances/users"]');
    this.userHeadersRow = page.locator('tr th');
    this.nodesSubPage = page.locator('a[href="/analytics/balances/nodes"]');
    this.nodesList = page.locator('div[class="button-tab"]');
    this.nodesListNetwork = page.locator('div[class="button-tabs invisible-scrollbar is-small is-stretch"] div.button-tab');
    this.nodesMinInput = page.locator("input[placeholder='Minimum balance']");
    this.nodesDistributeFeeBtn = page.locator(".button.is-yellow.is-normal");
    this.nodesWithdrawBtn = page.locator(".button.is-success.is-normal");
    this.nodesSettingIco = page.locator(".button.is-icon.is-outline.is-normal");
    this.closeModal = page.locator("button.button.is-icon.is-round");
    this.saveBtn = page.locator(".button.is-primary.is-big");
    this.nodesAdressColumn = page.locator('title="Address"');
    

    this.exchangesSubPage = page.locator('a[href="/analytics/balances/exchanges"]');
    this.forTheDay = page.locator('a[href="/analytics/lendings/statistics-daily"]');
    this.forTheWeek = page.locator('a[href="/analytics/lendings/statistics-weekly"]');
    this.forCurrencyInput = page.getByRole('textbox');
    this.detailed = page.locator('a[href="/analytics/lendings/statistics-detailed"]');
    this.tableHeader = page.locator('tr th');
    this.currencyColumn = page.locator('td[class="is-label-hidden"]');
    this.confirmedColumn = page.locator('td[title="Confirmed balance"]'); 
    this.availableColumn = page.locator('td[title="Available"]');
}

async findCoin (coin, network) {
    await this.nodesList.filter({hasText: coin}).click()
    await this.page.waitForTimeout(2000); 
    if (network) {
        await this.nodesListNetwork.filter({hasText: network}).click()
    }
};

async assertCryptoAddress(locator, network) {
    const count = await locator.count();
    const regexPatterns = {
        "Bitcoin": /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/, 
        "Bep-20": /^0x[A-Fa-f0-9]{40}$/,
        "TRX": /^T[a-zA-Z0-9]{33}$/,
        "Ton": /^[EQ][A-Za-z0-9_-]{47}$/,
        "Atom": /^cosmos1[a-z0-9]{38}$/
    };
    const regex = regexPatterns[network];
    if (!regex) {
        throw new Error(`Network ${network} is not supported.`);
    }

    for (let i = 0; i < count; i++) {
        const text = await locator.nth(i).textContent();
        const isValid = regex.test(text.trim());
        if (!isValid) {
            throw new Error(`The address ${text} is not valid for the network ${network}.`);
        }
    }
    return true;
}


}