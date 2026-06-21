import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import {LendingPage} from '../pages/lendingPage.js';
loadEnv();
const baseUrl = `${process.env.BASE_LENDING_URL}`;
let pm;

test.describe("Homepage Visual Testing", {
    tag: ['@lending', '@prod', '@mobile']
  }, () => {
  test.beforeEach(async ({ page }) => {
    pm = new LendingPage(page);
    await pm.goto(baseUrl), {
      waitUntil: "domcontentloaded",  // Faster, waits only for HTML and scripts
      timeout: 60000,                 // Increased timeout to 60s
    };
    await pm.wait(5000);
    await pm.removeLandingBanner();
  });
test('Capture screenshot of homepage of the lending', async () => {
    await pm.wait(10000);
    await expect(pm.page).toHaveScreenshot('homepage-first.png');
    await expect(pm.page.locator('div div main')).toHaveScreenshot('homepage-main.png');
    const targetLocator = 'div div header';
    await pm.page.evaluate((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => el.remove());
      }, targetLocator);
    await pm.wait(1000);
    await pm.removeLandingBanner();
    await expect(pm.page.locator('div div footer')).toHaveScreenshot('homepage-footer.png');
    });
    
test('Capture screenshot of homepage menu, opent it, hide it', async () => {
    await pm.menuBtnOpen.click();
    await pm.wait(2000);
    await pm.removeLandingBanner();
    await expect(pm.page).toHaveScreenshot('homepage-menu-first.png');
    await pm.page.locator(".p-2.bg-monochrome-zero.rounded-full").click();
    await pm.wait(1000);
    await pm.removeLandingBanner();
    await expect(pm.page).toHaveScreenshot('homepage-first.png');
    });

test('User want to signup or loggin from homepage', async () => {
    await pm.page.getByRole('link', { name: 'Log in' }).click();
    await pm.wait(5000);
    await pm.removeLandingBanner();
    await expect(pm.page.locator('body main')).toHaveScreenshot('login-main.png');
    await pm.page.getByRole('button', { name: 'EN' }).click();
    await pm.removeLandingBanner();
    await expect(pm.page).toHaveScreenshot('login-language-first.png');
    await pm.wait(2000);
    await pm.removeLandingBanner();
    await expect(pm.page.locator('body footer')).toHaveScreenshot('login-footer.png');
    });

test('Homepage menu => Buy cryptocurrency', async () => {
    test.setTimeout(60000);
    await pm.wait(5000);
    await pm.menuBtnOpen.click();
    await pm.wait(1000);
    await pm.page.locator('#teleports').getByText('For individuals').click();
    await pm.wait(500);
    await pm.page.locator('#teleports').getByRole('link', { name: 'Buy instantly' }).click();
    await pm.wait(2000);
    await pm.removeLandingBanner();
    await expect.soft(pm.oldPagesArea).toHaveScreenshot('instant-full.png');
    await pm.menuBtnOpen.click();
    await pm.page.locator('#teleports').getByText('For individuals').click();
    await pm.wait(500);
    await pm.page.locator('#teleports').getByRole('link', { name: 'Exchange' }).click();
    await pm.wait(2000);
    await pm.removeLandingBanner();
    await expect.soft(pm.oldPagesArea).toHaveScreenshot('exchange-full.png');
    await pm.menuBtnOpen.click();
    await pm.page.locator('#teleports').getByText('For individuals').click();
    await pm.wait(500);
    await pm.page.locator('#teleports').getByRole('link', { name: 'OTC' }).click();
    await pm.wait(2000);
    await pm.removeLandingBanner();
    await expect.soft(pm.page).toHaveScreenshot('otc-full.png', {
      fullPage: true
    });
    });

    test('Homepage menu => Asset Transfers', async () => {
      await pm.wait(2000);
      await pm.menuBtnOpen.click();
      await pm.wait(500);
      await pm.page.locator('#teleports').getByText('For individuals').click();
      await pm.wait(500);
      await pm.page.getByRole('link', { name: 'Between Bitbanker users'}).click();
      await pm.wait(4000);
      await pm.removeLandingBanner();
      await expect.soft(pm.oldPagesArea).toHaveScreenshot('inerTransfers-full.png');
    });

   test('Homepage menu => Deposit and Withdraw', async () => {
      await pm.wait(5000);
      await pm.menuBtnOpen.click();
      await pm.wait(500);
      await pm.page.locator('#teleports').getByText('For individuals').click();
      await pm.wait(500);
      await pm.page.getByRole('link', { name: 'P2P deposits and withdrawals', exact: true }).click();
      await pm.wait(2000);
      await pm.removeLandingBanner();
      await expect.soft(pm.page).toHaveScreenshot('P2P-full.png', {
        fullPage: true
      });
    });

    test('Homepage menu => Lend and Borrow', async () => {
      test.setTimeout(40000);
      await pm.menuBtnOpen.click();
      await pm.wait(500);
      await pm.page.locator('#teleports').getByText('For individuals').click();
      await pm.wait(500);
      await pm.page.getByRole('link', { name: 'Loans in RUBR and USDT' }).click();
      await pm.wait(2000);
      await pm.removeLandingBanner();
      await expect.soft(pm.oldPagesArea).toHaveScreenshot('borrow-full.png');
      await pm.page.getByRole('button').filter({ hasText: /^$/ }).click();
      await pm.wait(500);
      await pm.page.locator('#teleports').getByText('For individuals').click();
      await pm.wait(500);
      await pm.page.getByRole('link', { name: 'Interest accounts in RUBR and' }).click();
      await pm.wait(2000);
      await pm.removeLandingBanner();
      await expect.soft(pm.oldPagesArea).toHaveScreenshot('deposit-full.png');
  });
    test('Homepage menu => For Businesses', async () => {
      test.setTimeout(40000);
      await pm.menuBtnOpen.click();
      await pm.wait(500);
      await pm.page.locator('#teleports').getByText('For Businesses').click();
      await pm.wait(500);
      await pm.page.getByRole('link', { name: 'Crypto Payment Processing', exact: true }).click();
      await pm.wait(4000);
      await pm.removeLandingBanner();
      await expect.soft(pm.page).toHaveScreenshot('crypto-payment-full.png', {
        fullPage: true
      });

      await pm.menuBtnOpen.click();
      await pm.wait(500);
      await pm.page.locator('#teleports').getByText('For Businesses').click();
      await pm.wait(500);
      await pm.page.getByRole('link', { name: 'A turnkey business in a' }).click();
      await pm.wait(2000);
      await pm.removeLandingBanner();
      await expect.soft(pm.page).toHaveScreenshot('franchise-full.png', {
        fullPage: true
      });

      await pm.menuBtnOpen.click();
      await pm.wait(500);
      await pm.page.locator('#teleports').getByText('For Businesses').click();
      await pm.wait(500);
      await pm.page.getByRole('link', { name: 'Create a business account' }).click();
      await pm.wait(2000);
      await pm.removeLandingBanner();
      await expect.soft(pm.companyBlock).toHaveScreenshot('company-section.png');
  });
});

