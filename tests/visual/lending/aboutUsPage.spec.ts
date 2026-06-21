import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import {LendingPage} from '../pages/lendingPage.js';
loadEnv();
const baseUrl = `${process.env.BASE_LENDING_URL}${process.env.ABOUT_US}`;
const pressUrl = `${process.env.BASE_LENDING_URL}${process.env.PRESSKIT}`;
let pm;

test.describe("About Us Visual Testing", {
    tag: ['@lending', '@prod', '@mobile']
  }, () => {
  test.beforeEach(async ({ page }) => {
    pm = new LendingPage(page);
    await pm.goto(baseUrl);
    await pm.wait(5000);
    await pm.removeLandingBanner();
  });
test('Flat screenshots from About Us page', async () => {
    await pm.wait(5000);
    await expect.soft(pm.page).toHaveScreenshot('aboutUs-first.png');
    await expect.soft(pm.page.getByText('Bitbanker\'s Vision for 2025In'))
    .toHaveScreenshot('bb-roadmap.png');
    await expect.soft(pm.page.locator("footer"))
    .toHaveScreenshot('footer-local.png');
    const finance = await pm.page.getByText('Practical Finance Sign up');
    expect(finance).toHaveScreenshot('practicalFinance.png');
});

test('BB services links: Use specific links from About Us page, click it and take screenshots', async () => {
    await pm.wait(3000);
    await expect.soft(pm.page.locator('#section-capability').getByRole('link', { name: 'Buy instantly' }))
    .toHaveAttribute('href', '/instant');
    await expect.soft(pm.page.getByRole('link', { name: 'Buy with a limit or market' }))
    .toHaveAttribute('href', '/exchange');
    await expect.soft(pm.page.locator('#section-capability').getByRole('link', { name: 'OTC' }))
    .toHaveAttribute('href', '/otc');
    await expect.soft(pm.page.getByRole('link', { name: 'P2P Transfers', exact: true }))
    .toHaveAttribute('href', '/p2p');
    await expect.soft(pm.page.locator('#section-capability').getByRole('link', { name: 'Borrow money' }))
    .toHaveAttribute('href', '/borrow');
    await expect.soft(pm.page.getByRole('link', { name: 'Lend and earn passive income' }))
    .toHaveAttribute('href', '/earn');
    await expect.soft(pm.page.locator('#section-capability').getByRole('link', { name: 'Between users' }))
    .toHaveAttribute('href', '/transfer');
    await expect.soft(pm.page.getByRole('link', { name: 'SWIFT Transfer', exact: true }))
    .toHaveAttribute('href', '/swift');
    await expect.soft(pm.page.getByRole('link', { name: 'High-yield investment' }))
    .toHaveAttribute('href', '/invest');
    await expect(pm.page.locator("div[class='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 justify-items-center']"))
    .toHaveScreenshot('bb-services.png');
    const linkRef = await pm.page.getByRole('link', { name: 'Invite friends and earn' });
    expect.soft(linkRef).toHaveAttribute('href', expect.stringContaining('/faq#promo-codes.how-use-promo-link'));
    const linkRefCom = await pm.page.getByRole('link', { name: 'A month of commission-free' });
    expect.soft(linkRefCom).toHaveAttribute('href', expect.stringContaining('/faq#promo-codes.conditions-for-bonuses'));
    await linkRef.click();
    await pm.wait(5000);
    await pm.removeLandingBanner();
    await expect(pm.page).toHaveScreenshot('promocode-first.png');
    });

test('BB goals links: Use specific links from About Us page, click it and take screenshots', async () => {
    await pm.wait(5000);
    await expect(pm.page.locator('#section-goal div').filter({ hasText: 'Our goal is to create a' }).first())
    .toHaveScreenshot('bb-goals.png');
    await expect.soft(pm.page.getByRole('link', { name: 'Bitbanker media kit' }))
    .toHaveAttribute('href', 'https://drive.google.com/file/d/1GNs_cp1i3ZF-bERSp6tTaL_6cIonj7gy/view');
    const pressKitLink = await pm.page.getByRole('link', { name: 'Press kit' });
    await pressKitLink.click();
    await pm.wait(3000);
    await pm.removeLandingBanner();
    await expect(pm.page.getByText('Bitbanker Press KitAbout')).toHaveScreenshot('presskit.png');
    });

test('BB office links: Use specific links from About Us page, click it and take screenshots', async () => {
    await pm.wait(5000);
    await expect(pm.page.locator('#section-offices div').filter({ hasText: 'Bitbanker OfficesBitbanker is' }).nth(1))
    .toHaveScreenshot('bb-offices.png');
    await expect.soft(pm.page.getByRole('link', { name: 'Moscow office' }))
    .toHaveAttribute('href', 'https://maps.app.goo.gl/cJiA6ayYp5CWqrdEA');
    await expect.soft(pm.page.getByRole('link', { name: 'St. Petersburg office' }))
    .toHaveAttribute('href', 'https://maps.app.goo.gl/JMPiRK26A85DdvzJ9');
    await expect.soft(pm.page.getByRole('link', { name: 'Bishkek office' }))
    .toHaveAttribute('href', 'https://maps.app.goo.gl/f6ygLnpLvWPqtR3x6');
    await expect.soft(pm.page.getByRole('link', { name: 'Yekaterinburg office' }))
    .toHaveAttribute('href', 'https://maps.app.goo.gl/vDrVdJhMLfZfj6PTA');
    });
});

test.describe("Presskit Visual Testing", {
    tag: ['@lending', '@prod', '@mobile']
  }, () => {
  test.beforeEach(async ({ page }) => {
    pm = new LendingPage(page);
    await pm.goto(pressUrl);
    await pm.wait(3000);
    await pm.removeLandingBanner();
  });
    test('Pitchdeck screenshot', async () => {
        await pm.wait(2000);
        await pm.page.getByRole('link', { name: 'About Bitbanker (Pitch Deck)' }).click();
        await pm.wait(5000);
        await pm.removeLandingBanner();
        await expect.soft(pm.page.locator("#__nuxt")).toHaveScreenshot('pitchdeck-full.png');
    });
    test('Lps-integration screenshot', async () => {
        await pm.wait(2000);
        await pm.page.getByRole('link', { name: 'Local Payment Systems under One Roof: International Transfers Made Easy' }).click();
        await pm.wait(7000);
        await pm.removeLandingBanner();
        await expect.soft(pm.page.locator("#__nuxt")).toHaveScreenshot('lps-integration-full.png');
    });
    test('Bitbanker-money-lego screenshot', async () => {
        await pm.wait(2000);
        await pm.page.getByRole('link', { name: 'Bitbanker Money Lego' }).click();
        await pm.wait(7000);
        await pm.removeLandingBanner();
        await expect.soft(pm.page.locator("#__nuxt")).toHaveScreenshot('money-lego-full.png');
    });
    test('White-label-solutions screenshot', async () => {
        await pm.wait(2000);
        await pm.page.getByRole('link', { name: 'Bitbanker White Label' }).click();
        await pm.wait(7000);
        await pm.removeLandingBanner();
        await expect.soft(pm.page.locator("#__nuxt")).toHaveScreenshot('white-label-full.png');
    });
});