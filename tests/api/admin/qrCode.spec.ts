// DELETE /admin​/files​/qr-deposit-settings​/instruction Delete instruction file
// GET /admin​/files​/qr-deposit-settings​/instruction Get instruction file
// POST ​/admin​/files​/qr-deposit-settings​/instruction Upload instruction file
// DELETE ​/admin​/files​/qr-deposit-settings​/qr Delete qr deposit file
// GET ​/admin​/files​/qr-deposit-settings​/qr Get qr deposit file
// POST ​/admin​/files​/qr-deposit-settings​/qr Upload qr deposit file
// GET /admin​/qr-deposit-settings Get qr deposit settings - done
// POST ​/admin​/qr-deposit-settings Create qr deposit settings 

import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { qrSettingsInfo, qrSettingsOtherInfo, paramsResident, paramsNonResident, qrSettingsInfoCompany, qrSettingsInfoNonResident, paramsCompany,
    newTreasurySettings, oldTreasurySettings, postOldTreasurySettings, postNewTreasurySettings } from '../../data/qr.dev.js';
loadEnv();
let authData;
const domain = process.env.DOMAIN;

const qrInfo = `${process.env.API_BASE_URL}${process.env.API_SUPER_QR}`;
const qrTreasury = `${process.env.API_BASE_URL}${process.env.API_ADMIN_QR}`;
test.describe("API admin tests of QR code", {
    tag: ['@super', '@qr', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
        await new Promise(resolve => setTimeout(resolve, 1000));
    });
    test('CRUD qr settings for resident', async ({ request }) => {
        await test.step('Get qr deposit settings for resident', async () => {
        const response = await request.get(qrInfo, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: paramsResident 
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(qrSettingsInfo);
        });

        await test.step('Post new qr deposit settings for resident', async () => {
        const response = await request.post(qrInfo, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: paramsResident,
            data: qrSettingsOtherInfo
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(qrSettingsOtherInfo);
        });

        await test.step('Return original qr deposit settings for resident', async () => {
        const response = await request.post(qrInfo, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: paramsResident,
            data: qrSettingsInfo
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(qrSettingsInfo);
        });
    });
    test('GET qr settings for NonResident', async ({ request }) => {
        await test.step('Get qr deposit settings for resident', async () => {
        const response = await request.get(qrInfo, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: paramsNonResident
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(qrSettingsInfoNonResident);
        });
    });
    test('GET qr settings for company', async ({ request }) => {
        await test.step('Get qr deposit settings for resident', async () => {
        const response = await request.get(qrInfo, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: paramsCompany
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(qrSettingsInfoCompany);
        });
    });
    test('CRUD treasury settings for QR', async ({ request }) => {
        await test.step('Get treasury settings', async () => {
        const params = {
            domain
        }
        const response = await request.get(qrTreasury, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(oldTreasurySettings);
        });

        await test.step('Post new treasury settings', async () => {
        const params = {
            domain
        }
        const response = await request.post(qrTreasury, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params,
            data: postNewTreasurySettings
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(newTreasurySettings );
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        await test.step('Return old treasury settings', async () => {
        const params = {
            domain
        }
        const response = await request.post(qrTreasury, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params,
            data: postOldTreasurySettings
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(oldTreasurySettings);
        });
    });
});

test.describe("API read-admin tests of QR", {
    tag: ['@readadmin', '@cards', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiReadAdminAuth.json', 'utf-8'));
    });
    test('Read-admin cant change the QR settings', async ({ request }) => {
        const response = await request.post(qrInfo, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: paramsResident,
            data: qrSettingsOtherInfo
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
});