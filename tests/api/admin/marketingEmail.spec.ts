import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs'; 
import {transactionEmail, transactionGroups, informEmail, informGroups, baseTemplate} from '../../data/admin/emails.js'
loadEnv();
let authData;

const getEmailGroups = `${process.env.API_BASE_URL}${process.env.API_ADMIN_EMAIL_GROUPS}`;
const getEmailTemplates = `${process.env.API_BASE_URL}${process.env.API_ADMIN_EMAIL_TEMPLATES}`;
const getBaseTemplate = `${process.env.API_BASE_URL}${process.env.API_ADMIN_EMAIL_BASE_TEMPLATES}`;

test.describe("Read admin actions with emails", {
    tag: ['@readadmin', '@email', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiReadAdminAuth.json', 'utf-8'));
        await new Promise(resolve => setTimeout(resolve, 1000));
    });
    test('Get all transactional emails', async ({ request }) => {
        const params = {
            page: 1,
            per_page: 200,
            group: 1,
            domain: 'app.dev.bitbanker.org' 
        };
        const response = await request.get(getEmailTemplates, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const sortedResponse = [...responseBody.items].sort((a, b) => a.id - b.id);
        const sortedExpected = [...transactionEmail.items].sort((a, b) => a.id - b.id);
        expect(sortedResponse).toMatchObject(sortedExpected);
    });
    test('Get transactional groups', async ({ request }) => {
        const params = {
            group: 1,
        };
        const response = await request.get(getEmailGroups, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const sortedResponse = [...responseBody.items].sort((a, b) => a.id - b.id);
        const sortedExpected = [...transactionGroups.items].sort((a, b) => a.id - b.id);
        expect(sortedResponse).toMatchObject(sortedExpected);
    });
    test('Get all inform emails', async ({ request }) => {
        const params = {
            page: 1,
            per_page: 200,
            group: 2,
            domain: 'app.dev.bitbanker.org' 
        };
        const response = await request.get(getEmailTemplates, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(informEmail);
    });
    test('Get infrom groups', async ({ request }) => {
        const params = {
            group: 2,
        };
        const response = await request.get(getEmailGroups, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(informGroups);
    });

    test('Get base template', async ({ request }) => {
        const params = {
            lang: 'ru',
            type: 'mjml',
            domain: 'app.dev.bitbanker.org'
        };
        const response = await request.get(getBaseTemplate, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(baseTemplate);
    });
});