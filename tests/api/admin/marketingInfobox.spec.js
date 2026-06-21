import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { infoboxData, infoboxChange} from '../../data/public/infobox.js'
import fs from 'fs';
loadEnv();
let authData;
const domain = process.env.DOMAIN;
const publicInfobox = `${process.env.API_BASE_URL}${process.env.API_ADMIN_INFOBOX}`

test.describe("Full admin tests of Infobox", {
    tag: ['@admin', '@infobox', '@fulladmin']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    infoboxData.forEach((item)=> {
        test(`Get by key: ${item.key} requested data`, async ({ request }) => {
            const params = {
                domain,
                key: item.key
            };
            const response = await request.get(publicInfobox , {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            expect(responseBody.value).toMatchObject(item.value);
        });
    });
    test("Put new value", async ({ request }) => {
        const params = {
            domain
        };
        const response = await request.put(publicInfobox , {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params,
            data: infoboxChange
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody).toMatchObject({"result": "success"});
    });
    test("Check new value", async ({ request }) => {
        const params = {
            domain,
            key: infoboxChange.key
        };
        const response = await request.get(publicInfobox , {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody).toMatchObject(infoboxChange);
    });
});