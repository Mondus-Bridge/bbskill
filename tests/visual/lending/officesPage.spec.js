import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import {LendingPage} from '../pages/lendingPage.js';
loadEnv();
const baseUrl = `${process.env.BASE_LENDING_URL}`;
let pm;

test.describe("Offices and exchangers Visual Testing", {
    tag: ['@lending', '@prod', '@mobile']
  }, () => {
  test.beforeEach(async ({ page }) => {
    pm = new LendingPage(page);
    await pm.goto(baseUrl);
    await pm.wait(5000);
    await pm.removeLandingBanner();
  });
    test('Flat test for offices dropdown', async () => {
        await pm.wait(3000);
        const exchangers = await pm.page.getByText('Offices and exchangers');
        exchangers.scrollIntoViewIfNeeded({timeout: 2000});
        exchangers.click();
        await pm.wait(300);
        const moscow = await pm.page.getByRole('contentinfo').getByRole('link', { name: 'Moscow' });
        await expect.soft(moscow).toHaveAttribute('href', 'https://dev.bitbanker.org/exchangers/moscow');
        await expect.soft(pm.page.getByRole('link', { name: 'St. Petersburg', exact: true })).toHaveAttribute('href', 'https://dev.bitbanker.org/exchangers/stpetersburg');
        await expect.soft(pm.page.getByRole('link', { name: 'Stavropol', exact: true })).toHaveAttribute('href', 'https://dev.bitbanker.org/exchangers/stavropol');
        await expect.soft(pm.page.getByRole('contentinfo').getByRole('link', { name: 'Yekaterinburg' })).toHaveAttribute('href', 'https://dev.bitbanker.org/exchangers/yekaterinburg');
        await expect.soft(pm.page.getByRole('contentinfo').getByRole('link', { name: 'Rostov-on-Don' })).toHaveAttribute('href', 'https://dev.bitbanker.org/exchangers/rostov-on-don');
        await expect.soft(pm.page.getByRole('contentinfo').getByRole('link', { name: 'Voronezh', exact: true })).toHaveAttribute('href', 'https://dev.bitbanker.org/exchangers/voronezh');
        await expect.soft(pm.page.getByRole('link', { name: 'Ulan-Ude', exact: true })).toHaveAttribute('href', 'https://dev.bitbanker.org/exchangers/ulan-ude');
        await expect.soft(pm.page.getByRole('contentinfo').getByRole('link', { name: 'Bishkek', exact: true })).toHaveAttribute('href', 'https://dev.bitbanker.org/exchangers/bishkek');
        });
    test('Screenshot and check Moscow page', async () => {
        const exchangers = await pm.page.getByText('Offices and exchangers');
        exchangers.scrollIntoViewIfNeeded({timeout: 2000});
        exchangers.click();
        await pm.wait(300);
        const moscowOff = await pm.page.getByRole('contentinfo').getByRole('link', { name: 'Moscow' });
        moscowOff.click();
        await pm.wait(7000);
        await pm.removeLandingBanner();
        await expect.soft(pm.page).toHaveScreenshot('moscow-first.png')
        await expect.soft(pm.page.locator('.relative > div:nth-child(2) > div > div').first()).toHaveScreenshot('bb-offices.png');
    });
});