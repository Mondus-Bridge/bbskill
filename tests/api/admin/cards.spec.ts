//GET /admin/banking/partner-info - получает данные о нашей компании из pintopay
// GET /admin​/banking​/platforms - Get platform collection
// POST ​/admin​/banking​/replenish-settings - Update platform replenish settings

import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { partnerInfoSchema, partnerInfoObject, platformInfoSchema, listOfPartners, providerInfoSchema, pintopayInfo, 
pintopayAutoFill } from '../../data/cards.dev.js';
import {createCard, originalTerms, newTerms, originalFees, newFees, originalMain, newMain, originalToggle, newToggle,
cardOne } from '../../data/admin/cards.js'
import { validateSchema } from '../../utils/schemaValidator.js';
loadEnv();
let authData;

const partnerInfo = `${process.env.API_BASE_URL}${process.env.API_CARD_ADMIN_PARTNER_INFO}`;
const plarformInfo = `${process.env.API_BASE_URL}${process.env.API_CARD_ADMIN_PLATFORM}`;
const autoReplenish = `${process.env.API_BASE_URL}${process.env.API_CARD_ADMIN_REPLENISH}`;
const cardTypes = `${process.env.API_BASE_URL}${process.env.API_CARD_ADMIN_TYPES}`;
test.describe("Full admin tests of Cards", {
    tag: ['@admin', '@cards', '@fulladmin']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Get partner info', async ({ request }) => {
        const params = {
            platform_id: 2    
        };
        const response = await request.get(partnerInfo, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, partnerInfoSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody).toMatchObject(partnerInfoObject);
    });

    test('Get platform collection', async ({ request }) => {
        const response = await request.get(plarformInfo, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, platformInfoSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody).toMatchObject(listOfPartners);
    });

    test('Get pintopay collection', async ({ request }) => {
        const response = await request.get(`${plarformInfo}/2`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, providerInfoSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody).toMatchObject(pintopayInfo);
    });
   
    test('Get pintopay card types', async ({ request }) => {
        const params = {
            platform_id: 2    
        };
        const response = await request.get(cardTypes, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        // expect(responseBody).toMatchObject();
    });
    test('Create banking card', async ({ request }) => {
        const response = await request.post(cardTypes, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: createCard
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody).toMatchObject(createCard);
    });
    test('Get card 1 info', async ({ request }) => {
        const response = await request.get(`${cardTypes}/1`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody).toMatchObject(cardOne);
    });
    test('Update main for card 4', async ({ request }) => {
        await test.step('Update main for card 4', async () => {
        const response = await request.patch(`${cardTypes}/4/main`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: newMain
        });
        
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody.card_currency_id).toEqual(newMain.card_currency_id);
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        await test.step('Rollback main for card 4', async () => {
        const response = await request.patch(`${cardTypes}/4/main`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: originalMain
        });
        
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody.card_currency_id).toEqual(originalMain.card_currency_id);
        });
    });
    test('Update terms for card 4', async ({ request }) => {
        await test.step('Update terms for card 4', async () => {
        const response = await request.patch(`${cardTypes}/4/terms`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: newTerms
        });
        
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody.terms.limitPerDay).toEqual(newTerms.terms.limitPerDay);
        });

        await test.step('Rollback terms for card 4', async () => {
        const response = await request.patch(`${cardTypes}/4/terms`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: originalTerms
        });
        
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody.terms.limitPerDay).toEqual(originalTerms.terms.limitPerDay);
        });
    });
    test('Update fees for card 4', async ({ request }) => {
        await test.step('Update fees for card 4', async () => {
        const response = await request.patch(`${cardTypes}/4/fees`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: newFees
        });
        
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody.card_order_price).toEqual(newFees.card_order_price);
        });

        await test.step('Rollback fees for card 4', async () => {
        const response = await request.patch(`${cardTypes}/4/fees`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: originalFees
        });
        
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody.card_order_price).toEqual(originalFees.card_order_price);
        });
    });
    test('Update activity for card 4', async ({ request }) => {
        await test.step('Update activity for card 4', async () => {
        const response = await request.patch(`${cardTypes}/4/toggle`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: newToggle
        });
        
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody.is_active).toEqual(newToggle.is_active);
        });

        await test.step('Rollback activity for card 4', async () => {
        const response = await request.patch(`${cardTypes}/4/toggle`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: originalToggle
        });
        
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody.is_active).toEqual(originalToggle.is_active);
        });
    });
});

test.describe("API super-admin tests of Cards", {
    tag: ['@super', '@cards', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
    });
    test('Update pintopay replenish settings', async ({ request }) => {
        const response = await request.post(autoReplenish, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }, 
            data: pintopayAutoFill
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"result": "success"});
    });
    test('Get pintopay card types', async ({ request }) => {
        const params = {
            platform_id: 2    
        };
        const response = await request.get(cardTypes, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
    });
    test('Create banking card', async ({ request }) => {
        const response = await request.post(cardTypes, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: createCard
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody).toMatchObject(createCard);
    });
});

test.describe("API read-admin tests of Cards", {
    tag: ['@readadmin', '@cards', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiReadAdminAuth.json', 'utf-8'));
    });
    test('Update pintopay replenish settings', async ({ request }) => {
        const response = await request.post(autoReplenish, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }, 
            data: pintopayAutoFill
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
    test('Get pintopay card types', async ({ request }) => {
        const params = {
            platform_id: 2    
        };
        const response = await request.get(cardTypes, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
    });
    test('Create banking card', async ({ request }) => {
        const response = await request.post(cardTypes, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: createCard
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect(responseBody).toMatchObject({"code": "PageNotFound", "data": {}});
    });
});