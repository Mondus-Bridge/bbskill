import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const mainPageUrl = `${process.env.BASE_URL}`;

test.describe("Check avability and visibility of Main page of the app", {
    tag: ['@app', '@prod', '@main']
  }, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);
      await pm.loginPage.goto(mainPageUrl);
    });

    test('Check footer links info', async ({context})=> {
        const supportMail = pm.mainPage.footerMail;
        await expect.soft(supportMail).toBeVisible();

        const mailLink = pm.mainPage.footerBBlink;
        await expect.soft(mailLink).toBeVisible();
        await expect.soft(mailLink).toHaveText('LLC Bitbanker');
        const [newPage] = await Promise.all([
            context.waitForEvent('page'), 
            mailLink.click()
          ]);
          await pm.mainPage.setTimeout(2000);
          await expect(newPage).toHaveURL(/bitbanker\.org/);

        const pressKitText = 'Press kit'
        const pressKitLink = pm.mainPage.footerInfoList.filter({hasText: pressKitText});
        await expect.soft(pressKitLink).toBeVisible();
        await expect.soft(pressKitLink).toHaveText(pressKitText);
        const [pressKitPage] = await Promise.all([
            context.waitForEvent('page'), 
            pressKitLink.click()
          ]);
          await pm.mainPage.setTimeout(2000);
          await expect(pressKitPage).toHaveURL(/presskit/);

        const faqText = 'FAQ'
        const faqLink = pm.mainPage.footerInfoList.filter({hasText: faqText});
        await expect.soft(faqLink).toBeVisible();
        await expect.soft(faqLink).toHaveText(faqText);
        const [faqPage] = await Promise.all([
            context.waitForEvent('page'), 
            faqLink.click()
          ]);
          await pm.mainPage.setTimeout(3000);
          await expect(faqPage).toHaveURL(/#welcome-to-bitbanker\.about-company/);

        const tgText = 'Telegram-bot'
        const tgLink = pm.mainPage.footerInfoList.filter({hasText: tgText});
        await expect.soft(tgLink).toBeVisible();
        await expect.soft(tgLink).toHaveText(tgText);
        const [comissionPage] = await Promise.all([
            context.waitForEvent('page'), 
            tgLink.click()
          ]);
          await pm.mainPage.setTimeout(2000);
          await expect(comissionPage).toHaveURL(/notify_bot/);
    });

    test('Check Follow us links info', async ({context})=> {
        const bbNewsLink = pm.mainPage.footerFolloeUsList.nth(0)
        await expect.soft(bbNewsLink).toBeVisible();
        const [bbNewsPage] = await Promise.all([
            context.waitForEvent('page'), 
            bbNewsLink.click()
          ]);
          await pm.mainPage.setTimeout(1000);
          await expect(bbNewsPage).toHaveURL(/\/\/t\.me\/bitbanker_eng/);

        const bbUserLink = pm.mainPage.footerFolloeUsList.nth(1)
        await expect.soft(bbUserLink).toBeVisible();
        const [bbUserPage] = await Promise.all([
            context.waitForEvent('page'), 
            bbUserLink.click()
          ]);
          await pm.mainPage.setTimeout(1000);
          await expect(bbUserPage).toHaveURL(/\/\/t\.me\/bitbanker_users/);

        const bbVkLink = pm.mainPage.footerFolloeUsList.nth(2)
        await expect.soft(bbVkLink).toBeVisible();
        const linkHref = await bbVkLink.getAttribute('href');
        expect(linkHref).toContain('vk.com/bitbanker');

        const bbVcLink = pm.mainPage.footerFolloeUsList.nth(3)
        await expect.soft(bbVcLink).toBeVisible();
        const [bbVcPage] = await Promise.all([
            context.waitForEvent('page'), 
            bbVcLink.click()
          ]);
          await pm.mainPage.setTimeout(1000);
          await expect(bbVcPage).toHaveURL(/vc\.ru\/bitbanker/);

        const bbYoutubeLink = pm.mainPage.footerFolloeUsList.nth(4)
        await expect.soft(bbYoutubeLink).toBeVisible();
        const [bbYoutubePage] = await Promise.all([
            context.waitForEvent('page'), 
            bbYoutubeLink.click()
          ]);
          await pm.mainPage.setTimeout(1000);
          await expect(bbYoutubePage).toHaveURL(/youtube\.com\/\@bitbanker_org/);
    });
});