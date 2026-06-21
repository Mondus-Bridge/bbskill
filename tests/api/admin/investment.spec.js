// GET /admin/investment/accrue-income-prediction Accrue income prediction - done
// GET /admin/investment/asset-creators Get investment asset creators - done
// GET /admin/investment/assets Get investment assets - done
// PATCH /admin/investment/assets Update existing investment asset
// POST /admin/investment/assets Create new investment asset
// POST /admin/investment/assets/accrue-income Accrue income
// POST /admin/investment/assets/active Toggle investment asset activity
// POST /admin/investment/assets/add Add shared investment asset to WL
// GET /admin/investment/assets/shared Get shared investment assets
// POST /admin/investment/assets/shared Toggle investment asset shared option
// POST /admin/investment/close Close asset and return money to users or remove it from WL
// GET /admin/investment/close-prediction Close asset prediction
// GET /admin/investment/investments Get client investments for WL
// GET /admin/investment/investments/actions Get client investments actions for WL
// PATCH /admin/investment/investments/buy Change purchase amount for user
// POST /admin/investment/investments/buy Buy more investment for user
// PATCH /admin/investment/investments/sell Change sell amount for user
// POST /admin/investment/investments/sell Sell investment for user
// POST /admin/investment/pay_revenue Pay revenue to users
// GET /admin/investment/pay_revenue-prediction Pay revenue prediction

import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { validateSchema } from '../../utils/schemaValidator.js';
loadEnv();
let authData;
const domain = process.env.DOMAIN;

const adminEmail = `${process.env.FULL_ADMIN}`;
const acrueIncome = `${process.env.API_BASE_URL}${process.env.API_ADMIN_INVESTMENT_ACCRUE_INCOME}`;
const creators = `${process.env.API_BASE_URL}${process.env.API_ADMIN_INVESTMENT_CREATORS}`;
const myAssets = `${process.env.API_BASE_URL}${process.env.API_ADMIN_INVESTMENT_ASSETS}`;

test.describe("API admin tests of Investment", {
    tag: ['@admin', '@investment', '@fulladmin']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Get accrue income prediction', async ({ request }) => {
        const params = {
            investment_asset_id: 106,
            domain,
            cost: 10         
        };
        const response = await request.get(acrueIncome, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(Array.isArray(responseBody)).toBe(true); 
        const firstUser = responseBody[0];
        expect.soft(firstUser.user_id).toBe(885);
        expect.soft(firstUser.cost).toBe(params.cost);
    });

    test('Get active investment asset creators', async({request})=>{
        const params = {
            is_active: true,
            domain      
        };
        const response = await request.get(creators, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBe(true);
        expect(responseBody.length).toBeGreaterThan(2);
        expect(responseBody.length).toBeLessThan(10);
      
        for (const asset of responseBody) {
          expect(typeof asset.asset_id).toBe('number');
          expect(typeof asset.asset_symbol).toBe('string');
          expect(typeof asset.creator_id).toBe('number');
          expect(typeof asset.creator_email).toBe('string');
        }
    });

    test('Get all investment asset creators', async({request})=>{
        const params = {
            domain      
        };
        const response = await request.get(creators, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBe(true);
        expect(responseBody.length).toBeGreaterThan(30);
      
        for (const asset of responseBody) {
          expect(typeof asset.asset_id).toBe('number');
          expect(typeof asset.asset_symbol).toBe('string');
          expect(typeof asset.creator_id).toBe('number');
          expect(typeof asset.creator_email).toBe('string');
        }
    });

    test('Get my investment assets', async({request})=>{
        const params = {
            page: 1,
            per_page: 10,
            creator_email: adminEmail,
            domain,
            is_active: true      
        };
        const response = await request.get(myAssets, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });

        const responseBody = await response.json();
        expect.soft(responseBody.page).toBe(params.page);
        expect.soft(responseBody.per_page).toBe(params.per_page);
        expect.soft(responseBody.count).toEqual(2);

        for (const item of responseBody.items) {
            expect(typeof item.id).toBe('number');
            expect(item.currency_name).toBe('Tether USD');
            expect(item.currency_symbol).toBe('USDT');
            expect(item.symbol).toMatch(/^PLWR/);
            expect(item.risk).toBe('medium');
            expect(item.complexity).toBe('high');
            expect(typeof item.revenue_from_pct).toBe('number');
            expect(item.sell_fee_pct).toBe(1.0);
            expect(item.manager_reward_pct).toBe(3.0);
            expect(item.referrer_fee_pct).toBe(70.0);
            expect(typeof item.current_price).toBe('number');
            expect(item.is_active).toBe(true);
            expect(typeof item.creator_email).toBe('string');
            expect(item.description.en.name).toMatch(/^PlayProduct/);
            expect(typeof item.description.en.about).toBe('string');
            expect(typeof item.description.en.investment_idea).toBe('string');
            expect(typeof item.description.en.card_description).toBe('string');
          }
    });
});