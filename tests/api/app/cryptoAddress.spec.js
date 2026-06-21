import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { cryptoCur } from '../../data/app/data.dev.js';
import fs from 'fs';
loadEnv();
let authData;

const depositAddress = `${process.env.API_BASE_URL}${process.env.API_DEPOSIT_ADDRESS}`;

test.describe("Check each addres value", {
    tag: ['@user1', '@app']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });
    cryptoCur.forEach(({ blockchain_network, ticker, network, value, memo}) => {
        test(`Verify address for ${ticker} on ${network}`, async ({ request }) => {
            const params = {
                blockchain_network: blockchain_network
            }
            const response = await request.get(depositAddress, {
                headers: {
                    Authorization: `Bearer ${authData.token}`},
                params
        });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect.soft(responseBody.address).toEqual(value);
            expect.soft(responseBody.memo).toEqual(memo);
        });
    })
});
        
    
