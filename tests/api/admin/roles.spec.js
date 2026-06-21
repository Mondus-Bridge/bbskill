import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import {superAdminPermissions, fullAdminPermissions, apiRole, apiRoleUpdate, searchResult, searchResultTestWL} from '../../data/roles.js';
loadEnv();
let authData;

const permissionsLink = `${process.env.API_BASE_URL}${process.env.API_ADMIN_PERMISSIONS}`;
const actionsWithRoles = `${process.env.API_BASE_URL}${process.env.API_ADMIN_ROLES}`;
const adminCollections = `${process.env.API_BASE_URL}${process.env.API_ADMIN_ADMIN}`;

test.describe("API super-admin tests of roles", {
    tag: ['@admin', '@super', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
    });
    test('Get super permissions', async ({ request }) => {
        const response = await request.get(permissionsLink, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual(superAdminPermissions);
    });

    test('CRUD admin role', async ({ request }) => {
        let id 
        await test.step('Create admin role', async () => {
            const response = await request.post(actionsWithRoles, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }, 
            data: apiRole
        });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            id = responseBody.id
            expect(responseBody).toMatchObject(apiRole);
    });

        await test.step('Update admin role', async () => {
            const response = await request.patch(actionsWithRoles, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }, 
            data: {
                ...apiRoleUpdate,
                id: id
            }
        });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect(responseBody).toMatchObject({
                                ...apiRoleUpdate,
                                id: id
            });
        });

        await test.step('Delete admin role', async () => {
            const response = await request.delete(actionsWithRoles, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }, 
            data: {
                role_id: id
            }
        });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect(responseBody).toMatchObject({"result": "success"})
        });
   });

    test('Super shouldnt be able to delete another admin role in use (assigned to anyone)', async ({ request }) => {
            const response = await request.delete(actionsWithRoles, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }, 
            data: {
                role_id: 75
            }
        });
            expect.soft(response.status()).toBe(404);
            const responseBody = await response.json();
            expect(responseBody).toMatchObject({"code": "AdminRoleIsStillUsingBySomeone", "data": {}})
    });
    test('Filter users by WL Bitbanker', async ({ request }) => {
            const response = await request.get(`${adminCollections}?page=1&per_page=10&domain=app.dev.bitbanker.org`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect(responseBody.page).toBe(1);
            expect(responseBody.count).toBeGreaterThan(60);
            expect(responseBody.count).toBeLessThan(100);
            expect(responseBody.per_page).toBe(10);
            expect(responseBody.items.length).toBeGreaterThan(0)
    });
    test('Filter users by test WL', async ({ request }) => {
            const response = await request.get(`${adminCollections}?page=1&per_page=10&domain=test-wl.dev.bitbanker.org`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect(responseBody.page).toBe(1);
            expect(responseBody.count).toBeGreaterThan(10);
            expect(responseBody.count).toBeLessThan(30);
            expect(responseBody.per_page).toBe(10);
            expect(responseBody.items.length).toBeGreaterThan(0)
    });
    test('Filter user alert@haschange.com by WL Bitbanker', async ({ request }) => {
            const response = await request.get(`${adminCollections}?page=1&per_page=10&query=alert@haschange.com`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect(responseBody.page).toBe(1);
            expect(responseBody.count).toBe(1);
            expect(responseBody.per_page).toBe(10);
            expect(responseBody).toMatchObject(searchResult);
    });
    test('Filter user qa+kasper7713140469@bitbanker.org by test WL', async ({ request }) => {
            const response = await request.get(`${adminCollections}?page=1&per_page=10&query=qa%2Bkasper7713140469@bitbanker.org`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect(responseBody.page).toBe(1);
            expect(responseBody.count).toBe(1);
            expect(responseBody.per_page).toBe(10);
            expect(responseBody).toMatchObject(searchResultTestWL);
    });
});

test.describe("API full-admin tests of roles", {
    tag: ['@admin', '@fulladmin', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Get fulladmin permissions', async ({ request }) => {
        const response = await request.get(permissionsLink, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        const expected = structuredClone(fullAdminPermissions);
        responseBody.can_dw_currencies.sort();
        expected.can_dw_currencies.sort();
        expect.soft(responseBody).toMatchObject(expected);
    });
    test('Full-admin shouldnt be able to create another admin role', async ({ request }) => {
            const response = await request.post(actionsWithRoles, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }, 
            data: apiRole
        });
            expect.soft(response.status()).toBe(404);
            const responseBody = await response.json();
            expect(responseBody).toEqual({"code": "PageNotFound","data": {}});
    });
    test('Full-admin shouldnt be able to delete another admin role', async ({ request }) => {
            const response = await request.delete(actionsWithRoles, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }, 
            data: {
                role_id: 75
            }
        });
            expect.soft(response.status()).toBe(404);
            const responseBody = await response.json();
            expect(responseBody).toMatchObject({"code": "PageNotFound","data": {}});
    });
    test('Full-admin shouldnt be able to change permissions for another admin role', async ({ request }) => {
            const response = await request.patch(actionsWithRoles, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }, 
            data: {
                ...apiRoleUpdate,
                id: 75
            }
        });
            expect.soft(response.status()).toBe(404);
            const responseBody = await response.json();
            expect(responseBody).toMatchObject({"code": "PageNotFound","data": {}});
    });
});