import { test, expect } from '@playwright/test';
import LendingPomManager  from '../../pages/lending/LendingPomManager';
let lending;
const baseUrl = `${process.env.BASE_LENDING_URL}`;

test.describe('Check Main page of Lending', {
    tag: ['@lending', '@prod']
  },() => {
    test.beforeEach(async ({ page }) => {
      lending = new LendingPomManager (page);
      await lending.helper.goto(baseUrl);
    });

    test('Check sections parts of Main page', async () => {
      await expect.soft(lending.lendingMainPage.reviewSliderBtn).toBeVisible(); 
      await expect.soft(lending.lendingMainPage.swiperMichael).toBeVisible(); 
      await expect.soft(lending.lendingMainPage.swiperAlina).toBeVisible();
      await expect.soft(lending.lendingMainPage.swiperKyle).toBeVisible(); 
      await expect.soft(lending.lendingMainPage.swiperIsmael).toBeVisible();
      await expect.soft(lending.lendingMainPage.swiperMrs).toBeVisible();
      await expect.soft(lending.lendingMainPage.komersant).toBeVisible();
      await expect.soft(lending.lendingMainPage.beincrypto).toBeVisible();
      await expect.soft(lending.lendingMainPage.header).toBeVisible();
      await expect.soft(lending.lendingMainPage.footer).toBeVisible();
      await expect.soft(lending.lendingMainPage.subBlocs.filter({ hasText: 'User-to-user money transfers' })).toBeVisible();
      await expect.soft(lending.lendingMainPage.subBlocs.filter({ hasText: 'SWIFT transfers' })).toBeVisible();
      await expect.soft(lending.lendingMainPage.subBlocs.filter({ hasText: 'Crypto payment gateway' })).toBeVisible();
      await expect.soft(lending.lendingMainPage.subBlocs.filter({ hasText: 'Buy & Sell' })).toBeVisible();
      await expect.soft(lending.lendingMainPage.subBlocs.filter({ hasText: 'Investing' })).toBeVisible();
      await expect.soft(lending.lendingMainPage.subBlocs.filter({ hasText: 'Notifications' })).toBeVisible();
      await expect.soft(lending.lendingMainPage.subBlocs.filter({ hasText: 'P2P deposits and withdrawals' })).toBeVisible();
      await expect.soft(lending.lendingMainPage.subBlocs.filter({ hasText: 'Loans' })).toBeVisible();
      await expect.soft(lending.lendingMainPage.subBlocs.filter({ hasText: 'Staking deposits' })).toBeVisible();
    });

    test('Check rates', async () => {
      await lending.lendingMainPage.page.waitForTimeout(10000);

      await expect.soft(lending.lendingMainPage.curSlider.filter({ hasText: 'USD.RUS Dollar (Russia)' })).toBeVisible();
      const usdrRate = await lending.lendingMainPage.removeCommas(lending.lendingMainPage.rates.nth(0));
      expect(usdrRate).toBeGreaterThanOrEqual(85.10);
      expect(usdrRate).toBeLessThanOrEqual(100.10);

      await expect.soft(lending.lendingMainPage.curSlider.filter({ hasText: 'ETHEther' }).nth(0)).toBeVisible();
      const ethRubRate = await lending.lendingMainPage.removeCommas(lending.lendingMainPage.rates.nth(1));
      expect(ethRubRate).toBeGreaterThanOrEqual(218265.00);
      expect(ethRubRate).toBeLessThanOrEqual(258265.00);

      await expect.soft(lending.lendingMainPage.curSlider.filter({ hasText: 'USDTTether USD' })).toBeVisible();
      const usdtRubRate = await lending.lendingMainPage.removeCommas(lending.lendingMainPage.rates.nth(2));
      expect(usdtRubRate).toBeGreaterThanOrEqual(95.00);
      expect(usdtRubRate).toBeLessThanOrEqual(100.00);

      await expect.soft(lending.lendingMainPage.curSlider.filter({ hasText: 'BTCBitcoin' })).toBeVisible();
      const btcUsdrRate = await lending.lendingMainPage.removeCommas(lending.lendingMainPage.rates.nth(3));
      expect(btcUsdrRate).toBeGreaterThanOrEqual(58255.00);
      expect(btcUsdrRate).toBeLessThanOrEqual(65255.00);

      await expect.soft(lending.lendingMainPage.curSlider.filter({ hasText: 'ETHEther' }).nth(1)).toBeVisible();
      const ethUsdrRate = await lending.lendingMainPage.removeCommas(lending.lendingMainPage.rates.nth(4));
      expect(ethUsdrRate).toBeGreaterThanOrEqual(2100.00);
      expect(ethUsdrRate).toBeLessThanOrEqual(2700.00);
    });

    test('Check Buy & Sell widgets', async () => {
      await lending.lendingMainPage.page.waitForTimeout(5000);
      await lending.lendingMainPage.bsInstantly.click();
      await expect.soft(lending.lendingMainPage.bsDropdown).toHaveValue("Tether USD/Euro")

      await lending.lendingMainPage.bsExchange.click();
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(lending.lendingMainPage.bsDropdown).toHaveValue("Tether USD/Ruble Coin")

      await lending.lendingMainPage.bsOtc.click();
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(lending.lendingMainPage.otcTitle).toBeVisible();

    });

    test('Check links of Main page Part 1', async ({context}) => {
        test.setTimeout(40000);
        await expect.soft(lending.lendingMainPage.bbTitle).toBeVisible();
        const logIn = lending.lendingMainPage.findBtn("Log in")
        await expect.soft(logIn).toBeVisible();
        const url = await logIn.getAttribute('href');
        const newPage = await context.newPage();
        await newPage.goto(url);
        await lending.lendingMainPage.page.waitForTimeout(2000);
        await expect.soft(newPage).toHaveURL(/\/auth\/login\?external=true/);
        await newPage.close();

        const signUp = lending.lendingMainPage.findBtn("Sign Up").nth(0);
        await expect.soft(signUp).toBeVisible();
        const url2 = await signUp.getAttribute('href');
        const newPage2 = await context.newPage();
        await newPage2.goto(url2);
        await lending.lendingMainPage.page.waitForTimeout(2000);
        await expect.soft(newPage2).toHaveURL(/\/auth\/register\?external=true/);
        await newPage2.close();

        const signUp2 = lending.lendingMainPage.findBtn("Sign Up").nth(1);
        await expect.soft(signUp2).toBeVisible();
        const url3 = await signUp2.getAttribute('href');
        const newPage3 = await context.newPage();
        await newPage3.goto(url3);
        await lending.lendingMainPage.page.waitForTimeout(2000);
        await expect.soft(newPage3).toHaveURL(/\/auth\/register\?external=true/);
        await newPage3.close();
    
        const getStarted = lending.lendingMainPage.findBtn("Get started")
        await expect.soft(getStarted).toBeVisible();
        const [newPage4] = await Promise.all([
          context.waitForEvent('page'), 
          getStarted.click() 
        ]);
        await lending.lendingMainPage.page.waitForTimeout(2000);
        await expect.soft(newPage4).toHaveURL(/\/auth\/register\?external=true/);
        await newPage4.close();
    });

    test('Check links of Main page Part 2', async ({context}) => {
      test.setTimeout(40000);
      const transfer =  lending.lendingMainPage.findBtn("Learn More").nth(0);
      await expect.soft(transfer ).toBeVisible();
      const newTransferPage = await context.newPage();
      const transferUrl = await transfer.getAttribute('href');
      const newTransferPageLink = baseUrl+transferUrl
      await newTransferPage.goto(newTransferPageLink , { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(newTransferPage).toHaveURL(newTransferPageLink);
      await newTransferPage.close();

      const swift = lending.lendingMainPage.findBtn("Learn More").nth(1);
      await expect.soft(swift).toBeVisible();
      const newSwiftPage = await context.newPage();
      const swiftUrl = await swift.getAttribute('href');
      const newSwiftPageLink = baseUrl+swiftUrl
      await newSwiftPage.goto(newSwiftPageLink , { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(newSwiftPage).toHaveURL(newSwiftPageLink);
      await newSwiftPage.close();

      const viaSbp = lending.lendingMainPage.findBtn("Learn More").nth(2);
      await expect.soft(swift).toBeVisible();
      const newViaSbpPage = await context.newPage();
      const viaSbpUrl = await viaSbp.getAttribute('href');
      const newViaSbpPageLink = baseUrl+viaSbpUrl
      await newViaSbpPage.goto(newViaSbpPageLink, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(newViaSbpPage).toHaveURL(newViaSbpPageLink);
      await newViaSbpPage.close();

      const acquiring = lending.lendingMainPage.findBtn("Learn More").nth(3);
      await expect.soft(swift).toBeVisible();
      const newAcquiringPage = await context.newPage();
      const acquiringUrl = await acquiring.getAttribute('href');
      const newAcquiringPageLink = baseUrl+acquiringUrl
      await newAcquiringPage.goto(newAcquiringPageLink, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(newAcquiringPage).toHaveURL(newAcquiringPageLink);
      await newAcquiringPage.close();

      const invest = lending.lendingMainPage.findBtn("Learn More").nth(4);
      await expect.soft(swift).toBeVisible();
      const newInvestPage = await context.newPage();
      const investUrl = await invest.getAttribute('href');
      const newInvestPageLink = baseUrl+investUrl
      await newInvestPage.goto(newInvestPageLink, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(newInvestPage).toHaveURL(newInvestPageLink);
      await newAcquiringPage.close();

      const bait = lending.lendingMainPage.findBtn("Learn More").nth(5);
      await expect.soft(bait).toBeVisible();
      const [newPage] = await Promise.all([
        context.waitForEvent('page'), 
        bait.click() 
      ]);
      await lending.lendingMainPage.page.waitForTimeout(4000);
      await expect.soft(newPage).toHaveURL(/acquiring/);
      await newPage.close();
    });

    test('Check links of Main page Part 3', async ({context}) => {
      test.setTimeout(60000);
      const bait2 = lending.lendingMainPage.findBtn("Learn More").nth(6);
      await expect.soft(bait2).toBeVisible();
      const [newPage2] = await Promise.all([
        context.waitForEvent('page'), 
        bait2.click() 
      ]);
      await lending.lendingMainPage.page.waitForTimeout(4000);
      await expect.soft(newPage2).toHaveURL(/borrow/);
      await newPage2.close();

      const telegramFaq = lending.lendingMainPage.findBtn("Learn More").nth(7);
      await expect.soft(telegramFaq).toBeVisible();
      const newTelegramFaqPage = await context.newPage();
      const telegramFaqUrl = await telegramFaq.getAttribute('href');
      await newTelegramFaqPage.goto(telegramFaqUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(newTelegramFaqPage).toHaveURL(telegramFaqUrl);
      await newTelegramFaqPage.close();

      const p2p = lending.lendingMainPage.findBtn("Learn More").nth(8);
      await expect.soft(p2p).toBeVisible();
      const p2pPage = await context.newPage();
      const p2pUrl = await p2p.getAttribute('href');
      const newP2pLink = baseUrl+p2pUrl
      await p2pPage.goto(newP2pLink, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(p2pPage).toHaveURL(newP2pLink);
      await p2pPage.close();

      const loans = lending.lendingMainPage.findBtn("Learn More").nth(9);
      await expect.soft(loans).toBeVisible();
      const loansPage = await context.newPage();
      const loansUrl = await loans.getAttribute('href');
      const newLoansLink = baseUrl+loansUrl
      await loansPage.goto(newLoansLink, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(loansPage).toHaveURL(newLoansLink);
      await loansPage.close();

      const earn = lending.lendingMainPage.findBtn("Learn More").nth(10);
      await expect.soft(earn).toBeVisible();
      const earnPage = await context.newPage();
      const earnUrl = await earn.getAttribute('href');
      const newEarnLink = baseUrl+earnUrl
      await earnPage.goto(newEarnLink);
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(earnPage).toHaveURL(newEarnLink);
      await earnPage.close();

      const tgLink = lending.lendingMainPage.telegaLink;
      await expect.soft(tgLink).toBeVisible();
      const [newPageTg] = await Promise.all([
        context.waitForEvent('page'), 
        tgLink.click() 
      ]);
      await lending.lendingMainPage.page.waitForTimeout(4000);
      await expect.soft(newPageTg).toHaveURL(/\/faq#registration-and-receipt-of-telegram.connect-telegram-bot/);
      await newPageTg.close();
    });

    test('Check Main page FAQ component Part 1', async ({context}) => {
      test.setTimeout(50000);

      const commissions = lending.lendingMainPage.faqLinks("Commissions and Limits");
      await expect.soft(commissions).toBeVisible();
      const commissionsPage = await context.newPage();
      const commissionsUrl = await commissions.getAttribute('href');
      await commissionsPage.goto(commissionsUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(commissionsPage).toHaveURL(commissionsUrl);
      await commissionsPage.close();

      const p2p = lending.lendingMainPage.faqLinks("P2P Deposits and Withdrawals");
      await expect.soft(p2p).toBeVisible();
      const p2pPage = await context.newPage();
      const p2pUrl = await p2p.getAttribute('href');
      await p2pPage.goto(p2pUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(p2pPage).toHaveURL(p2pUrl);
      await p2pPage.close();

      const registering = lending.lendingMainPage.faqLinks("Registering and Setting up an Account");
      await expect.soft(registering).toBeVisible();
      const registeringPage = await context.newPage();
      const registeringUrl = await registering.getAttribute('href');
      await registeringPage.goto(registeringUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(registeringPage).toHaveURL(registeringUrl);
      await registeringPage.close();

      const verification = lending.lendingMainPage.faqLinks("Verification (KYC)");
      await expect.soft(verification).toBeVisible();
      const verificationPage = await context.newPage();
      const verificationUrl = await verification.getAttribute('href');
      await verificationPage.goto(verificationUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(verificationPage).toHaveURL(verificationUrl);
      await verificationPage.close();

      const deposit = lending.lendingMainPage.faqLinks("Deposits, Transfers, and Withdrawals");
      await expect.soft(deposit).toBeVisible();
      const depositPage = await context.newPage();
      const depositUrl = await deposit.getAttribute('href');
      await depositPage.goto(depositUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(depositPage).toHaveURL(depositUrl);
      await depositPage.close();

      const orders = lending.lendingMainPage.faqLinks("Orders");
      await expect.soft(orders).toBeVisible();
      const ordersPage = await context.newPage();
      const ordersUrl = await orders.getAttribute('href');
      await ordersPage.goto(ordersUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(ordersPage).toHaveURL(ordersUrl);
      await ordersPage.close();

      const affil = lending.lendingMainPage.faqLinks("Offices and Trusted Bitbanker Exchangers");
      await expect.soft(affil).toBeVisible();
      const affilPage = await context.newPage();
      const affilUrl = await affil.getAttribute('href');
      await affilPage.goto(affilUrl , { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(affilPage).toHaveURL(affilUrl);
      await affilPage.close();
    });

    test('Check Main page FAQ component Part 2', async ({context}) => {
      test.setTimeout(60000);

      const notifications = lending.lendingMainPage.faqLinks("Notifications");
      await expect.soft(notifications).toBeVisible();
      const notificationsPage = await context.newPage();
      const notificationsUrl = await notifications.getAttribute('href');
      await notificationsPage.goto(notificationsUrl , { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(notificationsPage).toHaveURL(notificationsUrl);
      await notificationsPage.close();

      const deposits = lending.lendingMainPage.faqLinks().filter({ hasText: /^Deposits$/ });
      await expect.soft(deposits).toBeVisible();
      const depositsPage = await context.newPage();
      const depositsUrl = await deposits.getAttribute('href');
      await depositsPage.goto(depositsUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(depositsPage).toHaveURL(depositsUrl);
      await depositsPage.close();

      const borrows = lending.lendingMainPage.faqLinks("Loans");
      await expect.soft(borrows).toBeVisible();
      const borrowsPage = await context.newPage();
      const borrowsUrl = await borrows.getAttribute('href');
      await borrowsPage.goto(borrowsUrl , { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(borrowsPage).toHaveURL(borrowsUrl);
      await borrowsPage.close();

      const crypto = lending.lendingMainPage.faqLinks("Crypto payment processing");
      await expect.soft(crypto).toBeVisible();
      const cryptoPage = await context.newPage();
      const cryptoUrl = await crypto.getAttribute('href');
      await cryptoPage.goto(cryptoUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(cryptoPage).toHaveURL(cryptoUrl);
      await cryptoPage.close();

      const promo = lending.lendingMainPage.faqLinks("Promo codes");
      await expect.soft(promo).toBeVisible();
      const promoPage = await context.newPage();
      const promoUrl = await promo.getAttribute('href');
      await promoPage.goto(promoUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(promoPage).toHaveURL(promoUrl);
      await promoPage.close();

      const investment = lending.lendingMainPage.faqLinks("Investing");
      await expect.soft(investment).toBeVisible();
      const investmentPage = await context.newPage();
      const investmentUrl = await investment.getAttribute('href');
      await investmentPage.goto(investmentUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(investmentPage).toHaveURL(investmentUrl);
      await investmentPage.close();

      const sbp = lending.lendingMainPage.faqLinks("Buy Cryptocurrency via SBP");
      await expect.soft(sbp).toBeVisible();
      const sbpPage = await context.newPage();
      const sbpUrl = await sbp.getAttribute('href');
      await sbpPage.goto(sbpUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await lending.lendingMainPage.page.waitForTimeout(2000);
      await expect.soft(sbpPage).toHaveURL(sbpUrl);
      await sbpPage.close();
    });
});
