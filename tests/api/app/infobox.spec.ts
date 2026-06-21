import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { infoboxData } from '../../data/public/infobox.js';
import fs from 'fs';
loadEnv();
let authData;
const publicInfobox = `${process.env.API_BASE_URL}${process.env.API_PUBLIC_INFOBOX}`
const domain = process.env.DOMAIN;
test.describe("Get all infobox data by key", {
    tag: ['@ui', '@api', '@user1', '@infobox']}, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });
    infoboxData.forEach((item)=> {
    test(`Get by key: ${item.key} requested data`, async ({ request }) => {
        const params = {
            domain,
            key: item.key
        };
        const response = await request.get(publicInfobox, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.value).toMatchObject(item.value);
    });
    });
});