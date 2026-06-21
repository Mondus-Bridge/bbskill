import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
loadEnv();
let authData;
const domain = process.env.DOMAIN;

const iidxReport = `${process.env.API_BASE_URL}/latest/admin/partners/1853/iidx-check-errors`;
const sbpReport = `${process.env.API_BASE_URL}/latest/admin/partners/1853/sbp-top-up-errors`;

test.describe("Full-admin tests of sbp partner reports", {
    tag: ['@admin', '@fulladmin', '@api', '@withdraw']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Get iidx check errors', async ({ request }) => {
        const params = {
            "date_from": 1780416000,
            "date_to": 1780502399
        }
        const response = await request.get(iidxReport, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.text();
        expect(responseBody).toContain("дата ошибки,почта клиента,проверка,краткая расшифровка");
    });
    test('Get sbp top-up errors', async ({ request }) => {
        const params = {
            "date_from": 1780243200,
            "date_to": 1780329599
        }
        const response = await request.get(sbpReport, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.text();
        expect(responseBody).toContain("Код ошибки,Краткая расшифровка,Кол-во уникальных клиентов партнеров");
    });
});
