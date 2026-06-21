const { expect } = require('@playwright/test');
import { loadEnv } from '../../utils/envLoader'
loadEnv(); 

exports.PersonalPage = class PersonalPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.personalSectionsContent = page.locator('.panel.w-full.section.relative');
    this.personal = page.getByRole('link', { name: 'Profile Personal info' });
    this.personalTitle = page.locator(".text-h1");
    this.personalEmail = page.locator("div[cy-data='profile user email']");
    this.personalNickButton = page.locator(".button.is-icon.is-round.is-flat.is-normal.shrink-0");
    this.personalCurrency = page.locator("div[class='flex gap-2 items-center'] span");
    this.personalUserID = page.locator("div[cy-data='profile user number']");
    this.personaLogoTitle = page.locator(".h3.mb-0");
    this.personaLogoText = page.locator("div[class='text-small md:text-base xl:pr-20']");
    this.personalLogo = page.locator("input[type='file']")

    this.kyc = page.getByRole('link', { name: 'KYC Verification' });
    this.kycTitle = page.locator(".text-h1");
    this.kycUpgradeButton = page.locator("button[type='button']").first();
    this.kycApproved = page.locator('.pill.is-small.is-success');
    this.kycAlertTitle = page.locator("div[class='alert is-info mt-20'] div div[class='alert-title']");
    this.sumsabPlugin = page.locator(".panel.w-full");

    this.documents = page.getByRole('link', { name: 'Documents Forms and agreements' });
    this.documentsRow = page.locator(".button-tabs__bg_container");
    this.documentsRowTable = page.locator("th div.flex");

    this.notifications = page.getByRole('link', { name: 'Notifications Notification' });
    this.notificationsSwitcher = page.locator("div[cy-data='email notifications switcher']");
    this.notificationsEmail = page.locator("div[cy-data='email notifications']");
    this.notificationsConnectTelegramButton = page.locator('button[cy-data="telegram notifications link"]');
    this.notificationsConnectTelegramLinkButton = page.locator('button[cy-data="more telegram notifications link"]');
    this.notificationsNewSwitcher = page.locator("div[cy-data='email subscription switcher']");
    this.notificationsEmailSubs = page.locator("div[cy-data='email subscription']");

    this.security = page.getByRole('link', { name: 'Security Google Authenticator' });
    this.securityToggl = page.locator('div[cy-data="use 2FA switcher"]');
    this.security2faFaq = page.locator('a[cy-data="proile faq security link"]');
    this.securityPaswordTab = page.getByRole('link', { name: 'Password change' });
    this.securityGoogleTitle = page.locator('h2.h2');
    this.securityPass1Input = page.locator('input[cy-data="profile password field"]');
    this.securityPass2Input = page.locator('input[cy-data="profile confirm password field"]');
    this.changePasswordButton = page.locator('button[cy-data="change password button"]');
    this.changePassworAlert = page.locator('.input-error');

    this.logs = page.getByRole('link', { name: 'Logs Account events' });
    this.logsPerPage = page.locator('div[class="button-tabs is-small"]').nth(0);
    this.logsPaginator = page.locator('div[class="button-tabs is-small"]').nth(1);

    this.api = page.getByRole('link', { name: 'API Integration' });
    this.apiKey = page.locator("div[cy-data='profile api key']");
    this.apiSecret = page.locator("div[cy-data='profile api secret']");
    this.apiReissueButton = page.locator("button[cy-data='profile regenerate api key button']");
    this.apiWebhookInput = page.locator('input[cy-data="profile invoices webhook field"]');
    this.apiSaveButton = page.locator('button[cy-data="profile invoices webhook button"]');
    this.apiFaq = page.locator('button[cy-data="profile crypto merchant acquiring api doc link"]');

    this.referral = page.getByRole('link', { name: 'Promo codes Bitbanker' });
    this.refTitle = page.locator("h1.text-h2");
    this.refTotalTab = page.locator("div.button-tab").nth(0);
    this.refMonthTab = page.locator("div.button-tab").nth(1);
    this.refNoIncomeText = page.locator("div[class='text-monochrome-intensive']");
    this.refCreateButton = page.locator('button[cy-data="referral create promo-code button"]');
    this.refCreateButtonModalInput = page.locator("input[placeholder='For example: FRIENDS']");
    this.createRefButton = page.locator("button[class='button is-primary is-big']");
    this.closeModalBtn = page.locator('button[cy-data="referral create promo-code close modal button"]');
    this.myPromoCodes = page.locator('div[cy-data="referral stats expand button"]');
    this.promocode = page.locator("div[cy-data='referral promo-code code']").first();
    this.promocodeLink = page.locator("button[cy-data='referral promo-code link']").first();
    this.promocodeFaq = page.locator('button[cy-data="referral promo-codes faq link"]');

    this.addCompanyBtn = page.getByRole('link', { name: 'Add a company' });
    this.companyInnInpt = page.locator("input[name='inn']");
    this.companyContinueBtn = page.locator(".button.is-primary.is-big.w-fit");
    this.companyPreFilledInn = page.locator("input[value='7712040126']");
    this.companyPreFilledComnanyName = page.locator("input[value='ПАО \"АЭРОФЛОТ\"']");
    this.companyPreFilledCEO = page.locator("input[value='Александровский Сергей Владимирович']");
    this.companyPreFilledAddress = page.locator("input[value='г Москва, ул Арбат, д 1']");
    this.ceoInptError = page.locator("div[class='input-error'] span");
    this.companyPreFilledOGRN = page.locator("input[value='1027700092661']");
    this.companyPreFilledKPP = page.locator("input[value='770401001']");
    this.companyPreFilledRegDate = page.locator("input[value='21.06.1994']");
    this.companyPreFilledActivityType = page.locator("input[value='51.10.1 ']");
    this.companySendEmailInpt = page.locator("input[name='email']");
    this.companySendNickInpt = page.locator("input[name='nickname']");
    this.companyEditBtn = page.locator(".button.is-outline.is-normal.w-fit");
};


async checkPersonalFields(locator, expectedFields) {
  const count = await locator.count();
  for (const expectedField of expectedFields) {
      let fieldFound = false;
      for (let i = 0; i < count; i++) {
          const text = await locator.nth(i).textContent();
          if (text.includes(expectedField)) {
              const isVisible = await locator.nth(i).isVisible();
              if (isVisible) {
                  fieldFound = true;
                  break;
              }
          }
      }
      if (!fieldFound) {
          console.log(`Field '${expectedField}' not found or not visible.`);
          return false;
      }
  }
  return true;
}
}