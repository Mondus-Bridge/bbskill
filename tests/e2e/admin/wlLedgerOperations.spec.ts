import { test, expect } from '@playwright/test';
import AdminPomManager from '../../pages/admin/AdminPomManager';
import path from 'path';
let admin;

const authFilePath = path.resolve(__dirname, '../../../auth/AdminLoginAuth.json');
const ledgerUrl = `${process.env.BASE_ADMIN_PANEL}${process.env.ADMIN_LEDGER}`;
const pendingStat = 'pending'
const completeStat = 'complete'
const canceledStat = 'cancelled'



test.describe('Check all opearions are visible and statuses is correct', {
    tag: ['@admin', '@ledger']
  },() => {
    test.setTimeout(40000);
    test.use({ storageState: authFilePath });
    test.beforeEach(async ({ page }) => {
      admin = new AdminPomManager(page);
      await admin.loginPage.goto(ledgerUrl);
      await admin.settingsPage.page.waitForTimeout(3000);
      await admin.operationsPage.installPeriod();
    });
  
    test("Order operations are visible and statuses are correct", async ()=> {
      const operationName = 'Order'
      await admin.operationsPage.clickAndChooseOperation(operationName);
      await admin.operationsPage.clickAndChooseStatus('Pending');
      const operationNamePending = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNamePending) {
        expect(operation).toBe(operationName);
      }
      const pendingList = await admin.operationsPage.retrieveStatus()
      for (const status of pendingList ) {
        expect(status).toBe(pendingStat);
      }
  
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(2500);
      await admin.operationsPage.chooseStatusFromDropdown('Completed');
      const operationNameComplete = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameComplete ) {
        expect(operation).toBe(operationName);
      }
      const completeList = await admin.operationsPage.retrieveStatus()
      for (const status of completeList) {
        expect(status).toBe(completeStat);
      }
  
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(2500);
      await admin.operationsPage.chooseStatusFromDropdown('Canceled');
      const operationNameCancel = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameCancel ) {
        expect(operation).toBe(operationName);
      }
      const canceleList = await admin.operationsPage.retrieveStatus()
      for (const status of canceleList) {
        expect(status).toBe(canceledStat);
      }
    });
  
    test("Profit order operation are visible and has complete status", async ()=> {
      const operationName = 'Profit order'
      await admin.operationsPage.clickAndChooseOperation(operationName);
      await admin.operationsPage.clickAndChooseStatus('Completed');
      const operationNamePending = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNamePending) {
        expect(operation).toBe(operationName);
      }
      const completeList = await admin.operationsPage.retrieveStatus()
      for (const status of completeList ) {
        expect(status).toBe(completeStat);
      }
    });
  
    test("Investing operation are visible and statuses are correct", async ()=> {
      const operationName = 'Investing'
      await admin.operationsPage.clickAndChooseOperation(operationName);
      await admin.operationsPage.clickAndChooseStatus('Pending');
      const operationNamePending = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNamePending) {
        expect(operation).toBe(operationName);
      }
      const pendingList = await admin.operationsPage.retrieveStatus()
      for (const status of pendingList ) {
        expect(status).toBe(pendingStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Canceled');
      const operationNameComplete = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameComplete) {
        expect(operation).toBe(operationName);
      }
      const completeList = await admin.operationsPage.retrieveStatus()
      for (const status of completeList) {
        expect(status).toBe(canceledStat);
      }
    });
  
    test("Invoice operation are visible and statuses are correct", async ()=> {
      const operationName = 'Invoice'
      await admin.operationsPage.clickAndChooseOperation(operationName);
      await admin.operationsPage.clickAndChooseStatus('Pending');
      const operationNamePending = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNamePending) {
        expect(operation).toBe(operationName);
      }
      const pendingList = await admin.operationsPage.retrieveStatus()
      for (const status of pendingList ) {
        expect(status).toBe(pendingStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Completed');
      const operationNameComplete = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameComplete ) {
        expect(operation).toBe(operationName);
      }
      const completeList = await admin.operationsPage.retrieveStatus()
      for (const status of completeList) {
        expect(status).toBe(completeStat);
      }
    });
  
    test("Balance deposit operations are visible and statuses are correct", async ()=> {
      const operationName = 'Balance deposits'
      await admin.operationsPage.clickAndChooseOperation(operationName);
      await admin.operationsPage.clickAndChooseStatus('Pending');
      const operationNamePending = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNamePending) {
        expect(operation).toBe(operationName);
      }
      const pendingList = await admin.operationsPage.retrieveStatus()
      for (const status of pendingList ) {
        expect(status).toBe(pendingStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Completed');
      const operationNameComplete = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameComplete ) {
        expect(operation).toBe(operationName);
      }
      const completeList = await admin.operationsPage.retrieveStatus()
      for (const status of completeList) {
        expect(status).toBe(completeStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Canceled');
      const operationNameCancel = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameCancel ) {
        expect(operation).toBe(operationName);
      }
      const canceleList = await admin.operationsPage.retrieveStatus()
      for (const status of canceleList) {
        expect(status).toBe(canceledStat);
      }
    });
  
    test("P2P deposit operations are visible and statuses are correct", async ()=> {
      const operationName = 'P2P deposit'
      await admin.operationsPage.clickAndChooseOperation(operationName);
      await admin.operationsPage.clickAndChooseStatus('Pending');
      const operationNamePending = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNamePending) {
        expect(operation).toBe(operationName);
      }
      const pendingList = await admin.operationsPage.retrieveStatus()
      for (const status of pendingList ) {
        expect(status).toBe(pendingStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Completed');
      const operationNameComplete = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameComplete ) {
        expect(operation).toBe(operationName);
      }
      const completeList = await admin.operationsPage.retrieveStatus()
      for (const status of completeList) {
        expect(status).toBe(completeStat);
      }
      await admin.operationsPage.removeStatus.click()
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Canceled');
      const operationNameCancel = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameCancel ) {
        expect(operation).toBe(operationName);
      }
      const canceleList = await admin.operationsPage.retrieveStatus()
      for (const status of canceleList) {
        expect(status).toBe(canceledStat);
      }
    });
  
    test("P2P withdrawal operations are visible and statuses are correct", async ()=> {
      const operationName = 'P2P withdrawal'
      await admin.operationsPage.clickAndChooseOperation(operationName);
      await admin.operationsPage.clickAndChooseStatus('Pending');
      const operationNamePending = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNamePending) {
        expect(operation).toBe(operationName);
      }
      const pendingList = await admin.operationsPage.retrieveStatus()
      for (const status of pendingList ) {
        expect(status).toBe(pendingStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Completed');
      const operationNameComplete = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameComplete ) {
        expect(operation).toBe(operationName);
      }
      const completeList = await admin.operationsPage.retrieveStatus()
      for (const status of completeList) {
        expect(status).toBe(completeStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Canceled');
      const operationNameCancel = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameCancel ) {
        expect(operation).toBe(operationName);
      }
      const canceleList = await admin.operationsPage.retrieveStatus()
      for (const status of canceleList) {
        expect(status).toBe(canceledStat);
      }
    });
  
    test("Transfer operations are visible and statuses are correct", async ()=> {
      const operationName = 'Transfer'
      await admin.operationsPage.clickAndChooseOperation(operationName);
      await admin.operationsPage.clickAndChooseStatus('Pending');
      const operationNamePending = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNamePending) {
        expect(operation).toBe(operationName);
      }
      const pendingList = await admin.operationsPage.retrieveStatus()
      for (const status of pendingList ) {
        expect(status).toBe(pendingStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Completed');
      const operationNameComplete = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameComplete ) {
        expect(operation).toBe(operationName);
      }
      const completeList = await admin.operationsPage.retrieveStatus()
      for (const status of completeList) {
        expect(status).toBe(completeStat);
      }
    });
  
    test.skip("Depricated Faster Payments System (SBP) Deposit operations are visible and statuses are correct", async ()=> {
      const operationName = 'Faster Payments System (SBP) Deposit'
      await admin.operationsPage.clickAndChooseOperation(operationName);
      await admin.operationsPage.chooseStatusFromDropdown('Canceled');
      const operationNamePending = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNamePending) {
        expect(operation).toBe(operationName);
      }
      const canseledList = await admin.operationsPage.retrieveStatus()
      for (const status of canseledList) {
        expect(status).toBe(canceledStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Completed');
      const operationNameComplete = await admin.operationsPage.retrieveOperations();

      for (const operation of operationNameComplete ) {
        expect(operation).toBe(operationName);
      }
      const completeList = await admin.operationsPage.retrieveStatus()
      for (const status of completeList) {
        expect(status).toBe(completeStat);
      }
    });
  
    test("VISA withdrawal operations are visible and statuses are correct", async ()=> {
      const operationName = 'VISA withdrawal'
      await admin.operationsPage.clickAndChooseOperation(operationName);
      await admin.operationsPage.clickAndChooseStatus('Pending');
      const operationNamePending = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNamePending) {
        expect(operation).toBe(operationName);
      }
      const pendingList = await admin.operationsPage.retrieveStatus()
      for (const status of pendingList ) {
        expect(status).toBe(pendingStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Completed');
      const operationNameComplete = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameComplete ) {
        expect(operation).toBe(operationName);
      }
      const completeList = await admin.operationsPage.retrieveStatus()
      for (const status of completeList) {
        expect(status).toBe(completeStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Canceled');
      const operationNameCancel = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameCancel ) {
        expect(operation).toBe(operationName);
      }
      const canceleList = await admin.operationsPage.retrieveStatus()
      for (const status of canceleList) {
        expect(status).toBe(canceledStat);
      }
    });
  

    test("OTC operations are visible and statuses are correct", async ()=> {
      const operationName = 'OTC deals'
      await admin.operationsPage.clickAndChooseOperation(operationName);
      await admin.operationsPage.clickAndChooseStatus('Pending');
      const operationNamePending = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNamePending) {
        expect(operation).toBe(operationName);
      }
      const pendingList = await admin.operationsPage.retrieveStatus()
      for (const status of pendingList ) {
        expect(status).toBe(pendingStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Completed');
      const operationNameComplete = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameComplete ) {
        expect(operation).toBe(operationName);
      }
      const completeList = await admin.operationsPage.retrieveStatus()
      for (const status of completeList) {
        expect(status).toBe(completeStat);
      }
      await admin.operationsPage.removeStatus.click();
      await admin.settingsPage.page.waitForTimeout(1500);
      await admin.operationsPage.chooseStatusFromDropdown('Canceled');
      const operationNameCancel = await admin.operationsPage.retrieveOperations();
      for (const operation of operationNameCancel ) {
        expect(operation).toBe(operationName);
      }
      const canceleList = await admin.operationsPage.retrieveStatus()
      for (const status of canceleList) {
        expect(status).toBe(canceledStat);
      }
    });
  });
  