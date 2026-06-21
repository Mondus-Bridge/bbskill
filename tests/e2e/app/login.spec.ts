import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import { generate2FACode } from '../../utils/2fa.js';   
import { getRandomEmail } from '../../utils/randomEmail.js';

loadEnv(); 
getRandomEmail(); 
generate2FACode();
const SECRET_2FA = process.env.QA_PW2FA_SECRET
const code2fa = generate2FACode(SECRET_2FA);

let pm;

test.describe('Login tests', {
  tag: ['@app', '@prod']
},() => {
  test.beforeEach(async ({ page, context }) => {
    pm = new PomManager(page);
    await context.clearCookies()
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Login into application with valid credentials', async () => {
    try {
      const email = process.env.STANDART_EMAIL;
      const pass = process.env.PASSWORD;
      const loginUrl = `${process.env.BASE_URL}${process.env.LOGIN_URL}`;
      await pm.loginPage.goto(loginUrl);
      await pm.loginPage.login(email, pass);
      await pm.loginPage.page.waitForTimeout(5000);
      await expect(pm.mainPage.transactionBtn).toBeVisible();
    } catch (error) {
      console.error('Error during valid credentials login test:', error);
      throw error;
    }
  });

  test('Login into application with invalid credentials', async () => {
    try {
      const email = process.env.USER_1_EMAIL;
      const pass = process.env.WRONG_PASSWORD;
      const loginUrl = `${process.env.BASE_URL}${process.env.LOGIN_URL}`;
      await pm.loginPage.goto(loginUrl);
      await pm.loginPage.login(email, pass);
      const errorMessage = await pm.loginPage.getWrongCredentialsAlert();
      expect(errorMessage).toContain('Incorrect email or password');
    } catch (error) {
      console.error('Error during invalid credentials login test:', error);
      throw error;
    }
  });

  test('User auth with wrong 2fa code', async () => {
    try {
      const code = '111111';
      const email = process.env.ENABLED_2FA_EMAIL;
      const pass = process.env.PASSWORD;
      const loginUrl = `${process.env.BASE_URL}${process.env.LOGIN_URL}`;
      await pm.loginPage.goto(loginUrl);
      await pm.loginPage.login(email, pass);
      await pm.loginPage.clickAndType2faInput(code);
      const getErrorNotf = await pm.loginPage.getErrorNotification();
      expect(getErrorNotf).toContain('Invalid two-factor authentication code');
    } catch (error) {
      console.error('Error during 2FA code test:', error);
      throw error;
    }
  });

  test('2FA login test', async () => {
    try {
      const email = process.env.QA_PW2FA;
      const pass = process.env.PASSWORD;
      const loginUrl = `${process.env.BASE_URL}${process.env.LOGIN_URL}`;
      await pm.loginPage.goto(loginUrl);
      await pm.loginPage.login(email, pass);
      await pm.loginPage.page.waitForTimeout(3000);
      await pm.loginPage.clickAndType2faInput(code2fa);
      await pm.loginPage.page.waitForTimeout(5000);
      await expect(pm.mainPage.noBalanceBtn).toBeVisible();
    } catch (error) {
      console.error('Error during 2FA code test:', error);
      throw error;
    }
  });

  test('User sign-up with random email', async () => {
    try {
      const email = getRandomEmail();
      const pass = process.env.PASSWORD;
      const signUpUrl = `${process.env.BASE_URL}${process.env.SIGN_UP_URL}`
      await pm.loginPage.goto(signUpUrl);
      await pm.loginPage.signUP(email, pass);
      const selector = pm.loginPage.getEmailLinkSelector(email);
      expect(selector).toContain(email);
    } catch (error) {
      console.log('User can\'t sign-up with random email', error);
      throw error;
    }
  });
});