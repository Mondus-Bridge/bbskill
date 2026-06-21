import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs'; 
loadEnv();
let authData;


const invoiceSets = `${process.env.API_BASE_URL}${process.env.API_ADMIN_INVOICE_SET}`;
const invoiceList = `${process.env.API_BASE_URL}${process.env.API_ADMIN_INVOICE}`;
const data = {"invoice_lifetime": 1, "threshold_for_manual_admin_payment": 98.5};
const data2 = {"invoice_lifetime": 7, "threshold_for_manual_admin_payment": 95};
const data3 =  [
    {
      "id": 2379,
      "dt_create": 1769690676,
      "payer_fio": "invoice tester 86995v9bt",
      "amount": 2,
      "received_amount": 0.12,
      "received_amount_pct": 0.06,
      "is_payed": false,
      "payment_status": "partial_payed",
      "link": "4imubAJMOjYvnxDSZSJSPC",
      "currency_id": 34,
      "currency_name": "Ton",
      "currency_symbol": "TON",
      "payment_deadline_dt": 1769817600,
      "description": "сохранять крипто-адрес",
      "language": "ru",
      "header": "86995v9bt",
      "is_created_by_api": false,
      "client_id": null,
      "addresses": [
        {
          "currency_id": 34,
          "currency_name": "Ton",
          "currency_symbol": "TON",
          "currency_min_deposit_amount": 1,
          "address": "UQAf4EXg_rKszSIXkvw-0YB6xBviTJnUQ5nJHaV9qgO9ozwU",
          "memo": "396704665"
        }
      ],
      "deprecated_addresses": [],
      "is_needed_use_logo": false,
      "crypto_payment": true,
      "sbp_payment": false,
      "status": "pending",
      "decline_message": null,
      "blockchain_network_name": "Ton",
      "invoice_payment_address": "UQAf4EXg_rKszSIXkvw-0YB6xBviTJnUQ5nJHaV9qgO9ozwU",
      "invoice_payment_memo": "396704665"
    },
    {
      "id": 2378,
      "dt_create": 1769688177,
      "payer_fio": "invoice tester 86995v9bt",
      "amount": 1,
      "received_amount": 1,
      "received_amount_pct": 1,
      "is_payed": true,
      "payment_status": "full_payed",
      "link": "1bT2g25TikPbPQwklH9a6s",
      "currency_id": 9,
      "currency_name": "Tron",
      "currency_symbol": "TRX",
      "payment_deadline_dt": 1769817600,
      "description": "test of this task",
      "language": "ru",
      "header": "86995v9bt",
      "is_created_by_api": false,
      "client_id": null,
      "addresses": [],
      "deprecated_addresses": [
        {
          "currency_id": 9,
          "currency_name": "Tron",
          "currency_symbol": "TRX",
          "currency_min_deposit_amount": 0.5,
          "address": "TAVpdFSKrfCo1mBxUpW5qBrEmSGog9F8Zd",
          "memo": null,
          "deprecated_at": 1770127192
        }
      ],
      "is_needed_use_logo": false,
      "crypto_payment": true,
      "sbp_payment": false,
      "status": "pending",
      "decline_message": null,
      "blockchain_network_name": "Tron (TRC20)",
      "invoice_payment_address": "TAVpdFSKrfCo1mBxUpW5qBrEmSGog9F8Zd",
      "invoice_payment_memo": null
    }
  ];
test.describe("Full admin tests of Invoices", {
    tag: ['@admin', '@invoice', '@fulladmin']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Set of test for invoice', async ({ request }) => {
        await test.step('Get original settings', async () => {
            const response = await request.get(invoiceSets, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                }
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            expect.soft(responseBody).toMatchObject(data );
        });
        await test.step('Set new settins', async () => {
            const response = await request.put(invoiceSets, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                data: data2
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            expect.soft(responseBody).toMatchObject({"result": "success"});
        });
        await test.step('Return original settins', async () => {
            const response = await request.put(invoiceSets, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                data
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            expect.soft(responseBody).toMatchObject({"result": "success"});
        });
    });

    test('Paid invoices always has saved address 86995v9bt', async ({request}) => {
        const params = {
                page: 1,
                per_page: 10,
                id: 1898
            }
        const response = await request.get(invoiceList, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody.items).toEqual(data3);
    });
});

test.describe("Read admin tests of Invoices", {
    tag: ['@readadmin', '@invoice', '@admin']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiReadAdminAuth.json', 'utf-8'));
    });
    test('Get original settings', async ({request}) => {
        const response = await request.get(invoiceSets, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(data );
    });
    test('Cant set new settings', async ({request}) => {
        const response = await request.put(invoiceSets, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: data2
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"code": "PageNotFound", "data": {}});
    });
});