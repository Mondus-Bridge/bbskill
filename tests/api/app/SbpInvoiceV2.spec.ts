import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { prepareInvoiceBody, preparePartnerStatusParams, prepareClientRequestBody, prepareCreateClientRequest} from '../../data/app/invoiceV2.dev.js';
import fs from 'fs';
loadEnv();
let authData;
const apiKey = process.env.APIKEY_PARTNER;
const apiKeyUser1 = process.env.APIKEY_USER_1;
const apiSecret = process.env.API_SECRET_AIFORY;


const apInvoiceV2 = `${process.env.API_BASE_URL}${process.env.API_INVOICE_V2}`;
const getInvoice = `${process.env.API_BASE_URL}${process.env.API_PUBLICK_INVOICE}`;
const checkExternalClients = `${process.env.API_BASE_URL}${process.env.API_PARTNER_CLIENTS_V2}`;


test.describe("SBP invoice created by Partner 1, API V2", {
    tag: ['@invoice', '@api', '@app', '@partner1']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiPartnerAuth.json', 'utf-8'));
    });


    test('Get partner client status (v2)', async ({ request }) => {
    const queryParams = preparePartnerStatusParams(apiSecret, "BBPRO1");
    const response = await request.get(checkExternalClients, {
        headers: {
            'Authorization': `Bearer ${authData.token}`,
            'Content-Type': 'application/json',
            'X-API-KEY': apiKey
        },
        params: queryParams 
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toBeDefined();
    });
    test('Create or update partner client with full_sign', async ({ request }) => {
        const clientData = prepareCreateClientRequest(apiSecret);

        const response = await request.post(checkExternalClients, {
            headers: {
                'X-API-KEY': apiKey,
                'Authorization': `Bearer ${authData.token}`,
                'Content-Type': 'application/json',
                'Idempotency-Key': clientData.idempotencyKey
            },
            data: clientData.body
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toBeDefined();
    });



    test('Create SBP invoice with Idempotency Key', async ({ request }) => {
        let linkOfSbpInvoice;
        let idOfInvoice;
        const invoiceData = prepareInvoiceBody(apiSecret);
        await test.step('Create an invoice by API currency and payment by RUBR method SBP', async () => {
            const response = await request.post(apInvoiceV2, {
            headers: {
                Authorization: `Bearer ${authData.token}`,
                'X-API-KEY': apiKey,
                'Idempotency-Key': invoiceData.idempotencyKey
            },
            data: invoiceData.body
            });
            expect.soft(response.status()).toBe(200);
            const body = await response.json();
            linkOfSbpInvoice = body.id;
            expect.soft(body.result).toBe('success');
            expect.soft(body.link).toContain(body.id);
            expect.soft(body.sbp_payment).toBe(true);
            const sbp = body.sbp_info;
            expect.soft(sbp, 'sbp_info object is missing').toBeDefined();
            expect.soft(sbp.amount).toEqual(8238.93);
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