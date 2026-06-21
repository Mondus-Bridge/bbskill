import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from "fs";
loadEnv();
let authData;

const sbpLast = `${process.env.API_BASE_URL}${process.env.API_SBP_UNPAID}`;
const sbpUserInfo = `${process.env.API_BASE_URL}${process.env.API_SBP_USER_INFO}`;
const sbpLimits = `${process.env.API_BASE_URL}${process.env.API_SBP_LIMITS}`;
const userData = {"name": "Б. Мих*** Серг*****", "phone": "+79996225700"};


test.describe("Get some SBP API", {
    tag: ['@api', '@user1']}, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });
    test("Get Pay2me limits", async ({ request }) => {
        const params = {
            bank_name: "Pay2me",
            country: "Россия"
        }
        const response = await request.get(sbpLimits, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"min_limit": 2, "max_limit": 100000.0});
    });
    test("Get SBP user info", async ({ request }) => {
        const response = await request.get(sbpUserInfo, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(userData);
    });
    test("Get SBP last payment or dont", async ({ request }) => {
        const response = await request.get(sbpLast, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const isPopulated = Object.keys(responseBody).length > 0;

        if (isPopulated) {
            expect.soft(responseBody).toMatchObject({
                id: expect.any(Number),
                status: expect.stringMatching(/pending|complete|expired/), 
                qr_url: expect.stringContaining('https://qr.nspk.ru')
            });
    
            expect.soft(responseBody.dt_create).toBeDefined();
        } else {
            expect.soft(responseBody).toEqual({});
        }});
});