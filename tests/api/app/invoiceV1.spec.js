import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { invoiceBody, invoiceBodyUser1, invoiceDataType, invoiceBodyRubr, prepareExternalPartnerClientBody, externalIdDoNotExist, invoiceSbpFalse, invoiceBodyToExchange  } from '../../data/app/invoice.dev.js';
import { addressPatterns } from '../../utils/helper.js'
import { clientPayloadStatic, generateRandomClientPayload } from '../../data/admin/external.js'
import { validateSchema } from '../../utils/schemaValidator.js';
import fs from 'fs';
loadEnv();
let authData;
let dynamicUser;

const apInvoice = `${process.env.API_BASE_URL}${process.env.API_INVOICE_V1}`;
const getInvoice = `${process.env.API_BASE_URL}${process.env.API_PUBLICK_INVOICE}`;
const payInvoice = `${process.env.API_BASE_URL}${process.env.API_INVOICE_PAY}`;
const checkExternalClients = `${process.env.API_BASE_URL}${process.env.API_PUBLIC_EXTERNAL_USERS}`;
const apiKey = process.env.APIKEY_PARTNER;
const apiKeyUser1 = process.env.APIKEY_USER_1;
const apiSecret = process.env.API_SECRET_AIFORY;

test.describe("SBP invoice created by Partner 1", {
    tag: ['@invoice', '@api', '@app', '@partner1']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiPartnerAuth.json', 'utf-8'));
        dynamicUser = generateRandomClientPayload();
    });
    test('Create crypto invoice by API, payment by USDT', async ({ request }) => {
        const response = await request.post(apInvoice, {
        headers: {
            Authorization: `Bearer ${authData.token}`,
            'X-API-KEY': apiKey
        },
        data: invoiceBody
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, invoiceDataType);
        expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody.addresses.USDT.eth.address).toMatch(addressPatterns.eth);
        expect.soft(responseBody.addresses.USDT.tron.address).toMatch(addressPatterns.tron);
        expect.soft(responseBody.addresses.USDT.ton.address).toMatch(addressPatterns.ton);
        expect.soft(responseBody.addresses.USDT.ton.memo).toMatch(addressPatterns.memo);
        expect.soft(responseBody.addresses.USDT.bsc.address).toMatch(addressPatterns.bsc);
    });

    test('Can update phone field by api', async ({ request }) => {
        const finalBody = prepareExternalPartnerClientBody(clientPayloadStatic, apiSecret);

        const response = await request.post(checkExternalClients, {
            headers: {
                'X-API-KEY': apiKey,
                'Authorization': `Bearer ${authData.token}`,
                'Content-Type': 'application/json'
            },
            data: finalBody
        });
        expect.soft(response.status()).toBe(200);  
        const body = await response.json();
        expect(body.client_id).toBe(clientPayloadStatic.client_id);
        expect(typeof body.is_verified_for_sbp).toBe('boolean');
    });

    test('Partner Clients Registration', async ({ request }) => {
        const finalBody = prepareExternalPartnerClientBody(dynamicUser, apiSecret);

        const response = await request.post(checkExternalClients, {
            headers: {
                'X-API-KEY': apiKey,
                'Authorization': `Bearer ${authData.token}`,
                'Content-Type': 'application/json'
            },
            data: finalBody
        });
        expect.soft(response.status()).toBe(200);  
        const body = await response.json();
        expect(typeof body.is_verified_for_sbp).toBe('boolean');
    });


    test('Cant create SBP false invoice for partner of client', async ({request}) => {
            const response = await request.post(apInvoice, {
            headers: {
                Authorization: `Bearer ${authData.token}`,
                'X-API-KEY': apiKey
            },
            data: invoiceSbpFalse
            });
            expect.soft(response.status()).toBe(400);
            const body = await response.json();
            expect(body).toMatchObject({ "code": "PartnerClientNotAllowedForNonSbpInvoice","data": {}})
    });
    test('Cant create an invoice by API with wrong external id', async ({request}) => {
        const response = await request.post(apInvoice, {
        headers: {
            Authorization: `Bearer ${authData.token}`,
            'X-API-KEY': apiKey
        },
        data: externalIdDoNotExist
        });
        expect.soft(response.status()).toBe(400);
        const body = await response.json();
        expect(body).toMatchObject({ "code": "PartnerClientDoesNotExist","data": {}})
    });
    test('Create SBP Rubr invoice with autoexchange, autowithdrawal', async ({ request }) => {
        let linkOfSbpInvoice;
            const response = await request.post(apInvoice, {
            headers: {
                Authorization: `Bearer ${authData.token}`,
                'X-API-KEY': apiKey
            },
            data: invoiceBodyToExchange
            });
            expect.soft(response.status()).toBe(200);
            const body = await response.json();
            linkOfSbpInvoice = body.id;
            expect.soft(body.result).toBe('success');
            expect.soft(body.link).toContain(body.id);
            expect.soft(body.sbp_payment).toBe(true);
            const sbp = body.sbp_info;
            expect.soft(sbp, 'sbp_info object is missing').toBeDefined();
            expect.soft(sbp.amount).toEqual(10298.67);
            expect.soft(sbp.currency_symbol).toBe('RUBR');
            expect.soft(sbp.qr_url).toContain('https://qr.nspk.ru');
            expect.soft(sbp.sbp_qr_media_type).toBe('image/png');
            expect.soft(sbp.sbp_qr.length).toBeGreaterThan(100);
            const currentTime = Math.floor(Date.now() / 1000);
            expect.soft(sbp.dt_expiration).toBeGreaterThan(currentTime);
            expect.soft(body.addresses.RUBR.FIAT).toMatchObject({
                address: "",
                memo: null
            });
        });

    test('1) Create SBP invoice => 2) Get invoice', async ({ request }) => {
        let linkOfSbpInvoice;
        let idOfInvoice;
        await test.step('Create an invoice by API currency and payment by RUBR method SBP', async () => {
            const response = await request.post(apInvoice, {
            headers: {
                Authorization: `Bearer ${authData.token}`,
                'X-API-KEY': apiKey
            },
            data:invoiceBodyRubr
            });
            expect.soft(response.status()).toBe(200);
            const body = await response.json();
            linkOfSbpInvoice = body.id;
            expect.soft(body.result).toBe('success');
            expect.soft(body.link).toContain(body.id);
            expect.soft(body.sbp_payment).toBe(true);
            const sbp = body.sbp_info;
            expect.soft(sbp, 'sbp_info object is missing').toBeDefined();
            expect.soft(sbp.amount).toEqual(10298.67);
            expect.soft(sbp.currency_symbol).toBe('RUBR');
            expect.soft(sbp.qr_url).toContain('https://qr.nspk.ru');
            expect.soft(sbp.sbp_qr_media_type).toBe('image/png');
            expect.soft(sbp.sbp_qr.length).toBeGreaterThan(100);
            const currentTime = Math.floor(Date.now() / 1000);
            expect.soft(sbp.dt_expiration).toBeGreaterThan(currentTime);
            expect.soft(body.addresses.RUBR.FIAT).toMatchObject({
                address: "",
                memo: null
            });
        });

        await test.step(`Get created invoice in public URL: ${linkOfSbpInvoice}`, async () => {
            const params = {
                link: linkOfSbpInvoice
            }
            const response = await request.get(`${getInvoice}`, {
            headers: {
                Authorization: `Bearer ${authData.token}`,
                'X-API-KEY': apiKey},
            params});
            expect.soft(response.status()).toBe(200);  
            const body = await response.json();
            idOfInvoice = body.id;
            expect.soft(body.is_payed).toBe(false);
            expect.soft(body.payment_status).toBe('not_payed');
            expect.soft(body.sbp_payment).toBe(true);
            const sbp = body.sbp_info;
            expect.soft(sbp.amount).toBeGreaterThanOrEqual(body.amount);
            expect.soft(sbp.currency_symbol).toBe('RUBR');
            expect.soft(sbp.qr_url).toContain('https://qr.nspk.ru/');
            expect.soft(sbp.qr_url).toContain('bank=');
            expect.soft(sbp.qr_url).toContain('sum=');
            expect.soft(sbp.sbp_qr_media_type).toBe('image/png');
            const rubrAddress = body.addresses.find(a => a.currency_symbol === 'RUBR');
            expect.soft(rubrAddress).toMatchObject({
                address: "",
                blockchain_network_name: "FIAT",
                memo: null
            });
        });
    });
});

test.describe("API invoice created by User 1", {
    tag: ['@invoice', '@api', '@app', '@user1']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });
    test('Create an invoice by API currency and payment by USDT', async ({ request }) => {
        const response = await request.post(apInvoice, {
        headers: {
            Authorization: `Bearer ${authData.token}`,
            'X-API-KEY': apiKeyUser1
        },
        data: invoiceBodyUser1
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, invoiceDataType);
        expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody.addresses.USDT.eth.address).toMatch(addressPatterns.eth);
        expect.soft(responseBody.addresses.USDT.tron.address).toMatch(addressPatterns.tron);
        expect.soft(responseBody.addresses.USDT.ton.address).toMatch(addressPatterns.ton);
        expect.soft(responseBody.addresses.USDT.ton.memo).toMatch(addressPatterns.memo);
        expect.soft(responseBody.addresses.USDT.bsc.address).toMatch(addressPatterns.bsc);
    });
});