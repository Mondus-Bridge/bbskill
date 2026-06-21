import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const mainPageUrl = `${process.env.BASE_URL}`;
const p2PageUrl = `${process.env.BASE_URL}${process.env.P2P_URL}`;
const expectedColumns = ['Trader', 'Min value', 'Max value', 'Bank', 'Commission', 'Action'];

test.describe("Check avability and visibility of P2P page", {
    tag: ['@app', '@prod', '@p2p']
  }, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);
      await pm.loginPage.goto(mainPageUrl);
    });

    test('Enter to P2P from Main page and check all necessary visible web elements', async ()=> {
        await pm.mainPage.findSectionByText("p2p P2P Transfers");
        await expect.soft(pm.p2Page.title).toHaveText("P2P Transfers");
        await pm.p2Page.ordersTab("My orders")
        await pm.p2Page.loaded()
        await expect.soft(pm.p2Page.noTrades).toHaveText("You don't have any P2P transactions yet...")
        await pm.p2Page.ordersTab("Orders")
        await pm.p2Page.sectionTabs("Deposit RUBR")
        await pm.p2Page.sectionTabs("All orders")
        await pm.page.keyboard.press('Space');
        await pm.p2Page.loaded()
        const allColumnsExist = await pm.p2Page.columnExists(expectedColumns);
        expect.soft(allColumnsExist).toBe(true); 
        expect.soft(pm.p2Page.traderInput).toBeVisible()
        expect.soft(pm.p2Page.amountInput).toBeVisible()
        expect.soft(pm.p2Page.allBanksInput).toBeVisible()
        expect.soft(pm.p2Page.allMethodsInput).toBeVisible()
        expect.soft(pm.p2Page.showMyOrdersText).toHaveText("Show my offers")
        expect.soft(pm.p2Page.showMyOrdersToggl).toBeVisible()
        await pm.p2Page.sectionTabs("Withdraw RUBR")
        await pm.p2Page.loaded()
        expect.soft(allColumnsExist).toBe(true); 
        expect.soft(pm.p2Page.traderInput).toBeVisible()
        expect.soft(pm.p2Page.amountInput).toBeVisible()
        expect.soft(pm.p2Page.allBanksInput).toBeVisible()
        expect.soft(pm.p2Page.showMyOrdersText).toHaveText("Show my offers")
        expect.soft(pm.p2Page.showMyOrdersToggl).toBeVisible()
    })

});

test.describe("Check function on P2P page", {
  tag: ['@app', '@prod']
}, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);
    await pm.loginPage.goto(p2PageUrl);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Check traders filters", async ()=> {
    await pm.page.keyboard.press('Space');
    await pm.p2Page.loaded();
    await pm.p2Page.typeTraderInput('4090S');
    await pm.p2Page.loaded();
    const result = await pm.p2Page.validateTraderColumn('4090super', 10);
    expect.soft(result).toBe(true); 
    await pm.p2Page.cleanTraderInput()
  })

  test("Create Deposit P2P, but fail it, cause no telegram", async ()=> {
    await pm.p2Page.ordersTab("Orders");
    await pm.p2Page.sectionTabs("Create your own");
    await pm.page.keyboard.press('Space');
    await pm.p2Page.getBank("ВТБ");
    await pm.p2Page.createDeposit("2","10", "20", "PW auto", "09:00", "20:00");
    await pm.p2Page.createButton.click();
    await expect.soft(pm.p2Page.notificanText).toContainText("Enable notifications in the Telegram bot")
  })

  test("Create Withdraw P2P, but fail it, cause no telegram", async ()=> {
    await pm.p2Page.ordersTab("Orders");
    await pm.p2Page.sectionTabs("Withdraw RUBR")
    await pm.p2Page.sectionTabs("Create your own");
    await pm.page.keyboard.press('Space');
    await pm.p2Page.getBank("ВТБ");
    await pm.p2Page.createWithdraw("2","10", "20", "+79991302598", "4263982640269299", 
    "11112222333444", "INVALID CARD HOLDER", "PW auto", "07:00", "19:00");
    await pm.p2Page.createButton.click();
    await expect.soft(pm.p2Page.notificanText).toContainText("Enable notifications in the Telegram bot")
  });
});
