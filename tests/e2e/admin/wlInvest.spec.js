import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const investmentUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_INVESTMENTS}`;
const clientsHeadersEn = ['User ID', 'Client', 'Product', 'Total invested', 'Investment start date', 'Status', 'Income', 'Paid', 'Commission','Percentage in product', 'Actions'];
const productsHeadersEn = ['Product', 'Total invested (current)', 'Number of investors (current)', 'Accrued yield (current)', 'Paid yield (all time)', 'Enabled', 'Available to other WL', 'Actions'];
const operationsHeadersEn = ['Transaction ID', 'User ID', 'Client', 'Product', 'Client transaction date', 'Transaction', 'Manager operation date', 'Status', 'Amount', 'Commissions'];


test.describe('Login to admin panel tests', {
  tag: ['@admin', '@investing']
},() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
    admin = new AdminPomManager(page);
    await admin.loginPage.goto(investmentUrl);
    await admin.usersPage.page.waitForTimeout(3000);
  });

  test('Investing page has all web elements for interaction', async () => {
    await admin.investmentPage.page.getByRole('link', { name: 'Products' }).click();
    await admin.usersPage.page.waitForTimeout(3000);
    await expect.soft(admin.investmentPage.page.getByRole('button', { name: 'Добавить продукт' })).toBeVisible();
    await expect.soft(admin.investmentPage.page.getByRole('button', { name: 'Добавить продукт' })).toBeEnabled();
    await expect.soft(admin.investmentPage.page.locator('label').filter({ hasText: 'Active only' })).toBeChecked();
    await expect.soft(admin.investmentPage.page.locator('label').filter({ hasText: 'Active only' })).toBeVisible();
    await expect.soft(admin.investmentPage.page.locator('label').filter({ hasText: 'My only' }).getByRole('img')).toBeChecked();
    await expect.soft(admin.investmentPage.page.getByText('My only')).toBeDisabled();
    const productsTableHeader = await admin.investmentPage.checkTableHeaders(admin.investmentPage.tableHeader, productsHeadersEn);
    expect.soft(productsTableHeader).toBe(true); 

    await admin.investmentPage.page.getByRole('link', { name: 'Clients' }).click();
    await admin.usersPage.page.waitForTimeout(3000);
    await expect.soft(admin.investmentPage.page.locator('label').filter({ hasText: 'My clients only' })).toBeChecked();
    await expect.soft(admin.investmentPage.page.locator('label').filter({ hasText: 'Currently owns a share' })).toBeChecked();
    await expect.soft(admin.investmentPage.userEmailInpt).toBeVisible();
    await expect.soft(admin.investmentPage.userIdInpt).toBeVisible();
    await expect.soft(admin.investmentPage.statusInpt).toBeVisible();
    await expect.soft(admin.investmentPage.productsInpt).toBeVisible();
    const clientsTableHeader = await admin.investmentPage.checkTableHeaders(admin.investmentPage.tableHeader, clientsHeadersEn);
    expect.soft(clientsTableHeader).toBe(true); 

    await admin.investmentPage.page.getByRole('link', { name: 'Operations' }).click();
    await admin.usersPage.page.waitForTimeout(3000);
    await expect.soft(admin.investmentPage.userEmailInpt).toBeVisible();
    await expect.soft(admin.investmentPage.userIdInpt).toBeVisible();
    await expect.soft(admin.investmentPage.statusInpt).toBeVisible();
    await expect.soft(admin.investmentPage.productsInpt).toBeVisible();
    await expect.soft(admin.investmentPage.administratorInpt).not.toBeVisible();
    await expect.soft(admin.helper.page100Btn).toBeVisible();
    await expect.soft(admin.helper.page50Btn).toBeVisible();
    await expect.soft(admin.helper.page20Btn).toBeVisible();
    await expect.soft(admin.helper.page10Btn).toBeVisible();
    await expect.soft(admin.helper.pagePreviousBtn).toBeVisible();
    await expect.soft(admin.helper.pageNextBtn).toBeVisible();

    const operationsTableHeader = await admin.investmentPage.checkTableHeaders(admin.investmentPage.tableHeader, operationsHeadersEn);
    expect.soft(operationsTableHeader).toBe(true); 
  });

  test('Create Active Invest Product with En lang and min descripton', async () => {
    function generateRandomPlaywright() {
      const today = new Date(); 
      const seed = today.getTime();
      const randomNum = Math.abs(Math.sin(seed) * 100000); 
      const firstThreeDigits = Math.floor(randomNum).toString().slice(0, 6); 
      return `PlayProduct${firstThreeDigits}`;
    }
    function generateRandomSymbol() {
      const today = new Date(); 
      const seed = today.getTime();
      const randomNum = Math.abs(Math.sin(seed) * 100000); 
      const firstThreeDigits = Math.floor(randomNum).toString().slice(0, 4); 
      return `PLWR${firstThreeDigits}`;
    }
    let productName = generateRandomPlaywright();
    let productSymbol = generateRandomSymbol();
    await admin.investmentPage.page.getByRole('button', { name: 'Добавить продукт' }).click();
    await expect(admin.investmentPage.preCardForInvest).toHaveScreenshot('preCardForInvest.png');
    //Localization
    await admin.investmentPage.page.getByRole('main').getByText('EN', { exact: true }).click();
    await expect(admin.investmentPage.page.locator('#app').getByText('RU', { exact: true })).toBeVisible();
    await expect(admin.investmentPage.page.locator('#app').getByText('KY')).toBeVisible();
    //General
    await admin.investmentPage.page.getByRole('textbox', { name: '1000' }).fill(''); 
    await admin.investmentPage.page.getByRole('textbox', { name: '1000' }).fill('100'); 
    await admin.investmentPage.page.locator('label').filter({ hasText: 'Additional Purchase Option' }).click();
    await expect(admin.investmentPage.page.locator('label').filter({ hasText: 'Additional Purchase Option' })).toBeChecked();
    await expect(admin.investmentPage.page.locator('label').filter({ hasText: 'Active' }).getByRole('img')).toBeVisible();
    await admin.investmentPage.page.locator('input[name="description\\.en\\.name"]').fill(productName);
    await admin.investmentPage.page.locator('input[name="symbol"]').fill(productSymbol);
    await admin.investmentPage.page.locator('form div').filter({ hasText: `${productSymbol} = Product costUSDTUSDT` }).getByPlaceholder(' ', { exact: true }).fill('10');
    await admin.investmentPage.page.locator('input[name="currency_id"]').click();
    await admin.investmentPage.page.getByText('Tether USD').first().click();
    await admin.investmentPage.page.locator('textarea[name="description\\.en\\.card_description"]').fill('Playwright is a powerful, cross-browser automation framework for testing web applications with fast, reliable, and scalable end-to-end testing capabilities');
    await expect.soft(admin.investmentPage.page.locator('input[type="color"]')).toBeVisible();
    await expect.soft(admin.investmentPage.page.locator('input[type="color"]')).toBeEnabled();
    await admin.investmentPage.page.locator('input[name="icon_url"]').click();
    await admin.investmentPage.page.getByText('https://app.dev.bitb … st_balloon_800px.png').click();
    await admin.investmentPage.page.getByRole('textbox', { name: 'Select icon (symbol)' }).click();
    await admin.investmentPage.page.getByText('https://app.dev.bitb … l_icons/Infinity.svg').click();
    //Description
    await admin.investmentPage.page.locator('input[name="description\\.en\\.sub_caption"]').fill('Reliable, fast, and scalable testing for modern web applications');
    await admin.investmentPage.page.locator('textarea[name="description\\.en\\.about"]').fill('Playwright is a robust automation framework designed for fast, reliable, and scalable end-to-end testing across multiple browsers. It enables developers to efficiently test modern web applications with powerful debugging tools, seamless integration, and cross-platform compatibility for optimal performance');
    await admin.investmentPage.page.locator('textarea[name="description\\.en\\.investment_idea"]').fill('Investing in Playwright development enhances automated testing efficiency, ensuring fast, reliable, and scalable web applications. Its cross-browser support, robust debugging tools, and seamless integration reduce testing time and costs, improving software quality, accelerating releases, and driving business growth through superior user experiences');
    await admin.investmentPage.page.locator('input[name="risk"]').click();
    await admin.investmentPage.page.getByText('medium').first().click();
    await admin.investmentPage.page.locator('input[name="complexity"]').click();
    await admin.investmentPage.page.getByText('high').nth(2).click();
    await admin.investmentPage.page.locator('div').filter({ hasText: /^Target annual return %$/ }).first().click();
    await admin.investmentPage.page.locator('div:nth-child(21) > .input-container > .input-wrapper > .input').fill('15');
    await admin.investmentPage.page.locator('div').filter({ hasText: /^Revenue payout$/ }).first().click();
    await admin.investmentPage.page.locator('div:nth-child(22) > .input-container > .input-wrapper > .input').fill('92');
    await admin.investmentPage.page.locator('input[name="asset_currencies\\[0\\]\\.currency_id"]').click();
    await admin.investmentPage.page.getByText('Tether USD').nth(1).click();
    await admin.investmentPage.page.locator('div').filter({ hasText: /^USDTPool percentage%$/ }).getByPlaceholder(' ', { exact: true }).fill('');
    await admin.investmentPage.page.locator('div').filter({ hasText: /^USDTPool percentage%$/ }).getByPlaceholder(' ', { exact: true }).fill('100');
    await admin.investmentPage.page.locator('input[name="description\\.en\\.additional\\.capital_protection_short"]').fill('Secure investments with strategic risk management for capital protection');
    await admin.investmentPage.page.locator('div:nth-child(28) > .input-container > .input-wrapper > .input').fill('2'); //Yield for the last month
    await admin.investmentPage.page.locator('div:nth-child(31) > .input-container > .input-wrapper > .input').fill('0'); //Asset lock
    await admin.investmentPage.page.locator('div:nth-child(34) > .input-container > .input-wrapper > .input').fill('1'); //Purchase fee
    await admin.investmentPage.page.locator('div:nth-child(37) > .input-container > .input-wrapper > .input').fill('1'); //Fee for sale
    await admin.investmentPage.page.locator('div').filter({ hasText: /^Seller fee%$/ }).getByPlaceholder(' ').fill('70'); //Seller fee
    await admin.investmentPage.page.locator('div:nth-child(43) > .input-container > .input-wrapper > .input').fill('10'); //allocated to the referrer when distributing profits
    await admin.investmentPage.page.locator('div:nth-child(44) > .input-container > .input-wrapper > .input').fill('15'); //allocated to the platform when distributing profits
    await admin.investmentPage.page.locator('div').filter({ hasText: /^Minimum holding perioddays$/ }).getByPlaceholder(' ').fill('90');
    await admin.investmentPage.page.locator('div').filter({ hasText: /^Maximum holding perioddays$/ }).getByPlaceholder(' ').fill('365');
    await admin.investmentPage.page.locator('input[name="dt_maturity"]').click(); //Maturity calendar input
    await admin.investmentPage.investLastDate.click();
    await admin.investmentPage.page.getByRole('button', { name: 'Confirm' }).click();
    await admin.investmentPage.page.locator('input[name="manager_email"]').fill('qa+managerofproduct@bitbanker.org');
    await admin.investmentPage.page.locator('input[name="platform_email"]').fill('qa+platformofproduct@bitbanker.org');
    await admin.investmentPage.page.locator('div:nth-child(53) > .input-container > .input-wrapper > .input').fill('3'); //Вознаграждение управляющего
    await admin.investmentPage.page.locator('textarea[name="description\\.en\\.additional\\.asset_profit_descriptions\\[0\\]\\.text"]').fill('Playwright is a cutting-edge automation framework designed for seamless web application testing. It supports multiple browsers, provides fast execution, and ensures reliability. With powerful debugging tools, cross-platform compatibility, and effortless integration, Playwright streamlines development, enhances test coverage, and accelerates software deployment for modern, high-quality web applications');
    await admin.investmentPage.page.locator('input[name="description\\.en\\.additional\\.asset_profit_descriptions\\[0\\]\\.icon_url"]').click();
    await admin.investmentPage.page.getByText('https://app.dev.bitb … ty_percent_80x80.svg').click();
    await admin.investmentPage.page.locator('textarea[name="description\\.en\\.additional\\.asset_capital_protection_description\\[0\\]\\.text"]').fill('Capital protection ensures financial security by minimizing risks and preserving investment value. Through strategic asset allocation, diversification, and risk management, investors safeguard their funds against market volatility. Prioritizing stability, capital protection strategies help maintain wealth, ensuring long-term financial growth while mitigating potential losses in uncertain economic conditions');
    await admin.investmentPage.page.locator('textarea[name="description\\.en\\.additional\\.description_buying"]').fill('High-quality, reliable product designed for your needs. Buy now!');
    await admin.investmentPage.page.locator('textarea[name="description\\.en\\.additional\\.description_selling"]').fill('Limited-time offer! Get this top-rated product at a discount');
    const [responseAddProduct] = await Promise.all([
      admin.investmentPage.page.waitForResponse(response => 
      response.url().includes('admin/investment/assets') && response.request().method() === 'POST'
      ),
        admin.investmentPage.page.getByRole('button', { name: 'Create' }).click()
      ]);
      expect(responseAddProduct.status()).toBe(200);
      const responseAddProductBody = await responseAddProduct.json();
      expect(responseAddProductBody).toMatchObject({
      currency_name: "Tether USD",
      is_active: false,
      is_extra_purchase_allowed: true,
      manager_reward_pct: 3,
      risk: "medium",
      symbol: productSymbol,
      description: expect.objectContaining({
        en: expect.objectContaining({
          name: productName
        })
      })
    });
    await admin.investmentPage.page.waitForTimeout(3000);
  });
});

