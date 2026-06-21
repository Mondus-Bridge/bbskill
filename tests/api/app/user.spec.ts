import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { currentUserSettings, mainUserSettings} from '../../data/user.js';
loadEnv();
let authData;

const currentUser = `${process.env.API_BASE_URL}${process.env.API_CURRENT_USER}`;
const mainUser = `${process.env.API_BASE_URL}${process.env.API_MAIN_USER}`;
const changePass = `${process.env.API_BASE_URL}${process.env.API_USER_CHANGE_PASS}`;

test.describe("API tests of user settings", {
    tag: ['@app', '@api', '@user1']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });
    test(`Get user: ${process.env.USER_1_EMAIL} main setting info`, async ({ request }) => {
        const response = await request.get(mainUser, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        }});
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toMatchObject(mainUserSettings);
    });
    test(`Get user: ${process.env.USER_1_EMAIL} settings and change it`, async ({ request }) => {
        await test.step('Just get static user settings', async () => {
            const response = await request.get(currentUser, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }});
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect(responseBody).toMatchObject(currentUserSettings);
        });
        await test.step('Then change cookies to true', async () => {
            const response = await request.post(currentUser, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"use_cookies": false}
        });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect(responseBody).toMatchObject({"changed": ["use_cookies"]});
        });
        await test.step('Return cookies to false', async () => {
            const response = await request.post(currentUser, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"use_cookies": true}
        });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect(responseBody).toMatchObject({"changed": ["use_cookies"]});
        });
    });
    test('Change password', async ({ request }) => {
        const data = {
            access_token: authData.token,
            password: 'qwertySUN123!'
        }
        const response = await request.post(changePass, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }, 
            data
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"result": "success"});
    });
});