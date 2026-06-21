// POST /public​/admin​/authorization Admin user auth

import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { validateSchema } from '../../utils/schemaValidator.js';
import { authTokenSchema } from '../../data/auth.dev.js';
loadEnv();

const authorization = `${process.env.API_BASE_URL}${process.env.API_LOGIN_URL}`;
const logout = `${process.env.API_BASE_URL}${process.env.API_LOGOUT}`;
const email = process.env.USER_1_EMAIL;
const password = process.env.PASSWORD;
const domain = process.env.DOMAIN;
const testWlUser = 'qa+mtsdig7707767501@bitbanker.org';
const logoutUser = 'qa+user2@bitbanker.org'

test.describe("Tests of auth and login", {
    tag: ['@auth', '@public']
  }, () => {

    test('Login in domain test-wl.dev.bitbanker.org with user from app.bitbanker.org', async ({ request }) => {
        const params = {  
           domain: "test-wl.dev.bitbanker.org"
        };
        const response = await request.post(authorization, {
        data: {
            email,
            password
        },           
            params: params
        });
        expect.soft(response.status()).toBe(400);
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "WrongWhiteLabelError", "data": {}});
   });
    test('Login in domain test-wl.dev.bitbanker.org with user from test-wl.dev.bitbanker.org', async ({ request }) => {
        const params = {  
           domain: "test-wl.dev.bitbanker.org"
        };
        const response = await request.post(authorization, {
        data: {
            email: testWlUser,
            password
        },           
            params: params
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, authTokenSchema);
        expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
   });
    test(`Login in domain ${domain}} with user from ${domain}}`, async ({ request }) => {
        const params = {  
           domain
        };
        const response = await request.post(authorization, {
        data: {
            email,
            password
        },           
            params: params
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, authTokenSchema);
        expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
   });

    test('Login in and logout to test this task 869aqxfnc', async ({ request }) => {
        let autData
        await test.step('Login', async () => {
        const params = {  
            domain
            };
            const response = await request.post(authorization, {
            data: {
                email:logoutUser,
                password
            },           
                params: params
            });
            expect.soft(response.status()).toBe(200);
            autData = await response.json();
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        await test.step('Logout', async () => {
            const response = await request.post(logout, {
            headers: {
                Authorization: `Bearer ${autData.id_token}`
            },
            data: {
                access_token: autData.access_token,
                refresh_token: autData.refresh_token
            }
            });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect(responseBody).toMatchObject({"result": "success"});
        });
    });
});
    