import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { validateSchema } from '../../utils/schemaValidator.js';
import fs from 'fs';
loadEnv();
let authData;
const domain = process.env.DOMAIN;

const manualCredit = `${process.env.API_BASE_URL}${process.env.API_MANUAL_CREDIT}`;
const createSyncTask = `${process.env.API_BASE_URL}${process.env.API_CREATE_SYNC_TASK}`;
const syncTaskSchema = {
  "block_number": 'number',
  "sync_task_id": 'number'
};

const manualCreditSchema = {
  "txid": 'string',
  "blockchain_name": 'string',
  "currency_symbol": 'string',
  "vout": 'null',
  "to_address_value": 'string',
  "memo": 'null',
  "amount": 'number',
  "id": 'number',
  "status": 'string',
  "applied_transaction_id": 'null',
  "last_error": 'null'
};


test.describe("Super-admin tests of blockchain tasks", {
    tag: ['@admin', '@super', '@api', '@withdraw']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
    });
    test('Post create sync task for tron', async ({ request }) => {
        const response = await request.post(createSyncTask, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"txid":"89ec2e1ca7b7bb7e5eb502a3c17a678aa80324e824e599152f7b93c48e807ef5","blockchain_symbol":"tron"}
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody,syncTaskSchema );
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
    });
    test('Post manual credit for usdt(tron)', async ({ request }) => {
        const response = await request.post(manualCredit, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"source":"locator","txid":"6ed4adc0b737dcac6be061d1407843806a47afcc30a1b3741b0986b85c64e1ff","blockchain_symbol":"tron","currency_symbol":"USDT","amount":"2.6","to_address":"TX35ajuyDQBaMtVokmddjgomU5nvxogUwQ"}
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, manualCreditSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
    });
});

test.describe("Full-admin tests of blockchain tasks", {
    tag: ['@admin', '@fulladmin', '@api', '@withdraw']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Post create sync task for tron', async ({ request }) => {
        const response = await request.post(createSyncTask, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"txid":"89ec2e1ca7b7bb7e5eb502a3c17a678aa80324e824e599152f7b93c48e807ef5","blockchain_symbol":"tron"}
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody,syncTaskSchema );
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
    });
    test('Post manual credit for usdt(tron)', async ({ request }) => {
        const response = await request.post(manualCredit, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"source":"locator","txid":"6ed4adc0b737dcac6be061d1407843806a47afcc30a1b3741b0986b85c64e1ff","blockchain_symbol":"tron","currency_symbol":"USDT","amount":"2.6","to_address":"TX35ajuyDQBaMtVokmddjgomU5nvxogUwQ"}
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, manualCreditSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
    });
});

test.describe("Read-admin tests of blockchain tasks", {
    tag: ['@admin', '@readadmin', '@api', '@withdraw']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiReadAdminAuth.json', 'utf-8'));
    });
    test('Post create sync task for tron', async ({ request }) => {
        const response = await request.post(createSyncTask, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"txid":"89ec2e1ca7b7bb7e5eb502a3c17a678aa80324e824e599152f7b93c48e807ef5","blockchain_symbol":"tron"}
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
    test('Post manual credit for usdt(tron)', async ({ request }) => {
        const response = await request.post(manualCredit, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"source":"locator","txid":"6ed4adc0b737dcac6be061d1407843806a47afcc30a1b3741b0986b85c64e1ff","blockchain_symbol":"tron","currency_symbol":"USDT","amount":"2.6","to_address":"TX35ajuyDQBaMtVokmddjgomU5nvxogUwQ"}
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
});