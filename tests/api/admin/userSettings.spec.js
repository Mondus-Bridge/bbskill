import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import {groupSetsChange} from '../../data/admin/userSettings.js';
import { daysFromNowUnix } from '../../utils/date.js';
import { blockBalanceBody, phoneNumber, newPhoneNumber } from '../../data/admin/userSettings.js';
loadEnv();
let authData;


const editGroup19 = `${process.env.API_BASE_URL}${process.env.API_PL_GROUP_19}`;
const actionsWithGroup19 = `${process.env.API_BASE_URL}${process.env.API_ACTIONS_TO_GROUP_19}`;
const changeBlockWithdrawals = `${process.env.API_BASE_URL}${process.env.API_ADMIN_SWITCH}`;
const blockBalance = `${process.env.API_BASE_URL}${process.env.API_ADMIN_USER_BLOCKBALANCE}`;
const blockedBalance = `${process.env.API_BASE_URL}${process.env.API_ADMIN_USER_BLOCKEDBALANCE}`;
const writeOff = `${process.env.API_BASE_URL}${process.env.API_ADMIN_USER_BALANCE_WRITEOFF}`;
const balanceUnblock = `${process.env.API_BASE_URL}${process.env.API_ADMIN_USER_BALANCE_UNBLOCK}`;
const changeUserSettings = `${process.env.API_BASE_URL}${process.env.API_ADMIN_USERS}`;
const getAllUserSettings = `${process.env.API_BASE_URL}${process.env.API_ADMIN_USER}`;

test.describe("API read-admin tests of users settings", {
    tag: ['@admin', '@readadmin', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiReadAdminAuth.json', 'utf-8'));
    });
    test('Read admin shouldnt be able to change SBP of user 885', async ({ request }) => {
        const response = await request.post(`${changeUserSettings}/885/can_transfer_sbp`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"can_transfer_sbp": false, "reason":"test"}
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
    test('Read admin shouldnt able to change phone number of user 885', async ({ request }) => {
        const response = await request.post(`${changeUserSettings}/885/phone`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: phoneNumber
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
    test('Read admin shouldnt able to edit the group 19', async ({ request }) => {
        const response = await request.put(editGroup19 , {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: groupSetsChange
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
    test('Read admin shouldnt able to edit group member', async ({ request }) => {
        const response = await request.post(actionsWithGroup19 , {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"user_id":1716}
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
    test('Read admin shouldnt able to change the withdrawal lock to next day', async ({ request }) => {
        const response = await request.post(changeBlockWithdrawals , {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {
                dt_until: daysFromNowUnix(1),
                user_id : 927
            }
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
    test('Read admin shouldnt able to block 1 rub', async ({ request }) => {
        const response = await request.post(blockBalance , {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: blockBalanceBody
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
    test('Read admin shouldnt able to write on and off', async ({ request }) => {
            let ids = [];
        await test.step('Get list of blocked balances', async () => {
            const response = await request.get(`${blockedBalance}?id=885`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            ids = responseBody.items.map(item => item.id);
        });
        await test.step('Write-off balance', async () => {
            const response = await request.post(writeOff, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {
            "blocking_id": ids[0],
            "write_off_to_id": 935
            }
            });
            expect.soft(response.status()).toBe(404);  
            const responseBody = await response.json();
            expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
        });

        await test.step('Unblock balance', async () => {
            const response = await request.post(balanceUnblock, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {
            "blocking_id": ids[1],
            "user_id": 885
            }
            });
            expect.soft(response.status()).toBe(404);  
            const responseBody = await response.json();
            expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
        });
        });
});

test.describe("API full-admin tests of users settings", {
    tag: ['@admin', '@fulladmin', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Full admin shouldnt able to edit the group 19', async ({ request }) => {
        const response = await request.put(editGroup19, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: groupSetsChange
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
    test('Full admin should be able to change the withdrawal lock to next day', async ({ request }) => {
        const response = await request.post(changeBlockWithdrawals , {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {
                dt_until: daysFromNowUnix(1),
                user_id : 927
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"result": "success"});
    });
    [1, 2].forEach((run) => {
    test(`Full admin should be able to block 1 rub (run ${run})`, async ({ request }) => {
        const response = await request.post(blockBalance, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
        data: blockBalanceBody
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({ "result": "success" });
    });
    });

    test(`Full admin should be able to write on and off`, async ({ request }) => {
        let ids = [];
    await test.step('Get list of blocked balances', async () => {
        const response = await request.get(`${blockedBalance}?id=885`, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        ids = responseBody.items.map(item => item.id);
    });
    await test.step('Write-off balance', async () => {
        const response = await request.post(writeOff, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
        data: {
        "blocking_id": ids[0],
        "write_off_to_id": 935
        }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"result": "success"});
    });

    await test.step('Unblock balance', async () => {
        const response = await request.post(balanceUnblock, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
        data: {
        "blocking_id": ids[1],
        "user_id": 885
        }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"result": "success"});
    });
    });
});

test.describe("API full-admin changing phone settings", {
    tag: ['@admin', '@fulladmin', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Full admin should be able to change phone number of user 885', async ({ request }) => {
    await test.step('Change phone number', async () => {
        const response = await request.post(`${changeUserSettings}/885/phone`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: newPhoneNumber
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.phone_number).toEqual(newPhoneNumber.phone_number);
    });

    await test.step('Get phone number', async () => {
        const response = await request.get(`${getAllUserSettings}?id=885`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.phone_number).toEqual(newPhoneNumber.phone_number);
        });

    await test.step('Return phone number', async () => {
        const response = await request.post(`${changeUserSettings}/885/phone`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: phoneNumber
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.phone_number).toEqual(phoneNumber.phone_number);
        });
    });

    test('Get phone number changelog', async ({request}) => {
        const response = await request.get(`${changeUserSettings}/885/changelog`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.items?.length).toBeGreaterThanOrEqual(4);
    });
});

test.describe("API full-admin sbp settings for user 885", {
    tag: ['@admin', '@fulladmin', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Full admin should be able to change SBP of user 885', async ({ request }) => {
    await test.step('Make sbp settings false', async () => {
        const response = await request.post(`${changeUserSettings}/885/can_transfer_sbp`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"can_transfer_sbp": false, "reason":"test"}
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"can_transfer_sbp": false});
    });

    await test.step('Get phone number', async () => {
        const response = await request.get(`${getAllUserSettings}?id=885`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.can_transfer_sbp).toBeFalsy();
        });

    await test.step('Return SBP truthy', async () => {
        const response = await request.post(`${changeUserSettings}/885/can_transfer_sbp`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {"can_transfer_sbp": true, "reason":"test"}
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
       expect.soft(responseBody).toMatchObject({"can_transfer_sbp": true,});
        });
    });
});