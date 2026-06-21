import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { bbLoanEmail, updateSettings1726, borrowingLimits, allowed_borrowing_limits } from '../../data/admin/techLoans.js'
import fs from 'fs';
loadEnv();
let authData;

const globalLoan = `${process.env.API_BASE_URL}${process.env.API_ADMIN_GLOBAL}`;
const listOfUsers = `${process.env.API_BASE_URL}${process.env.API_ADMIN_USERS_BALANCES}`;
const userRestrictions = `${process.env.API_BASE_URL}${process.env.API_ADMIN_USERS}/1726/restrictions`;
const userInfo = `${process.env.API_BASE_URL}${process.env.API_ADMIN_USER}`;

test.describe("API super-admin tests of Loans for Technical accounts", {
    tag: ['@admin', '@super', '@api', '@loans']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
    });
    test('Get global loan email', async ({ request }) => {
        const response = await request.get(globalLoan, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        const responseBody = await response.json();
        expect(responseBody).toMatchObject({"email": "qa+globalloan@bitbanker.org"});
    });

    test('Get list of loan emails', async ({ request }) => {
        const params = {
            page:1,
            per_page:10,
            is_borrowing_email:true
        }
        const response = await request.get(listOfUsers, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const bbLoanEmailData = responseBody.items.filter(item => item.id === 1726);
        expect.soft(bbLoanEmailData[0]).toMatchObject(bbLoanEmail);
        expect(responseBody.page).toEqual(1);
        expect(responseBody.per_page).toEqual(10);
    });

    test('Update limits for loan user 1726', async ({ request }) => {
        const response = await request.patch(userRestrictions, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {
                updateSettings1726
            }
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"result": "success"});
    });

    test('Tech acc:1726 should have installed settings for loan', async ({ request }) => {
        const response = await request.get(`${userInfo}?id=1796`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        expect.soft(responseBody.is_technical).toEqual(true);
        expect.soft(responseBody.borrowing_limits).toEqual(borrowingLimits);
        expect.soft(responseBody.allowed_borrowing_limits).toEqual(allowed_borrowing_limits);
    });
});