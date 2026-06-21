import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
loadEnv();
let authData;
const domain = process.env.DOMAIN;

const getTrades = `${process.env.API_BASE_URL}${process.env.API_ADMIN_TRADES}`;

test.describe("Full admin tests of Trades", {
    tag: ['@admin', '@cards', '@fulladmin']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Get trades and make sure no cannibalism 869bfbd78', async ({ request }) => {
        const params = {
            page: 1,
            per_page: 10,
            domain
        };
        const response = await request.get(getTrades, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        
        responseBody.items.forEach((item, index) => {
        const limitEmail = item.limit_order?.user_email;
        const marketEmail = item.market_order?.user_email;
        const tradeId = item.id;
        expect.soft(limitEmail, `Trade ID ${tradeId} at index ${index} shows cannibalism (self-trading)` ).not.toBe(marketEmail);
        const limitUserId = item.limit_order?.user_id;
        const marketUserId = item.market_order?.user_id;
        expect.soft(limitUserId, `Trade ID ${tradeId} has matching user IDs`).not.toBe(marketUserId);
        });
    });
});