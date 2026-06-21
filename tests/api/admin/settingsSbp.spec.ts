import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { payMeNew, payMeNewResult, allWlSbpSettings } from '../../data/admin/sbp.js'
import fs from 'fs';
loadEnv();
let authData;


const globalSbpSettings = `${process.env.API_BASE_URL}${process.env.API_ADMIN_SBP}`;

test.describe("Super-admin tests of SBP 869bjxvjp", {
    tag: ['@admin', '@super', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
    });
    test('Super-admin can change SBP min settings', async ({ request }) => {
        await test.step('Super-admin can change SBP min settings', async () => {
        const response = await request.patch(globalSbpSettings, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: payMeNew
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(payMeNewResult);
        });
        await new Promise(resolve => setTimeout(resolve, 2000));

        await test.step('Super-admin can get SBP settings', async () => {
            const params = {
                page: 1,
                per_page: 10
            }
            const response = await request.get(globalSbpSettings, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.items[0]).toMatchObject(payMeNewResult);
        });
    }); 
    test('Super-admin can get all SBP min settings', async ({ request }) => {
        const params = {
            page: 1,
            per_page: 10
        }
        const response = await request.get(globalSbpSettings, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(allWlSbpSettings);
    });
 });

 test.describe("Full-admin tests of SBP", {
    tag: ['@admin', '@fulladmin', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Full-admin can change SBP min settings 869bjxvjp', async ({ request }) => {
        await test.step('Full-admin can change SBP min settings', async () => {
        const response = await request.patch(globalSbpSettings, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: payMeNew
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(payMeNewResult);
        });
        await new Promise(resolve => setTimeout(resolve, 2000));

        await test.step('Full-admin can get SBP settings', async () => {
            const params = {
                page: 1,
                per_page: 10
            }
            const response = await request.get(globalSbpSettings, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.items[0]).toMatchObject(payMeNewResult);
        });
    }); 
});

test.describe("API read-admin tests of SBP", {
    tag: ['@readadmin', '@cards', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiReadAdminAuth.json', 'utf-8'));
    });
    test('Read-admin cant change SBP min settings', async ({ request }) => {
        const response = await request.patch(globalSbpSettings, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: payMeNew
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
});