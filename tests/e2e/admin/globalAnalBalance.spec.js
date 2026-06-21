import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
let admin;
const analyticsUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_ANALYTICS}`;
const nodesUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_NODES}`;
const balanceTableHeaders = ['Currency', 'Available', 'Bank', 'Locked', 'Pending'];
const currencies = [
  'USD.R',
  'TRY',
  'USD.PD',
  'RUBR',
  'USD.K',
  'RUB.K',
  'BTC',
  'USDC',
  'GLD.PD',
  'ATOM',
  'USDT',
  'AED',
  'EUR',
  'TRX',
  'AVAX',
  'AED.PD',
  'TON',
  'ETH',
  'KGS'
];
const nodesList = ['ATOM', 'AVAX', 'BTC', 'ETH', 'TON', 'TRX', 'USDC', 'USDT']


test.describe('Check global Analytics page', {
    tag: ['@admin', '@analytics']
  },() => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(analyticsUrl);
    });
  
    test.afterEach(async ({ page }) => {
      await page.close();
    });
  
    test('Check global Analytics page, subpage: Users', async () => {
      await admin.analyticsPage.page.waitForTimeout(10000); 
      const result = await admin.helper.checkTableHeaders(admin.analyticsPage.tableHeader, balanceTableHeaders);
      expect(result).toBe(true);
      const result2 = await admin.helper.checkTableHeaders(admin.analyticsPage.currencyColumn, currencies);
      expect(result2).toBe(true);
      const result3 = await admin.helper.checkColumnValues(admin.analyticsPage.availableColumn);
      expect(result3).toBe(true);
    });

    test('Check global Analytics page, subpage: Nodes', async () => {
      await admin.analyticsPage.page.waitForTimeout(5000); 
      await admin.analyticsPage.nodesSubPage.click()
      await admin.analyticsPage.page.waitForTimeout(3000); 
      await expect.soft(admin.analyticsPage.nodesMinInput).toBeVisible();
      await expect.soft(admin.analyticsPage.nodesDistributeFeeBtn).toBeVisible()
      await expect.soft(admin.analyticsPage.nodesWithdrawBtn).toBeVisible()
      await expect.soft(admin.analyticsPage.nodesSettingIco).toBeVisible()
      const result = await admin.helper.checkTableHeaders(admin.analyticsPage.nodesList, nodesList);
      expect(result).toBe(true);
      await admin.analyticsPage.nodesDistributeFeeBtn.click();
      await expect.soft(admin.analyticsPage.saveBtn).toBeVisible()
      await admin.analyticsPage.closeModal.click();
      await admin.analyticsPage.nodesWithdrawBtn.click();
      await expect.soft(admin.analyticsPage.saveBtn).toBeVisible()
      await admin.analyticsPage.closeModal.click();
      await admin.analyticsPage.nodesSettingIco.click();
      await expect.soft(admin.analyticsPage.saveBtn).toBeVisible()
      await admin.analyticsPage.closeModal.click();
    });
});

test.describe('Check nodes adress and filters', {
  tag: ['@admin', '@analytics']
},() => {
  test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
    admin = new AdminPomManager(page);
    await admin.loginPage.goto(nodesUrl);
  });

  test('Check atom filter and address in nodes subpage', async () => {
    test.setTimeout(45000);
    await admin.analyticsPage.page.waitForTimeout(5000); 
    await expect.soft(admin.analyticsPage.nodesMinInput).toBeVisible();

    await admin.analyticsPage.findCoin('ETH', 'Ethereum (ERC20)');
    const result = await admin.analyticsPage.assertCryptoAddress(admin.analyticsPage.availableColumn, "Bep-20")
    expect (result).toBe(true);

    await admin.analyticsPage.findCoin('ATOM');
    const result2 = await admin.analyticsPage.assertCryptoAddress(admin.analyticsPage.availableColumn, "Atom")
    expect (result2).toBe(true);

    await admin.analyticsPage.findCoin('BTC', 'BNB Smart Chain (BEP20)');
    const result3 = await admin.analyticsPage.assertCryptoAddress(admin.analyticsPage.availableColumn, "Bep-20")
    expect (result3).toBe(true);

    await admin.analyticsPage.findCoin('TON');
    const result5 = await admin.analyticsPage.assertCryptoAddress(admin.analyticsPage.availableColumn, "Ton")
    expect (result5).toBe(true);

    await admin.analyticsPage.findCoin('USDT', 'Avalanche C-Chain');
    const result10 = await admin.analyticsPage.assertCryptoAddress(admin.analyticsPage.availableColumn, "Bep-20")
    expect (result10).toBe(true);

    await admin.analyticsPage.findCoin('BTC', 'Bitcoin');
    const result4 = await admin.analyticsPage.assertCryptoAddress(admin.analyticsPage.availableColumn, "Bitcoin")
    expect (result4).toBe(true);

    await admin.analyticsPage.findCoin('USDT', 'Ethereum (ERC20)');
    const result8 = await admin.analyticsPage.assertCryptoAddress(admin.analyticsPage.availableColumn, "Bep-20")
    expect (result8).toBe(true);

    await admin.analyticsPage.findCoin('TRX');
    const result6 = await admin.analyticsPage.assertCryptoAddress(admin.analyticsPage.availableColumn, "TRX")
    expect (result6).toBe(true);

    await admin.analyticsPage.findCoin('USDC', 'Ethereum (ERC20)');
    const result7 = await admin.analyticsPage.assertCryptoAddress(admin.analyticsPage.availableColumn, "Bep-20")
    expect (result7).toBe(true);

    await admin.analyticsPage.findCoin('USDT', 'BNB Smart Chain (BEP20)');
    const result9 = await admin.analyticsPage.assertCryptoAddress(admin.analyticsPage.availableColumn, "Bep-20")
    expect (result9).toBe(true);
  });


  test('Check minimum input filter', async () => {
    await admin.analyticsPage.page.waitForTimeout(8000); 
    await expect.soft(admin.analyticsPage.nodesMinInput).toBeVisible();
    await admin.analyticsPage.findCoin('BTC', 'BNB Smart Chain (BEP20)');
    await admin.analyticsPage.page.waitForTimeout(2500); 
    await admin.analyticsPage.nodesMinInput.fill('0.0004')
    await admin.analyticsPage.page.waitForTimeout(3500); 
    const resultMin = await admin.helper.checkTableHeaders(admin.analyticsPage.confirmedColumn, '0.0004');
    expect(resultMin).toBe(true);
  });
});