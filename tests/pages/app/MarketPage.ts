const { expect } = require('@playwright/test');

exports.MarketPage = class MarketPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.proModeIdentifier = page.locator('input[type="checkbox"]').nth(0);
    this.proModeToggle = page.locator(".input-decorator").nth(0);
    this.marketAmountInput = page.locator("input[cy-data='Exchange amount field']");
    this.marketBuyButton = page.locator('button.button.is-success[type="submit"]');
    this.marketSellButton = page.locator('button.button.is-danger[type="submit"]');
    this.marketCurrentRateValue = page.locator('div.flex div.text-right').nth(0);
    this.marketCommissionValue = page.locator('div.flex div.text-right').nth(1);
    this.marketTotalValue = page.locator('div.flex div.text-right').nth(2);
    this.balanceHelper = page.locator("div[class='flex flex-row items-center flex-wrap gap-x-4 gap-y-2'] button[type='button']");
    this.buyTab = page.getByText('Buy', { exact: true }).nth(1);
    this.sellTab = page.getByText('Sell', { exact: true }).nth(1);
  }

  async shooseMarketSideTab(tab){
    if (tab == 'buy'){
        await this.buyTab.click();
    }
    if (tab == 'sell'){
        await this.sellTab.click();
    }
  }

  async extractFloatValueFromBalanceHelper() {
    await this.balanceHelper.waitFor({ state: 'visible', timeout: 5000 });
    const text = await this.balanceHelper.innerText();
    const matches = text.match(/[\d,]+\.\d+/);
    if (matches) {
      const numberWithoutCommas = matches[0].replace(/,/g, '');
      return parseFloat(numberWithoutCommas);
    } else {
      throw new Error('No valid number found in the string');
    }
  }



  normalizeNumber(value) {
    return parseFloat(value.replace(/,/g, ''));
  }

  async checkCurrentRateValues(amount, currency, buyAmountFrom, buyAmountUntil, buyCurrency) {
    const rateText = await this.marketCurrentRateValue.textContent(); // e.g., "1 USDT = 92.39 RUBR"
    const regex = /(\d+(?:,\d+)*(?:\.\d+)?)\s+([A-Z]+)\s+=\s+(\d+(?:,\d+)*(?:\.\d+)?)\s+([A-Z.]+)/;
    const match = rateText.match(regex);
    if (match) {
      const extractedAmount = match[1];
      const extractedCurrency = match[2];
      const extractedBuyAmount = match[3];
      const extractedBuyCurrency = match[4];
      const normalizedAmount = this.normalizeNumber(extractedAmount);
      const normalizedBuyAmount = this.normalizeNumber(extractedBuyAmount);
      expect(normalizedAmount).toBe(parseFloat(amount));
      expect(extractedCurrency).toBe(currency);
      expect(normalizedBuyAmount).toBeGreaterThanOrEqual(parseFloat(buyAmountFrom));
      expect(normalizedBuyAmount).toBeLessThanOrEqual(parseFloat(buyAmountUntil));
      expect(extractedBuyCurrency).toBe(buyCurrency);
    } else {
      throw new Error('Could not parse the rate text correctly');
    }
  }

 async amounToBuyByMarket(amount){
    await this.marketAmountInput.fill(`${amount}`);
    await this.page.waitForTimeout(1500);
 }

 async sellByMarket(){
    await this.marketSellButton.click();
 };

 async buyByMarket(){
    await this.marketBuyButton.click();
 };

 async proModeSwitcher(){
    const isProModeChecked = await this.proModeIdentifier.isChecked();
    if (!isProModeChecked) {
      await this.proModeToggle.click();
    } else {
      return 'You\'re already in pro mode subpage';
    }
};

    //cycle to buy/sell:
    convertCommaFloatToNumber(stringValue) {
    return parseFloat(stringValue.replace(',', '.'));
  }
  getRandomFloatBetween(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }
  async repeatBuy(side, times, amountFrom, amountUntil) {
    const minAmount = this.convertCommaFloatToNumber(amountFrom);
    const maxAmount = this.convertCommaFloatToNumber(amountUntil);

    if (side == 'buy'){
    for (let i = 0; i < times; i++) {
      // Generate random amount between amountFrom and amountUntil
      const randomAmount = this.getRandomFloatBetween(minAmount, maxAmount);
      await this.page.waitForTimeout(3000);
      await this.buyTab.click()
      // Fill the amount input field
      await this.marketAmountInput.fill(`${randomAmount}`);

      // Click the buy button
      await this.marketBuyButton.click();

      // Wait for 5seconds before repeating
      await this.page.waitForTimeout(5000);

      console.log(`Cycle ${i + 1}: Bought with amount ${randomAmount}`);
    }}
    if (side == 'sell'){
        for (let i = 0; i < times; i++) {
            await this.page.waitForTimeout(3000);
            await this.sellTab.click()
          // Generate random amount between amountFrom and amountUntil
          const randomAmount = this.getRandomFloatBetween(minAmount, maxAmount);
    
          // Fill the amount input field
          await this.marketAmountInput.fill(`${randomAmount}`);
    
          // Click the buy button
          await this.marketSellButton.click();
    
          // Wait for 7 seconds before repeating
          await this.page.waitForTimeout(7000);
    
          console.log(`Cycle ${i + 1}: Bought with amount ${randomAmount}`);
        }}

  }

}