import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { validateSchema } from '../../utils/schemaValidator.js';
import {group19Currency} from '../../data/specialGroup19/groupCurrency.js';
import {swiftFee19} from '../../data/specialGroup19/swfitFee.js';
import {marktetFee19} from '../../data/specialGroup19/marketFee';
import {group19Members} from '../../data/specialGroup19/members.js';
import {groupsSchema} from '../../data/specialGroup19/allGroups.js';
loadEnv();
let authData;


const editGroup19 = `${process.env.API_BASE_URL}${process.env.API_PL_GROUP_19}`;
const groupsMembers = `${process.env.API_BASE_URL}${process.env.API_GROUP_USERS}`;
const groups = `${process.env.API_BASE_URL}${process.env.API_GROUPS}`;
const actionsWithGroup19 = `${process.env.API_BASE_URL}${process.env.API_ACTIONS_TO_GROUP_19}`;

test.describe("API super-admin tests of groups settings", {
    tag: ['@admin', '@super', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
    });
    test('Super-admin can get the group 19 currency settings', async ({ request }) => {
        const response = await request.get(`${editGroup19}/currencies`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(group19Currency);
    });
    test('Super-admin can get the group 19 swift settings', async ({ request }) => {
        const response = await request.get(`${editGroup19}/withdrawal-fees`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(swiftFee19);
    });
    test('Super-admin can get the group 19 market settings', async ({ request }) => {
        const response = await request.get(`${editGroup19}/market-fees`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(marktetFee19);
    });
    test('Super-admin can get the group 19 members list', async ({ request }) => {
        const response = await request.get(`${groupsMembers}?page=1&per_page=10&in_group=true&group_id=19`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(group19Members);
    });
    test('Super-admin can get the all groups summary', async ({ request }) => {
        const response = await request.get(`${groups}?page=1&per_page=10`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody.items, groupsSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody.page).toBeGreaterThanOrEqual(1);
        expect.soft(responseBody.count).toBeGreaterThanOrEqual(10);
        expect.soft(responseBody.per_page).toEqual(10);
    });
    test('Super-admin cant add the one group user to other group 869ad8rm4', async ({ request }) => {
        const response = await request.post(actionsWithGroup19, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"user_id":1716}
        });
        expect.soft(response.status()).toBe(400);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"code": "UserAlreadyInGroupError", "data": {"id": 19, "name": "Playwright Overdraft (dont touch)"}});
     
    });
});

test.describe("API full-admin tests of groups settings", {
    tag: ['@admin', '@fulladmin', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Full-admin cant can get the group 19 currency settings', async ({ request }) => {
        const response = await request.get(`${editGroup19}/currencies`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"code": "PageNotFound", "data": {}});
    });
    test('Full-admin cant can get the group 19 swift settings', async ({ request }) => {
        const response = await request.get(`${editGroup19}/withdrawal-fees`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"code": "PageNotFound", "data": {}});
    });
    test('Full-admin cant get the group 19 market settings', async ({ request }) => {
        const response = await request.get(`${editGroup19}/market-fees`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"code": "PageNotFound", "data": {}});
    });
    test('Full-admin cant get the group 19 members list', async ({ request }) => {
        const response = await request.get(`${groupsMembers}?page=1&per_page=10&in_group=true&group_id=19`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"code": "PageNotFound", "data": {}});
    });
    test('Full-admin can get the all groups summary (after 15 october)', async ({ request }) => {
        const response = await request.get(`${groups}?page=1&per_page=10`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const errors = validateSchema(responseBody.items, groupsSchema);
        expect.soft(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody.page).toBeGreaterThanOrEqual(1);
        expect.soft(responseBody.count).toBeGreaterThanOrEqual(10);
        expect.soft(responseBody.per_page).toEqual(10);
    });
});