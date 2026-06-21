// POST /transfer Transfer money to another user

import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { uiSettings} from '../../data/ui.dev.js';
loadEnv();
let authData;
let authDataQrProvider;

const uiLink = `${process.env.API_BASE_URL}${process.env.API_UI_SETTINGS}`;
const domain = process.env.DOMAIN;
test.describe("Api test with ui settings like ui or faq, video guide for user 1", {
    tag: ['@ui', '@api', '@user1', '@prod']}, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
        authDataQrProvider = JSON.parse(fs.readFileSync('./auth/apiExtraAuth.json', 'utf-8'));
    });
    test('Get the settings', async ({ request }) => {
        const params = {
            domain
        }
        const response = await request.get(uiLink, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(uiSettings);
    });
});