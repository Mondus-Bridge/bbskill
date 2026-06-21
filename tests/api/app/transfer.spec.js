// POST /transfer Transfer money to another user

import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { userTransfer, qrProviderTransfer } from '../../data/transfer.dev.js';
loadEnv();
let authData;
let authDataQrProvider;

const ledger = `${process.env.API_BASE_URL}${process.env.API_LEDGER}`;
const transfer = `${process.env.API_BASE_URL}${process.env.API_TRANSFER}`;
const transferFile = `${process.env.API_BASE_URL}${process.env.API_TRANSFER_FILE}`;
test.describe("Actions of users with internal transfer", () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
        authDataQrProvider = JSON.parse(fs.readFileSync('./auth/AppAdminLoginAuth.json', 'utf-8'));
    });
    test('Make transfer from simple user account', {
        tag: ['@transfer', '@user1']
    }, async ({ request }) => {
        const response = await request.post(transfer, {
            headers: {
                Authorization: `Bearer ${authData.token}`,
                'Content-Type': 'application/json'
            },
            data: userTransfer
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"result": "success"});
    });

    test('Make transfer from qr provider account', {
        tag: ['@transfer', '@adminapp']
    }, async ({ request }) => {
        const response = await request.post(transfer, {
            headers: {
                Authorization: `Bearer ${authDataQrProvider.token}`,
                'Content-Type': 'application/json'
            },
            data: qrProviderTransfer
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"result": "success"});
    });
});


test.describe("Get from the ledger id of operation and download qr statement", {
    tag: ['@transfer', '@user1']
    }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });
test('Get filtered IDs and download QR statement', async ({ request }) => {
    let filteredId; 

    await test.step('Get from the ledger and find QR deposit ID', async () => {
        const params = { page: 1, per_page: 10, operation_types: 15 };
        const response = await request.get(ledger, {
            headers: { Authorization: `Bearer ${authData.token}` },
            params
        });

        expect(response.ok()).toBeTruthy(); 
        
        const responseBody = await response.json();
        const foundItem = responseBody.items.find(item => item.transfer_is_treasury === true || item.transfer_is_treasury === 'true');
        
        expect(foundItem, 'Could not find an operation with transfer_is_treasury: true').toBeDefined();
        
        filteredId = foundItem.id;
        console.log(`Found ID: ${filteredId}`);
    });

    await test.step(`Download QR statement by id: ${filteredId}`, async () => {
        expect(filteredId).toBeDefined();

        const response = await request.get(transferFile, {
            headers: { Authorization: `Bearer ${authData.token}` },
            params: { ledger_id: filteredId }
        });

        if (response.status() !== 200) {
            console.log('Error Body:', await response.text());
        }

        expect(response.status()).toBe(200);  
        
        const contentType = response.headers()['content-type'];
        expect(contentType).not.toContain('application/json'); 
    });
});
});