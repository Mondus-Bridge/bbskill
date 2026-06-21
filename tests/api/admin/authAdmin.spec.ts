// POST /public​/admin​/authorization Admin user auth

import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { validateSchema } from '../../utils/schemaValidator.js';
import {authTokenSchema } from '../../data/auth.dev.js';
loadEnv();

const authorization = `${process.env.API_BASE_URL}${process.env.API_ADMIN_LOGIN_URL}`;
const bbFullAdmin = process.env.FULL_ADMIN;
const password = process.env.PASSWORD;
const testWlAdmin = "qa+controller@bitbanker.org";

test.describe("Tests of auth and login", {
    tag: ['@auth']
  }, () => {
    test('Login in admin panel with user from app.dev.bitbanker.org', async ({ request }) => {
        const response = await request.post(authorization, {
        data: {
            email: bbFullAdmin,
            password
        }
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, authTokenSchema);
        expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
   });
       test('Login in admin panel with user from test-wl.dev.bitbanker.org', async ({ request }) => {
        const response = await request.post(authorization, {
        data: {
            email: testWlAdmin,
            password
        }          
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, authTokenSchema);
        expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
   });
});
    