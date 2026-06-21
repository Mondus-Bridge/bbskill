import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { clientStaticData } from '../../data/admin/external.js';
import fs from 'fs'; 
import path from 'path';
loadEnv();
let authData;

const importCSV = `${process.env.API_BASE_URL}${process.env.API_ADMIN_IMPORTV_CSV}`;
const externalUserInfo = `${process.env.API_BASE_URL}${process.env.API_ADMIN_EXTERNAL_USER_INFO}`;
const applyFee = `${process.env.API_BASE_URL}${process.env.API_ADMIN_USERS_FEE}`;
const partnerMail = process.env.PARTNER_EMAIL
const partnerFees = {"sbp_fee_abs":2,"sbp_fee_pct":2.9}

const domain = process.env.DOMAIN;
test.describe("Full admin tests of External clients", {
    tag: ['@pokoadmin', '@invoice', '@fulladmin']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
    test('Import csv file', async ({ request }) => {
        const params = {
            domain
        }
        const filePath = path.resolve(__dirname, '../../src/clients.csv');
        const response = await request.post(importCSV, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            multipart: {
                file: {
                    name: 'clients.csv',
                    mimeType: 'text/csv',
                    buffer: fs.readFileSync(filePath),
                }
            },
            params
        });
        expect.soft(response.status()).toBe(200);  
        const body = await response.json();
        expect(body).toMatchObject({"created": 0,"updated": 0,"skipped": 50,"errors_count": 0})
    });

    test(`Check static info external user in domain: ${domain}`, async ({ request }) => {
        let ext1008id;
        await test.step("Get id of EXT1008 external client id", async () => {
            const params = {
                page: 1,
                per_page: 10,
                domain,
                partner_client_query: 'EXT1008'
            }
            const response = await request.get(externalUserInfo, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params
            });
            expect.soft(response.status()).toBe(200);  
            const body = await response.json();
            ext1008id = body.items[0].id
            });
       

        await test.step(`Check static info external user in domain: ${domain}`, async () => {
            const params = {
                domain
            }
            const response = await request.get(`${externalUserInfo}/${ext1008id}`, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params
            });
            expect.soft(response.status()).toBe(200);  
            const body = await response.json();
            expect(body).toMatchObject({ ...clientStaticData, id: expect.any(Number), dt_update: expect.any(Number), dt_create: expect.any(Number), 
            });
        });
    });
    test(`Full admin can install fee by SPB for partner: ${partnerMail}`, async ({ request }) => {
        const params = {
            email: partnerMail
        }
        const response = await request.put(applyFee, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params,
            data: partnerFees
        });
        expect.soft(response.status()).toBe(200);
    });  
});

test.describe("Super tests of External clients", {
    tag: ['@pokosuper', '@invoice', '@super']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
    });

    test(`Install fee by SPB for partner: ${partnerMail}`, async ({ request }) => {
        const params = {
            email: partnerMail
        }
        const response = await request.put(applyFee, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params,
            data: partnerFees
        });
        expect.soft(response.status()).toBe(200);  
        const body = await response.json();
        expect(body).toMatchObject({"result": "success"});
    });  
 }); 
