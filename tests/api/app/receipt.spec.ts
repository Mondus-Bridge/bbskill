import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
loadEnv();
let authData;

const getCryptoWithdrawalReceipt = `${process.env.API_BASE_URL}${process.env.API_CRYPTO_WITHDRAW_RECEIPT}`;
const getTransferReceipt = `${process.env.API_BASE_URL}${process.env.API_TRANSFER}`;
const getLedgerReceipt = `${process.env.API_BASE_URL}${process.env.API_LEDGER}`;
const getInvoicesReceipt = `${process.env.API_BASE_URL}${process.env.API_INVOICES}`;

test.describe("Get receipt from transfer, withdraw, invoice and ledger", {
    tag: ['@app', '@user1']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });
    test('Get crypto withdrawal receipt', async ({ request }) => {
        const response = await request.get(`${getCryptoWithdrawalReceipt}/5266/pdf`, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        }});
        expect.soft(response.status()).toBe(200);
        const contentType = response.headers()['content-type'];
        expect(contentType).toBe('application/pdf');
    });
    test('Get transfer receipt', async ({ request }) => {
        const response = await request.get(`${getTransferReceipt}/4883/pdf`, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        }});
        expect.soft(response.status()).toBe(200);
        const contentType = response.headers()['content-type'];
        expect(contentType).toBe('application/pdf');
    });
    test('Get ledger transfer-receipt', async ({ request }) => {
        const response = await request.get(`${getLedgerReceipt}/611491/pdf`, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        }});
        expect.soft(response.status()).toBe(200);
        const contentType = response.headers()['content-type'];
        expect(contentType).toBe('application/pdf');
    });
    test('Get ledger crypto withdrawal receipt', async ({ request }) => {
        const response = await request.get(`${getLedgerReceipt}/611342/pdf`, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        }});
        expect.soft(response.status()).toBe(200);
        const contentType = response.headers()['content-type'];
        expect(contentType).toBe('application/pdf');
    });
    test('Get ledger invoice receipt', async ({ request }) => {
        const response = await request.get(`${getLedgerReceipt}/611318/pdf`, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        }});
        expect.soft(response.status()).toBe(200);
        const contentType = response.headers()['content-type'];
        expect(contentType).toBe('application/pdf');
    });
 });

 test.describe("Get receipt from transfer, withdraw, invoice and ledger", {
    tag: ['@app', '@adminapp']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/AppAdminLoginAuth.json', 'utf-8'));
    });
     test('Get ledger paid invoice receipt', async ({ request }) => {
        const response = await request.get(`${getInvoicesReceipt}/2533/pdf`, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        }});
        expect.soft(response.status()).toBe(200);
        const contentType = response.headers()['content-type'];
        expect(contentType).toBe('application/pdf');
    });
});