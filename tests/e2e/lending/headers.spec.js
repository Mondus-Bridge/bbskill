import { test, expect } from '@playwright/test';
import LendingPomManager  from '../../pages/lending/LendingPomManager';
let lending;
const baseUrl = `${process.env.BASE_LENDING_URL}`;

test.describe('Main page => Headers', {
    tag: ['@lending', '@prod', "@headers"]
  },() => {
    test.beforeEach(async ({ page }) => {
      lending = new LendingPomManager (page);
      await lending.helper.goto(baseUrl);
      await lending.lendingMainPage.page.waitForTimeout(5000);
    });

    test('Banner For businesses', async ({page}) => {
      await expect.soft(lending.page.getByRole('button', { name: 'For businesses' })).toBeVisible();
      await lending.page.getByRole('button', { name: 'For businesses' }).hover();
      const cryptoPaymentLink = lending.page.getByRole('link', { name: 'Crypto payment gateway A' });
      await cryptoPaymentLink.waitFor({ state: 'visible' });
      await cryptoPaymentLink.hover();
      await cryptoPaymentLink.click();
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(page).toHaveURL(/acquiring/);
    });

    test('Banner For individuals', async ({page}) => {
      test.setTimeout(40000);
      await expect.soft(lending.page.getByRole('button', { name: 'For individuals' })).toBeVisible();
      await lending.page.getByRole('button', { name: 'For individuals' }).hover();
      const exchangeLink = lending.page.getByRole('link', { name: 'Exchange Buy cryptocurrency' });
      await exchangeLink.waitFor({ state: 'visible' });
      await exchangeLink.hover();
      await exchangeLink.click();
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(page).toHaveURL(/exchange/);

      await lending.page.getByRole('button', { name: 'For individuals' }).hover();
      const OTCLink = lending.page.getByRole('link', { name: 'OTC Over-the-counter trading' });
      await OTCLink.waitFor({ state: 'visible' });
      await OTCLink.hover();
      await OTCLink.click();
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(page).toHaveURL(/otc/);

      await lending.page.getByRole('button', { name: 'For individuals' }).hover();
      const transfersLink = lending.page.getByRole('link', { name: 'Between users Transfers via' });
      await transfersLink.waitFor({ state: 'visible' });
      await transfersLink.hover();
      await transfersLink.click();
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(page).toHaveURL(/transfer/);

      await lending.page.getByRole('button', { name: 'For individuals' }).hover();
      const swiftLink = lending.page.getByRole('link', { name: 'SWIFT transfers Dollar' });
      await swiftLink.waitFor({ state: 'visible' });
      await swiftLink.hover();
      await swiftLink.click();
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(page).toHaveURL(/swift/);

      await lending.page.getByRole('button', { name: 'For individuals' }).hover();
      const p2pLink = lending.page.getByRole('link', { name: 'P2P transfers Deposit and' });
      await p2pLink.waitFor({ state: 'visible' });
      await p2pLink.hover();
      await p2pLink.click();
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(page).toHaveURL(/p2p/);

      await lending.page.getByRole('button', { name: 'For individuals' }).hover();
      const borrowLink = lending.page.getByRole('link', { name: 'Borrow money Borrow money At' });
      await borrowLink.waitFor({ state: 'visible' });
      await borrowLink.hover();
      await borrowLink.click();
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(page).toHaveURL(/borrow/);

      await lending.page.getByRole('button', { name: 'For individuals' }).hover();
      const depositLink = lending.page.getByRole('link', { name: 'Deposit money Up to 8% annual' });
      await depositLink.waitFor({ state: 'visible' });
      await depositLink.hover();
      await depositLink.click();
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(page).toHaveURL(/earn/);

      await lending.page.getByRole('button', { name: 'For individuals' }).hover();
      const investmentLink = lending.page.getByRole('link', { name: 'Investment products Income up' });
      await investmentLink.waitFor({ state: 'visible' });
      await investmentLink.hover();
      await investmentLink.click();
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(page).toHaveURL(/invest/);
    });
  });
