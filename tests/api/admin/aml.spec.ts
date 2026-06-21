import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { validateSchema } from '../../utils/schemaValidator.js';
import { amlCurrenciesData, updateUsdcSettings, transactionSchema, status, statusAml, amlManual } from '../../data/admin/aml.js'
loadEnv();
let authData;
const domain = process.env.DOMAIN;

const adminCurrencies = `${process.env.API_BASE_URL}${process.env.API_ADMIN_CURRENCIES}`;
const detailedCurrency = `${process.env.API_BASE_URL}${process.env.API_ADMIN_AML}`;
const transactions = `${process.env.API_BASE_URL}${process.env.API_ADMIN_AML_TRANSACTIONS}`;
const amlOutgoing = `${process.env.API_BASE_URL}${process.env.API_ADMIN_AML_OUTGOING}`;

test.describe("API super-admin tests of AML", {
    tag: ['@admin', '@super', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
    });
    test('Get AML available currencies 869ap37r5', async ({ request }) => {
        const response = await request.get(`${adminCurrencies}?is_aml_check_available=true`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody[0].name).toEqual('Bitcoin');
        expect.soft(responseBody[1].name).toEqual('Ether');
        expect.soft(responseBody[2].name).toEqual('Tron');
        expect.soft(responseBody[3].name).toEqual('USD Coin');
        expect.soft(responseBody[4].name).toEqual('Tether USD');
    });

    amlCurrenciesData.forEach(({currency, data}) => {
    test(`Get AML currencies:${currency} 8699hruwp`, async ({ request }) => {
        const response = await request.get(`${detailedCurrency}/${currency}`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody).toMatchObject(data);
    });});

    test('Change USDC settings 8699hruwp', async ({ request }) => {
        await test.step('Change USDC settings 8699hruwp', async () => {
            const response = await request.put(`${detailedCurrency}/USDC`, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                data: updateUsdcSettings
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            expect(responseBody).toMatchObject(updateUsdcSettings);
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        await test.step('Rollback USDC settings 8699hruwp', async () => {
            const response = await request.put(`${detailedCurrency}/USDC`, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                data: amlCurrenciesData[3].data
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            expect(responseBody).toMatchObject(amlCurrenciesData[3].data);
        });
    });
});

test.describe("Full-admin tests tests of AML", {
    tag: ['@admin', '@fulladmin', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Full-admin can get list of operations', async ({ request }) => {
        const params = {
            page: 1,
            per_page: 10,
            domain
        }
        const response = await request.get(transactions, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody.items, transactionSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody.page).toEqual(1);
        expect.soft(responseBody.count).toBeGreaterThanOrEqual(316);
        expect.soft(responseBody.per_page).toEqual(10);
    });
    test('Full-admin can get user operation by filter: query', async ({ request }) => {
        const params = {
            page: 1,
            per_page: 10,
            domain,
            query: 'qa+user1@bitbanker.org'
        }
        const response = await request.get(transactions, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody.items, transactionSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody.page).toEqual(1);
        expect.soft(responseBody.count).toBeGreaterThanOrEqual(35);
        expect.soft(responseBody.per_page).toEqual(10);
        expect.soft(responseBody.items[0].user_email).toEqual('qa+user1@bitbanker.org');
    });
    
    status.forEach(({status, id})=> {
    test(`Full-admin can get filter by status:${status} `, async ({ request }) => {
        const params = {
            page: 1,
            per_page: 10,
            domain,
            status_id: id
        }
        const response = await request.get(transactions, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.page).toEqual(1);
        expect.soft(responseBody.per_page).toEqual(10);
       }); 
    });
    statusAml.forEach(({status})=> {
    test(`Full-admin can get filter by AML status:${status} `, async ({ request }) => {
        const params = {
            page: 1,
            per_page: 10,
            domain,
            status_id: 1,
            aml_status: status
        }
        const response = await request.get(transactions, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.page).toEqual(1);
        expect.soft(responseBody.per_page).toEqual(10);
       }); 
    });

    amlManual.forEach(({manual})=> {
    test(`Full-admin can get filter by manual status:${manual} `, async ({ request }) => {
        const params = {
            page: 1,
            per_page: 10,
            domain,
            status_id: 1,
            aml_status: "PENDING",
            aml_manual_check_required: manual
        }
        const response = await request.get(transactions, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.page).toEqual(1);
        expect.soft(responseBody.per_page).toEqual(10);
       }); 
    });
});

test.describe.skip("API super-admin tests of outgoing AML", {
    tag: ['@admin', '@super', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
    });
    test('Returns model status, thresholds, metrics, override count', async ({ request }) => {
        const response = await request.get(amlOutgoing, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
    });
});