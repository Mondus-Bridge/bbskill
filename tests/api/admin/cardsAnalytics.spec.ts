

import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { partnerInfoResponseSchema } from '../../data/admin/cardsAnalytics.js'
import { validateSchema } from '../../utils/schemaValidator.js';
import { daysFromNowUnix } from '../../utils/date.js';
loadEnv();
let authData;

const partnerInfoResponse = `${process.env.API_BASE_URL}${process.env.API_CARD_ANALYTICS_RESPONSE}`;
const partnerInfoXLSX = `${process.env.API_BASE_URL}${process.env.API_CARD_ANALYTICS_RESPONSE_XLSX}`;

test.describe("Full admin tests of Cards Analytics", {
    tag: ['@admin', '@cards', '@fulladmin']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Get requests-without-response info', async ({ request }) => {
        const params = {
            date_from: daysFromNowUnix(-30),
            date_to: daysFromNowUnix(0)
        };
        const response = await request.get(partnerInfoResponse, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, partnerInfoResponseSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
    });
    test('Get requests-without-response xlsx', async ({ request }) => {
        const params = {
            date_from: daysFromNowUnix(-30),
            date_to: daysFromNowUnix(0)
        };
        const response = await request.get(partnerInfoXLSX, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200); 
    });
});