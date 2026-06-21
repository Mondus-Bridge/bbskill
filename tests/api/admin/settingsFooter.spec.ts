// '/admin/footer-settings' GET - получение данных, POST - изменение данных
// '/public/footer-settings' GET - получение данных

import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import {landingFooter, appFooter} from '../../data/admin/footer.js'
loadEnv();
let authData;

const footerSettings = `${process.env.API_BASE_URL}${process.env.API_ADMIN_FOOTER_SET}`;
const publicFooter = `${process.env.API_BASE_URL}${process.env.API_PUBLIC_FOOTER}`;
const domain = process.env.DOMAIN;

//serial mode for reason not to change the data, cause I don't wanna fix the updated data
test.describe.serial("Settings for footers", {
    tag: ['@fulladmin', '@ui', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Get footer settings in admin panel for landing', async ({ request }) => {
        const params = {
            domain,
            key:'landing'
        };
        const response = await request.get(footerSettings, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(landingFooter);
    });
    test('Get footer settings in admin panel for app', async ({ request }) => {
        const params = {
            domain,
            key:'app'
        };
        const response = await request.get(footerSettings, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(appFooter);
    });

    test('Update footer settings in admin panel for landing', async ({ request }) => {
        const params = {
            domain,
            key:'landing'
        };
        const response = await request.put(footerSettings, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: landingFooter,
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"result": "success"})
    });
    test('Update footer settings in admin panel for app', async ({ request }) => {
        const params = {
            domain,
            key:'app'
        };
        const response = await request.put(footerSettings, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: appFooter,
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"result": "success"})
    });
});

test.describe("Settings for UI in app and landing", {
    tag: ['@public', '@ui', '@api']
  }, () => {
    test('Get footer settings for landing', async ({ request }) => {
        const params = {
            domain,
            key:'landing'
        };
        const response = await request.get(publicFooter, {
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(landingFooter);
    });
    test('Get footer settings', async ({ request }) => {
        const params = {
            domain,
            key:'app'
        };
        const response = await request.get(publicFooter, {
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(appFooter);
    });
});