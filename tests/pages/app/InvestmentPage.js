const { expect } = require('@playwright/test');

exports.InvestmentPage = class InvestmentPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.investTitle = page.locator("h1[class='text-h2 md:text-h1']")
    this.firstParagraph = page.locator('div p').nth(0);
    this.secondParagraph = page.locator('div p').nth(1);
    this.thirdParagraph = page.locator('div p').nth(2);
    this.loadingSelector = page.locator('.is-loading.is-big.is-outline');
    this.backButton = page.locator('.button.is-icon.is-round');
    this.productTitle = page.getByRole('heading', { name: 'CnBTC' });
    this.productMotto = page.getByRole('heading', { name: 'Empowering your Bitcoin' });
    this.productFirstInvestButton = page.getByRole('button', { name: 'Invest' }).first();
    this.productLastInvestButton = page.getByRole('button', { name: 'Invest' }).last();
    this.productAbout = page.getByRole('heading', { name: 'About the product' });
    this.productAboutText = page.getByText('Discover profitable Bitcoin');
    this.productIdeaText = page.getByText('Invest in Bitcoin in China to');
    this.productYieldtText = page.getByText('Investing in Bitcoin in China');
    this.productProtectiontTextPartOne = page.getByText('Bitcoin investments in China ensure capital protection through secure');
    this.producPurchasePageTitle = page.getByRole('heading', { name: 'Buying an investment product' });
    this.productPurchaseDetailedButton = page.getByRole('button', { name: 'Detailed Terms' });
    this.productPurchaseButton = page.getByRole('button', {name: 'Buy CNB'});
    this.productPurchaseInputError = page.locator(".input-error");
    this.productPurchaseYouReceiveInput = page.locator("input[inputmode='numeric']");
    this.productPurchaseYouPayInput = page.locator("input[inputmode='decimal']");
    this.productPurchaseYouPayMin = page.locator('div[class="input-help whitespace-normal"] div div:nth-child(1)').nth(1);
    this.productCard = page.locator('.invest-page-header');
    this.productDescription = page.locator('.group.stretch.flex.flex-col.gap-14.section.row')
    }

    async extractNumberFromDiv() {
        const minText = await this.productPurchaseYouPayMin.textContent();
        const matches = minText.match(/min:\s*([\d,\.]+)\s*USDT/i);
        if (matches && matches.length > 1) {
            const cleanedNumber = matches[1].replace(/,/g, '');
            const numericValue = parseInt(cleanedNumber.split('.')[0], 10);
            return numericValue;
        } else {
            console.error('No valid number found in the string:', minText);
            return null;
        }
    }
    
    

    async fillYouRecieve (textNumber) {
        await this.productPurchaseYouReceiveInput.fill(textNumber)
    };
    
    async checkCardText(name, percent, description, learn, invest) {
        const productName = this.page.getByRole('heading', { name });
        const productPercent = this.page.getByText(percent).first();
        const productCardDescription = this.page.getByText(description);
        const productLearnButton = this.page.locator('.flex > button').filter({ hasText: learn }).first();
        const productInvestButton = this.page.getByRole('button').filter({ hasText: invest }).first();;

        await expect.soft(productName).toContainText(name);
        await expect.soft(productPercent).toContainText(percent);
        await expect.soft(productCardDescription).toContainText(description);
        await expect.soft(productLearnButton).toContainText(learn);
        await expect.soft(productInvestButton).toContainText(invest);
    }

    async checkTextOfIntro(text1, text2, text3) {
        await expect.soft(this.firstParagraph).toHaveText(text1);
        await expect.soft(this.secondParagraph).toHaveText(text2);
        await expect.soft(this.thirdParagraph).toHaveText(text3);
    }

    async loaded() {
        try {
            await this.loadingSelector.waitFor({ state: 'attached', timeout: 10000 });
            await this.loadingSelector.waitFor({ state: 'detached' });
        } catch (e) {
            console.log("Loader did not appear, skipping wait.");
        }
      }
}