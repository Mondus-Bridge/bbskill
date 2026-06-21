import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { validateSchema } from '../../utils/schemaValidator.js';
import { publicMarketSchema } from '../../data/auth.dev.js';
loadEnv();

const publicMarkets = `${process.env.API_BASE_URL}${process.env.API_PUBLIC_MARKETS}`;
const publicSbp = `${process.env.API_BASE_URL}${process.env.API_PUBLIC_PREDICTION_SBP}`;
const domain = process.env.DOMAIN;
const apiKey = process.env.APIKEY_PARTNER;

test.describe("Public test for pre entering to app", {
    tag: ['@auth', '@public']
  }, () => {
    test('Before login see the market of BB', async ({ request }) => {
        const params = {  
           domain
        };
        const response = await request.get(publicMarkets, {         
            params: params
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        expect.soft(responseBody[0].id).toBe(9);
        expect.soft(responseBody.length).toBeGreaterThan(10);
        const errors = validateSchema(responseBody, publicMarketSchema);
        expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
   });
    test('Before login see the market of BB Pro', async ({ request }) => {
        const params = {  
           domain: "wl2.dev.bitbanker.org"
        };
        const response = await request.get(publicMarkets, {         
            params: params
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        expect.soft(responseBody[0].id).toBe(58);
        expect.soft(responseBody.length).toBe(1);
   });

    test('Get prediction for sbp calcualtor for externalPartner', async ({ request }) => {
        const response = await request.get(publicSbp, {
            headers: {
                'X-API-KEY': apiKey
            }
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toMatchObject({
        "currency_code": "RUBR",
        "min_sbp_limit": 10,
        "max_sbp_limit": 10000,
        "sbp_fee_pct": 15,
        "sbp_fee_abs": 2})
   });
}); 

