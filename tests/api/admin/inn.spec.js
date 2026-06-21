import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
let authData;

const changeUserProp = `${process.env.API_BASE_URL}${process.env.API_ADMIN_USER_PROPERTIES}`;
const dataToChange = {"inn":"024101560908","reason":"Ручная вставка ИНН"}
const wrongDataInn = {"last_name":"Логунов","first_name":"Сергей","middle_name":null,"birth_date":"11.12.1980","passport_number":"8015300500","passport_issued_date":"15.01.2018"};
test.describe("Full admin tests of INN", {
    tag: ['@admin', '@infobox', '@fulladmin']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Full admin can set new INN', async ({ request }) => {
        const response = await request.post(`${changeUserProp}/1850/inn`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: dataToChange
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.inn).toEqual(dataToChange.inn)
    });

    test('Full admin can check INN', async ({ request }) => {
        const response = await request.post(`${changeUserProp}/1816/fill_inn`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: wrongDataInn
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"inn": "UNKNOWN", "result_message": null, "result_code": null});
    });
});

test.describe("Read-admin tests of INN", {
    tag: ['@readadmin', '@inn', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiReadAdminAuth.json', 'utf-8'));
    });
    test('Read-admin cant set new INN', async ({ request }) => {
        const response = await request.post(`${changeUserProp}/1850/inn`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: dataToChange
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
    test('Read-admin cant check INN', async ({ request }) => {
        const response = await request.post(`${changeUserProp}/1816/fill_inn`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: wrongDataInn
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toEqual({"code": "PageNotFound", "data": {}});
    });
});