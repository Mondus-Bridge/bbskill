import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
loadEnv();
let authDataAdmin;
let orderOfBuy;
let approveOfOrder;

const authorization  = `${process.env.API_BASE_URL}${process.env.API_LOGIN_URL}`
const password = process.env.PASSWORD;
const getLedger = `${process.env.API_BASE_URL}${process.env.API_LEDGER}`;
const changeState = `${process.env.API_BASE_URL}${process.env.API_STATE}`;
const tradeDocument = `${process.env.API_BASE_URL}${process.env.API_BBPRO_TRADE_DOCUMENT}`;
const emailAdminCompany = 'qa+bbproadmin@bitbanker.org'
const emailUserCompany = 'qa+bbprouser@bitbanker.org'

test.describe.serial("Admin company actions in BBPRO 869azw0rb", {
    tag: ['@app', '@bbpro']
    }, () => {
  test.beforeEach(async ({ request }) => {
    const params = {  
        domain: "wl2.dev.bitbanker.org"
    };
    const response = await request.post(authorization, {
    data: {
        email: emailAdminCompany,
        password
    },           
        params: params
    });
    
    expect.soft(response.status()).toBe(200);
    authDataAdmin = await response.json();

    await request.post(changeState, {
        headers: {
            Authorization: `Bearer ${authDataAdmin.id_token}`
        },
        data: {"company_id":1782,"is_active":true}
    });
});

    test('Get ids from trade_documents', async ({ request }) => {
        const response = await request.get(`${getLedger}?page=1&per_page=100`, {
        headers: {
            Authorization: `Bearer ${authDataAdmin.id_token}`
        }});
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const orderOperation = responseBody.items.find(
        (item) => item.trade_documents && item.trade_documents.length > 0
        );
        [orderOfBuy, approveOfOrder] = orderOperation.trade_documents.map((doc) => doc.id);
    });
    test("Get trade_document: Поручение-заявка на покупку", async ({ request }) => { 
        const response = await request.get(`${tradeDocument}/${orderOfBuy}`, {
        headers: {
            Authorization: `Bearer ${authDataAdmin.id_token}`
        }});
        expect.soft(response.status()).toBe(200);
        expect.soft(response.headers()['content-type']).toContain('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    });
    test("Get trade_document: Подтверждение исполнения заявки на покупку", async ({ request }) => { 
        const response = await request.get(`${tradeDocument}/${approveOfOrder}`, {
        headers: {
            Authorization: `Bearer ${authDataAdmin.id_token}`
        }});
        expect.soft(response.status()).toBe(200);
        expect.soft(response.headers()['content-type']).toContain('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    });
});

test.describe.serial("User company actions in BBPRO 869azw0rb", {
    tag: ['@app', '@bbpro']
    }, () => {
  test.beforeEach(async ({ request }) => {
    const params = {  
        domain: "wl2.dev.bitbanker.org"
    };
    const response = await request.post(authorization, {
    data: {
        email: emailUserCompany,
        password
    },           
        params: params
    });
    
    expect.soft(response.status()).toBe(200);
    authDataAdmin = await response.json();

    await request.post(changeState, {
        headers: {
            Authorization: `Bearer ${authDataAdmin.id_token}`
        },
        data: {"company_id":1781,"is_active":true}
    });
});

    test('Get ids from trade_documents', async ({ request }) => {
        const response = await request.get(`${getLedger}?page=1&per_page=100`, {
        headers: {
            Authorization: `Bearer ${authDataAdmin.id_token}`
        }});
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const orderOperation = responseBody.items.find(
        (item) => item.trade_documents && item.trade_documents.length > 0
        );
        [orderOfBuy, approveOfOrder] = orderOperation.trade_documents.map((doc) => doc.id);
    });
    test("Get trade_document: Поручение-заявка на покупку", async ({ request }) => { 
        const response = await request.get(`${tradeDocument}/${orderOfBuy}`, {
        headers: {
            Authorization: `Bearer ${authDataAdmin.id_token}`
        }});
        expect.soft(response.status()).toBe(200);
        expect.soft(response.headers()['content-type']).toContain('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    });
    test("Get trade_document: Подтверждение исполнения заявки на покупку", async ({ request }) => { 
        const response = await request.get(`${tradeDocument}/${approveOfOrder}`, {
        headers: {
            Authorization: `Bearer ${authDataAdmin.id_token}`
        }});
        expect.soft(response.status()).toBe(200);
        expect.soft(response.headers()['content-type']).toContain('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    });
});