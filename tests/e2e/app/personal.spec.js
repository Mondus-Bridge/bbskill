import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const profileUrl = `${process.env.BASE_URL}${process.env.PROFILE_URL}`;
const email = `${process.env.USER_1_EMAIL}`;
const userId = `${process.env.USER_1_EMAIL_USER_ID}`;
const expectedDocValuesEn = ['Agreement (contract)', 'Description', 'Status'];
const expectedEventValuesEn = ['Date and time', 'Event', 'IP'];
const env = process.env.TEST_ENV || 'dev'

test.describe("Check visibility of Personal page", {
    tag: ['@app', '@profile', '@prod']
  }, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);
      await pm.loginPage.goto(profileUrl);
      await pm.walletPage.setTimeout(3000);
    });

    test.afterEach(async ({ page }) => {
      await page.close();
    });

    test('Check personal page for visibility', async()=>{
      await pm.walletPage.setTimeout(1000);
      await pm.personalPage.personal.click();
      const profile = 'Profile'
      await pm.walletPage.setTimeout(2000);
      await expect.soft(pm.page.getByRole('link', { name: profile  })).toContainText(profile);
      await expect.soft(pm.personalPage.personalEmail).toHaveText(email);
      await expect.soft(pm.personalPage.personalNickButton).toBeVisible();
      await expect.soft(pm.personalPage.personalCurrency).toBeVisible();
      await expect.soft(pm.personalPage.personalUserID).toHaveText(userId);
      await expect.soft(pm.personalPage.personaLogoTitle).toHaveText("Invoicing logo");
      await expect.soft(pm.personalPage.personaLogoText).toHaveText("This logo will automatically appear on all invoices you issue");
      await expect.soft(pm.personalPage.personalLogo).toBeVisible();
      await expect.soft(pm.personalPage.personalSectionsContent).toHaveScreenshot(`${env}-profile-content.png`);
    });

    test('Check kyc page for visibility', async()=>{
      await pm.walletPage.setTimeout(1000);
      await pm.personalPage.kyc.click();
      await expect.soft(pm.personalPage.kycTitle).toHaveText("KYC");
      await expect.soft(pm.personalPage.kycUpgradeButton).toBeEnabled();
      await expect.soft(pm.personalPage.kycApproved).toHaveText("approved");
      await pm.personalPage.kycUpgradeButton.click();
      await expect.soft(pm.personalPage.sumsabPlugin).toBeVisible();
      await expect.soft(pm.personalPage.personalSectionsContent).toHaveScreenshot(`${env}-kyc-content.png`);
    });

    test('Check documents page for visibility', async()=>{
      await pm.walletPage.setTimeout(1000);
      await pm.personalPage.documents.click();
      const conractText = 'Contracts'
      await expect.soft(pm.page.getByRole('heading', { name: conractText})).toHaveText(conractText);
      await expect.soft(pm.personalPage.documentsRow).toContainText("AllNot signedSignedUnder reviewDeclined")
      const allDocValuesExist = await pm.personalPage.checkPersonalFields(pm.personalPage.documentsRowTable, expectedDocValuesEn);
      expect.soft(allDocValuesExist).toBe(true); 
      await expect.soft(pm.personalPage.personalSectionsContent).toHaveScreenshot(`${env}-documents-content.png`);
    });

    test('Check notifications page for visibility', async({ context })=>{
      await pm.walletPage.setTimeout(1000);
      await pm.personalPage.notifications.click();
      await expect.soft(pm.page.locator('h1')).toHaveText("Notifications");
      await expect.soft(pm.personalPage.notificationsSwitcher).toBeVisible();
      await expect.soft(pm.personalPage.notificationsSwitcher).toBeEnabled();
      await expect.soft(pm.personalPage.notificationsEmail).toHaveText(email);
      await expect.soft(pm.personalPage.notificationsConnectTelegramButton).toHaveText("Connect Telegram bot");
      await expect.soft(pm.personalPage.notificationsConnectTelegramButton).toBeEnabled();
      await expect.soft(pm.personalPage.notificationsNewSwitcher).toBeVisible();
      await expect.soft(pm.personalPage.notificationsNewSwitcher).toBeEnabled();
      await expect.soft(pm.personalPage.notificationsEmailSubs).toHaveText(email);
      const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Wait for the new page (tab) to open
        pm.personalPage.notificationsConnectTelegramLinkButton.click() // Perform the click that opens the new tab
      ]);
      await pm.walletPage.setTimeout(2000);
      await expect(newPage).toHaveURL(/.*faq#registration-and-receipt-of-telegram.connect-telegram-bot/);
      await newPage.close();
      await expect.soft(pm.personalPage.personalSectionsContent).toHaveScreenshot(`${env}-notifications-content.png`);
    });

    test('Check security page', async()=>{
      await pm.walletPage.setTimeout(1000);
      await pm.personalPage.security.click();
      await expect.soft(pm.page.locator('h1')).toHaveText("Security");
      await pm.personalPage.securityToggl.click();
      await pm.walletPage.setTimeout(2000);
      await expect.soft(pm.personalPage.securityGoogleTitle).toHaveText("Google Authenticator setup");
      await expect.soft(pm.personalPage.personalSectionsContent).toHaveScreenshot(`${env}-2fa-content.png`);
      await pm.personalPage.securityToggl.click();
      await pm.walletPage.setTimeout(2000);
      await expect.soft(pm.personalPage.securityGoogleTitle).not.toBeVisible();
      await pm.personalPage.securityPaswordTab.click();
      await pm.walletPage.setTimeout(500);
      await expect.soft(pm.personalPage.securityPass1Input).toBeVisible();
      await expect.soft(pm.personalPage.securityPass2Input).toBeVisible();
      await expect.soft(pm.personalPage.changePasswordButton).toBeEnabled();
      await expect.soft(pm.personalPage.personalSectionsContent).toHaveScreenshot(`${env}-password-content.png`);
      await pm.personalPage.changePasswordButton.click();
      await pm.walletPage.setTimeout(500);
      await expect.soft(pm.personalPage.changePassworAlert).toHaveText("Required field");
      await pm.personalPage.securityPass1Input.fill(`${process.env.PASSWORD}`);
      await pm.personalPage.changePasswordButton.click();
      await pm.walletPage.setTimeout(500);
      await expect.soft(pm.personalPage.changePassworAlert).toHaveText("Passwords do not match.");
      await pm.personalPage.securityPass2Input.fill("invalid password");
      await pm.personalPage.changePasswordButton.click();
      await pm.walletPage.setTimeout(500);
      await expect.soft(pm.personalPage.changePassworAlert).toHaveText("Passwords do not match.");
    });

    test('Check logs page', async()=>{
      await pm.walletPage.setTimeout(1000);
      await pm.personalPage.logs.click();
      const logsText = 'Event logging'
      await expect.soft(pm.page.getByRole('heading', { name: logsText })).toHaveText(logsText);
      await pm.acquiringPage.loaded()
      const allEventValuesExist = await pm.personalPage.checkPersonalFields(pm.personalPage.documentsRowTable, expectedEventValuesEn);
      expect.soft(allEventValuesExist).toBe(true); 
      await pm.page.keyboard.press('Space');
      await pm.walletPage.setTimeout(1000);
      await expect.soft(pm.personalPage.logsPerPage).toBeVisible();
      await expect.soft(pm.personalPage.logsPaginator).toBeVisible();
      await expect.soft(pm.personalPage.personalSectionsContent).toHaveScreenshot(`${env}-logs-content.png`);
    });

    test('Check api page', async({ context })=>{
      await pm.walletPage.setTimeout(1000);
      await pm.personalPage.api.click();
      const apiText = 'API integration'
      await expect.soft(pm.page.getByRole('heading', { name: apiText })).toHaveText(apiText);
      await expect.soft(pm.personalPage.apiKey).toHaveText(`${process.env.APIKEY_USER_1}`);
      await expect.soft(pm.personalPage.apiReissueButton).toBeEnabled();
      await expect.soft(pm.personalPage.personalSectionsContent).toHaveScreenshot(`${env}-api-content.png`);
    });

    test('Check referral page', async({ context })=>{
      await pm.walletPage.setTimeout(1000);
      await pm.personalPage.referral.click();
      await pm.acquiringPage.loaded();
      await expect.soft(pm.personalPage.refTitle).toHaveText("My promo codes");
      await expect.soft(pm.personalPage.personalSectionsContent).toHaveScreenshot(`${env}-referal-content.png`);
      await pm.personalPage.refTotalTab.click();
      await pm.acquiringPage.loaded();
      await expect.soft(pm.personalPage.refNoIncomeText).toHaveText("You don't have income from promo codes yet");
      await pm.personalPage.refMonthTab.click();
      await pm.acquiringPage.loaded();
      await expect.soft(pm.personalPage.refNoIncomeText).toHaveText("You don't have income from promo codes yet");
      await pm.personalPage.refCreateButton.click();
      await expect.soft(pm.personalPage.refCreateButtonModalInput).toHaveAttribute('placeholder', 'For example: FRIENDS');
      await pm.personalPage.createRefButton.click();
      await expect.soft(pm.personalPage.changePassworAlert).toHaveText("Required field");
      await pm.personalPage.closeModalBtn.click();
      await expect.soft(pm.personalPage.myPromoCodes).toHaveText('My promo codes');
      await expect.soft(pm.personalPage.promocode).toHaveText(`${process.env.PROMOCODE_USER_1}`);
      await expect.soft(pm.personalPage.promocodeLink).toHaveText(`${process.env.BASE_URL}?ref=${process.env.PROMOCODE_USER_1}`);
      const [newPage] = await Promise.all([
        context.waitForEvent('page'), 
        pm.personalPage.promocodeFaq.click()
      ]);
      await pm.walletPage.setTimeout(2000);
      await expect(newPage).toHaveURL(/.*faq#promo-codes/);
      await newPage.close();
    });

    test('Add a Compnay functionality shouldn\'t be available for invalid user', async()=>{
      const inn = '7712040126';
      const email = 'qa@bitbanker.org';
      const nick = 'parnik123'
      await pm.walletPage.setTimeout(1000);
      await pm.personalPage.personal.click();
      await pm.personalPage.addCompanyBtn.click();
      await pm.walletPage.setTimeout(300);
      await expect.soft(pm.personalPage.personalSectionsContent).toHaveScreenshot(`${env}-companyreg-content.png`);
      await pm.personalPage.companyInnInpt.fill(inn);
      await pm.personalPage.companyContinueBtn.click();
      await pm.walletPage.setTimeout(2500);
      await expect.soft(pm.personalPage.personalSectionsContent).toHaveScreenshot(`${env}-companydetails-content.png`);
      await expect.soft(pm.personalPage.companyPreFilledInn).toBeVisible();
      await expect.soft(pm.personalPage.companyPreFilledComnanyName).toBeVisible();
      await expect.soft(pm.personalPage.companyPreFilledCEO).toBeVisible();
      await expect.soft(pm.personalPage.companyPreFilledAddress).toBeVisible();
      await expect.soft(pm.personalPage.ceoInptError).toBeVisible();
      await expect.soft(pm.personalPage.companyPreFilledOGRN).toBeVisible();
      await expect.soft(pm.personalPage.companyPreFilledKPP).toBeVisible();
      await expect.soft(pm.personalPage.companyPreFilledRegDate).toBeVisible();
      await expect.soft(pm.personalPage.companyPreFilledActivityType).toBeVisible();
      await pm.page.keyboard.press('Space');

      await pm.personalPage.companySendEmailInpt.fill(email);
      await pm.personalPage.companySendNickInpt.fill(nick);
      for (let i=0 ; i > 10; i++) {
      await pm.personalPage.companyContinueBtn.click();
      };

      await expect(pm.personalPage.companyContinueBtn).toBeEnabled();
      await expect(pm.personalPage.companyContinueBtn).toBeVisible();

      await pm.personalPage.companyEditBtn.click();
      await pm.walletPage.setTimeout(1000);
      await expect.soft(pm.personalPage.companyInnInpt).toBeVisible();
    });
});
