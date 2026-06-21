import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { usersSchema } from '../../data/admin/usersAccounts.js'
import { validateSchema } from '../../utils/schemaValidator.js';
loadEnv();
let authData;
const domain = process.env.DOMAIN;

const listOfUsers = `${process.env.API_BASE_URL}${process.env.API_ADMIN_USERS_BALANCES}`;
const partnerId = 1853

test.describe("Super-admin tests of users filter", {
    tag: ['@admin', '@super', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
    });
    test('Super-admin can get users list', async ({ request }) => {
        const params = {
            page: 1,
            per_page: 10
        }
        const response = await request.get(listOfUsers, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody.items, usersSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody.page).toEqual(1);
        expect.soft(responseBody.count).toBeGreaterThanOrEqual(1099);
        expect.soft(responseBody.per_page).toEqual(10);
    });
    test('Super-admin can get users from group id:19', async ({ request }) => {
        const params = {
            page: 1,
            per_page: 10,
            group_id:19
        }
        const response = await request.get(listOfUsers, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody.items, usersSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody.page).toEqual(1);
        expect.soft(responseBody.count).toBeGreaterThanOrEqual(1);
        expect.soft(responseBody.count).toBeLessThan(5);
        expect.soft(responseBody.per_page).toEqual(10);
    });
});

test.describe("Full-admin tests of users filter", {
    tag: ['@admin', '@fulladmin', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Full admin  can get users list', async ({ request }) => {
        const params = {
            page: 1,
            per_page: 10,
            domain
        }
        const response = await request.get(listOfUsers, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody.items, usersSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody.page).toEqual(1);
        expect.soft(responseBody.count).toBeGreaterThanOrEqual(1099);
        expect.soft(responseBody.per_page).toEqual(10);
    });
    test('Full admin can get users from group id:19', async ({ request }) => {
        const params = {
            page: 1,
            per_page: 10,
            group_id:19,
            domain
        }
        const response = await request.get(listOfUsers, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody.items, usersSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody.page).toEqual(1);
        expect.soft(responseBody.count).toBeGreaterThanOrEqual(1);
        expect.soft(responseBody.count).toBeLessThan(5);
        expect.soft(responseBody.per_page).toEqual(10);
    });

    test('Full admin can get partners users', async ({ request }) => {
        const params = {
            page: 1,
            per_page: 10,
            domain,
            is_partner: true,
            query: partnerId
        }
        const response = await request.get(listOfUsers, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.items[0].id).toEqual(partnerId);
        expect.soft(responseBody.page).toEqual(1);
        expect.soft(responseBody.count).toEqual(1);
     });
});