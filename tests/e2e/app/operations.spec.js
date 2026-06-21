import { test, expect } from '@playwright/test';
import PomManager from '../../pages/app/PomManager.js';
import { loadEnv } from '../../utils/envLoader.js';
import path from 'path';
loadEnv();
let pm;

const authFilePath = path.resolve(__dirname, '../../../auth/User1Auth.json');
const mainPageUrl = `${process.env.BASE_URL}`;
const operationsUrl = `${process.env.BASE_URL}${process.env.OPERATIONS_URL}`;
const expectedColumns = ['Date', 'Operation type', 'Currency', 'Amount', 'Commission', 'Status'];

test.describe("Check avability and visibility of Operation page", {
    tag: ['@app', '@prod']
  }, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);
      await pm.loginPage.goto(mainPageUrl);
    });

    test('Enter to Operations from Balance page and check all necessary visible web elements', async ()=> {
        await pm.mainPage.findSectionByText("operations Transaction History")
        await pm.operationsPage.loaded()
        await expect.soft(pm.operationsPage.transactionTitle).toHaveText("Transaction History")
        const allColumnsExist = await pm.operationsPage.columnExists(expectedColumns);
        expect.soft(allColumnsExist).toBe(true); 
        expect.soft(pm.operationsPage.periodInput).toBeVisible()
        expect.soft(pm.operationsPage.allOperationsInput).toBeVisible()
        expect.soft(pm.operationsPage.allCurrenciesOne).toBeVisible()
        expect.soft(pm.operationsPage.allCurrenciesTwo).toBeVisible()
        expect.soft(pm.operationsPage.perPageInput).toBeVisible()
        expect.soft(pm.operationsPage.paginatorInput).toBeVisible()
        expect.soft(pm.operationsPage.downloadButton).toBeVisible()
    });
});


test.describe("Check operations filters and functions", {
    tag: ['@app', '@prod']
  }, () => {
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      pm = new PomManager(page);
      await pm.loginPage.goto(operationsUrl);
    });

    test('Check period filter', async ()=> {
        await pm.operationsPage.loaded()
        await pm.operationsPage.setDateAndRemoveit()
        await pm.operationsPage.loaded()
        expect.soft(pm.operationsPage.headerRow).toBeVisible()
    });
});