const { expect } = require('@playwright/test');

exports.LendingPage = class LendingPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.menuBtnOpen = page.getByRole('button');
    this.menuBtnClose = page.locator('.p-2.bg-monochrome-zero.rounded-full');
    this.signUpArea = page.locator("div[class='w-[610px] panel row section']").nth(0);
    this.rateArea = page.locator("div[class='flex flex-row gap-2 lg:gap-6 overflow-x-auto w-full max-w-screen-xl']");
    this.ppArea = page.getByText('Last updated: November 20, 2024This Privacy Policy describes Our policies and');
    this.oldPagesArea = page.locator("div[class='flex flex-col w-full']");
    this.investCarousel = page.getByText('Bitbanker Investment Products');
    this.investWithBB = page.getByRole('main').locator('div').filter({ hasText: 'Invest with BitbankerReady to' }).nth(2);
    this.investPartner = page.getByRole('main').locator('div').filter({ hasText: 'Partner programRecommend' }).nth(3);
    this.investEssentials = page.getByRole('main').locator('div').filter({ hasText: 'Investment EssentialsWhat is' }).nth(2);
    this.investEarningStep = page.getByText('Start earningStep 1Sign up');
    this.investFaq = page.getByText('Want to start investing? Here\'s what you need to knowHow much do you need to');
    this.investFaqWhat = page.getByText('What is an investment');
    this.investFaqIconClose = page.locator('svg[class="icon size-6"]');
    this.investFaqDiff = page.getByText('What’s the difference between');
    this.investFirstProduct = page.getByLabel('1 /').getByRole('link', { name: 'Learn more' });
    this.investProductMain = page.locator("main.flex-1.w-full");
    this.menu = page.getByRole('button').filter({ hasText: /^$/ });
    this.changeLangToRu = page.getByText('Русский', { exact: true });
    this.invest69faq1 = page.getByText('На какой срок рассчитан продукт?')
    this.invest69faq1area = page.getByText('Доступные сроки инвестирования для стратегии «Продажа премии срочного фьючерсног')
    this.invest69faq2 = page.getByText('Какая ожидаемая доходность продукта?')
    this.invest69faq2area = page.getByText('Среднестатистическая доходность продукта предусматривает порядка 15');
    this.companyBlock = page.locator('#company-section div').first();
   
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