import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { AppMobilePage } from '../pages/appMobilePage.js';
import { getRandomEmailMobile} from '../../utils/randomEmail.js';
loadEnv();
getRandomEmailMobile(); 

const baseAppUrl = `${process.env.BASE_URL}`;
const signUpUrl = `${process.env.BASE_URL}/auth/register/base`;
const env = process.env.TEST_ENV || 'dev'
let pm;
const emailForgot = 'qa+userforgotpass@bitbanker.org';
const emailRandom = getRandomEmailMobile(); 
const pass = 'qwertySUN123!'
const promo = 'mobile' //refer:qa+user1@bitbanker.org

test.describe("Visual Testing of Auth page", {
    tag: ['@mobileapp', '@prod']
  }, () => {
  test.beforeEach(async ({ page }) => {
    pm = new AppMobilePage(page);
    await pm.goto(baseAppUrl);
    await pm.wait(5000);
  });
  test('User forgot password, user want verif code', async () => {
    await pm.page.getByRole('button', { name: 'Forgot password?' }).click();
    await pm.wait(2000);
    await expect.soft(pm.forgotPassArea).toHaveScreenshot(`${env}-forgot-password.png`);
    await pm.authEmailInpt.fill(emailForgot);
    await pm.page.getByRole('button', {name: 'Send'}).click();
    await pm.wait(2000);
    await expect.soft(pm.forgotPassArea).toHaveScreenshot(`${env}-password-reset.png`);
    await pm.page.goBack();
    await pm.page.getByRole('button', { name: 'Forgot password?' }).click();
    await pm.authEmailInpt.fill(emailForgot);
    await pm.page.getByRole('button', { name: 'Already have a code' }).click();
    await pm.wait(2000);
    await expect.soft(pm.forgotPassArea).toHaveScreenshot(`${env}-change-password.png`);
    });

    test('Register new user', async () => {
        await pm.page.getByRole('button', { name: 'Sign Up' }).click();
        await pm.wait(5000);
        await expect.soft(pm.signUpArea).toHaveScreenshot(`${env}-signup-main.png`);
        await pm.signUpEmailInpt.fill(emailRandom);
        await pm.signUpPassInpt.fill(pass);
        await pm.signUpConfirmPassInpt.fill(pass);
        await pm.promocodeInpt.fill(promo);
        await pm.wait(2000);
        await pm.page.getByRole('button', {name: 'Sign up'}).click();
        await pm.wait(8000);
        await expect.soft(pm.signUpArea).toHaveScreenshot(`${env}-signup-entercode.png`,{
            mask: [pm.page.getByRole('link', { name: 'qa+' })],
            maxDiffPixelRatio: 0.03
        })
    });
});

test('Check Terms and Privacy policy links and files', async ({page}) => {
    pm = new AppMobilePage(page);
    await pm.goto(signUpUrl);
    await pm.wait(5000);
    const termBtn = pm.page.getByRole('link', { name: 'Terms of Use' }); 
    const policiBtn = pm.page.getByRole('link', { name: 'Privacy Policy' });
    await termBtn.scrollIntoViewIfNeeded();
    await expect(termBtn).toBeVisible();
    await expect(policiBtn).toBeVisible();
    await expect(termBtn).toHaveAttribute('href', 'https://main.cdn.aws.dev.bitbanker.org/wl/app.dev.bitbanker.org/documents/terms_en.pdf');
    await expect(policiBtn).toHaveAttribute('href', 'https://main.cdn.aws.dev.bitbanker.org/wl/app.dev.bitbanker.org/documents/policy_en.pdf');
    expect(async () => {
    await termBtn.tap();
    }).not.toThrow();
});