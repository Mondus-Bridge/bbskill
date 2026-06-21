import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import {LendingPage} from '../pages/lendingPage.js';
loadEnv();
const baseUrl = `${process.env.BASE_LENDING_URL}`;
const usdtRubUrl = `${process.env.BASE_LENDING_URL}${process.env.USDT_RUB}`;
let pm;

test.describe("Buying cryptocurrencies Visual Testing", {
    tag: ['@lending', '@prod', '@mobile']
  }, () => {
  test.beforeEach(async ({ page }) => {
    pm = new LendingPage(page);
    await pm.goto(baseUrl);
    await pm.wait(5000);
    await pm.removeLandingBanner();
  });
    test('Flat test for Buying cryptocurrencies dropdown', async () => {
        await pm.wait(3000);
        const buyCurrency = await pm.page.getByText('Buying cryptocurrencies');
        buyCurrency.scrollIntoViewIfNeeded({timeout: 2000});
        buyCurrency.click();
        await pm.wait(300);
        await expect.soft(pm.page.getByRole('link', { name: 'Buy USDT for RUBR', exact: true }))
        .toHaveAttribute('href', 'https://dev.bitbanker.org/usdt-rub');
        await expect.soft(pm.page.getByRole('link', { name: 'Buy USDT for US dollars', exact: true }))
        .toHaveAttribute('href', 'https://dev.bitbanker.org/usdt-usd');
        await expect.soft(pm.page.getByRole('link', { name: 'Buy Bitcoin for RUBR', exact: true }))
        .toHaveAttribute('href', 'https://dev.bitbanker.org/btc-rub');
        await expect.soft(pm.page.getByRole('link', { name: 'Buy Bitcoin for USDT', exact: true }))
        .toHaveAttribute('href', 'https://dev.bitbanker.org/btc-usdt');
        await expect.soft(pm.page.getByRole('link', { name: 'Buy Ethereum for RUBR', exact: true }))
        .toHaveAttribute('href', 'https://dev.bitbanker.org/eth-rub');
        await expect.soft(pm.page.getByRole('link', { name: 'Buy Ethereum for USDT', exact: true }))
        .toHaveAttribute('href', 'https://dev.bitbanker.org/eth-usdt');
    });

    test('Screenshot and check usdt-rub page', async () => {
        await pm.wait(3000);
        const buyCurrency = await pm.page.getByText('Buying cryptocurrencies');
        buyCurrency.scrollIntoViewIfNeeded({timeout: 2000});
        buyCurrency.click();
        await pm.wait(300);
        const usdtRub = await pm.page.getByRole('link', { name: 'Buy USDT for RUBR', exact: true })
        usdtRub.click();
        await pm.wait(5000);
        await pm.removeLandingBanner();
        await expect.soft(pm.page.getByRole('main').locator('div').filter({ hasText: 'Buy USDT with' }).nth(2)).toHaveScreenshot('usdtWithRub.png');
    });
});

test.describe("Usdt-rub page Visual Testing", {
    tag: ['@lending', '@prod', '@mobile']
  }, () => {
  test.beforeEach(async ({ page }) => {
    pm = new LendingPage(page);
    await pm.goto(usdtRubUrl);
    await pm.wait(5000);
    await pm.removeLandingBanner();
  });

  test('Usdt-rub page', async () => {
    await pm.wait(5000);
    await expect.soft(pm.page.getByRole('main').locator('div').filter({ hasText: 'Buy USDT with' }).nth(2)).toHaveScreenshot('usdtWithRub.png');
    const curDropdown = await pm.page.locator("input.input").first();
    curDropdown.click();
    await pm.wait(500);
    await pm.page.getByText('Exchange Order Book').first().click();
    await pm.wait(3000);
    await pm.removeLandingBanner();
    await expect.soft(pm.page.getByRole('main').locator('div').filter({ hasText: 'Buy USDT with' }).nth(2)).toHaveScreenshot('exchangeUsdtRub.png');
    // curDropdown.click();
    // await pm.page.getByText('Buy via SBP').first().click();
    // await pm.wait(3000);
    // await expect.soft(pm.page.locator('.w-full.max-w-screen-xl.py-20.row.panel')).toHaveScreenshot('SbpUsdtRub.png');
    });
});