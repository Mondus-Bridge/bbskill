exports.LendingMainPage = class LendingMainPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.bbTitle = page.locator("img[title='bitbanker.org']");
      this.footer = page.locator("footer[class='flex flex-col items-center w-full bg-white row']");
      this.linkTrustPilot = page.locator('a[href="https://www.trustpilot.com/review/bitbanker.org?languages=all"]');
      this.reviewSliderBtn = page.locator("button[class='pagination-button'] svg").nth(1);
      this.buttons = page.locator('a.button');
      this.swiperMichael = page.locator("swiper-slide[aria-label='1 / 5']");
      this.swiperAlina = page.locator("swiper-slide[aria-label='2 / 5']");
      this.swiperKyle = page.locator("swiper-slide[aria-label='3 / 5']");
      this.swiperIsmael = page.locator("swiper-slide[aria-label='4 / 5']");
      this.swiperMrs = page.locator("swiper-slide[aria-label='5 / 5']");
      this.komersant = page.locator('img[alt="kommersant"]').nth(1);
      this.beincrypto = page.locator('img[alt="beincrypto"]').nth(1);
      this.login = page.locator("input[placeholder='Email']");
      this.telegaLink = page.locator("div[class='font-body'] a");
      this.faqComponentLinks = page.locator('a[class="group/faq-block"]');
      this.header = page.locator(".absolute.inset-0.app-header-bg.-z-10");
      this.footer = page.locator(".flex.flex-col.py-14.w-full.max-w-screen-xl");
      this.subBlocs = page.locator('div[class="font-body text-center font-bold mb-6 text-gray"]');
      this.curSlider = page.locator('div[class="flex gap-1 items-center leading-6 lg:leading-8 whitespace-nowrap font-body"]');
      this.rates = page.locator('div[class="flex gap-[2px] items-end"] span[class="font-h4"]');
      this.bsInstantly = page.locator("div.button-tabs.bg-gray-light.is-stretch div.button-tab").nth(0);
      this.bsExchange = page.locator("div.button-tabs.bg-gray-light.is-stretch div.button-tab").nth(1);
      this.bsOtc = page.locator("div.button-tabs.bg-gray-light.is-stretch div.button-tab").nth(2);
      this.otcTitle = page.locator("h1[class='font-h1 mb-8 lg:mb-10']");
      this.bsDropdown = page.locator("input[name='default-select-input-name']");
      this.cookiesBanner = page.locator('.app-cookies-banner.sticky.bottom-0.bg-white.z-10.w-full');
    }

    async removeCommas(locator) {
      const text = await locator.textContent();
      const floatValue = parseFloat(text.replace(/,/g, ''));
    
      return floatValue;
    }

    findBtn(text) {
      return this.buttons.filter({hasText: text})
    }

    faqLinks(text) {
      return this.faqComponentLinks.filter({hasText: text})
    }
    


}