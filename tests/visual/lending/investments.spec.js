import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import {LendingPage} from '../pages/lendingPage.js';
loadEnv();
const baseUrl = `${process.env.BASE_LENDING_URL}${process.env.LENDING_INVEST}`;
let pm;

test.describe("Invest mobile", {
    tag: ['@lending', '@prod', '@mobile']
  }, () => {
  test.beforeEach(async ({ page }) => {
    pm = new LendingPage(page);
    await pm.goto(baseUrl);
    await pm.wait(5000);
    await pm.removeLandingBanner();
  });
    test('Invest page', async () => {
        await expect.soft(pm.page).toHaveScreenshot('investment-first.png');
        const targetCarousel= await pm.investCarousel;
        await targetCarousel.scrollIntoViewIfNeeded();
        await expect.soft(targetCarousel).toHaveScreenshot('investment-carousel.png');

        const targetInvestWithBB = await pm.investWithBB;
        await targetInvestWithBB.scrollIntoViewIfNeeded();
        await expect.soft(targetInvestWithBB).toHaveScreenshot('investWithBB.png');

        const targetInvestPartner = await pm.investPartner;
        await targetInvestPartner.scrollIntoViewIfNeeded();
        await expect.soft(targetInvestPartner).toHaveScreenshot('investPartner.png');

        const targetInvestEssentials = await pm.investEssentials;
        await targetInvestEssentials.scrollIntoViewIfNeeded();
        await expect.soft(targetInvestEssentials).toHaveScreenshot('investEssentials.png');

        const targetInvestEarningStep = await pm.investEarningStep;
        await targetInvestEarningStep.scrollIntoViewIfNeeded();
        await expect.soft(targetInvestEarningStep).toHaveScreenshot('investEarningStep.png');

        const targetInvestFaq = await pm.investFaq;
        await targetInvestFaq.scrollIntoViewIfNeeded();
        await expect.soft(targetInvestFaq).toHaveScreenshot('investFaq.png');

        const targetInvestFaqWhat = await pm.investFaqWhat;
        await targetInvestFaqWhat.scrollIntoViewIfNeeded();
        targetInvestFaqWhat.click();
        await pm.wait(500);
        await pm.removeLandingBanner();
        await expect.soft(pm.page).toHaveScreenshot('investFaqWhat.png');
        await pm.investFaqIconClose.click()
        await pm.wait(500);

        const targetInvestFaqDiff = await pm.investFaqDiff;
        await targetInvestFaqDiff.scrollIntoViewIfNeeded();
        targetInvestFaqDiff.click();
        await pm.wait(500);
        await pm.removeLandingBanner();
        await expect.soft(pm.page).toHaveScreenshot('investFaqDiff.png');
    });
    test('Check 1 product from en to ru', async () => {
        const targetInvestFirstProduct = await pm.investFirstProduct;
        await targetInvestFirstProduct.scrollIntoViewIfNeeded();
        targetInvestFirstProduct.click();
        await pm.wait(4000);
        const targetInvestProductMain = await pm.investProductMain;
        await pm.removeLandingBanner();
        await expect.soft(targetInvestProductMain).toHaveScreenshot('investProductMainEn.png');

        await pm.menu.click();
        await pm.wait(500);
        await pm.changeLangToRu.click();
        await pm.wait(4000);
        await pm.removeLandingBanner();
        await expect.soft(targetInvestProductMain).toHaveScreenshot('investProductMainRu.png');
    });
});