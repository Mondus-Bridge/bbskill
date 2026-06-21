// the user has approved standart kyc and in the group id 19
import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { wlServices, sendRubn, sendUsdt, withdrawUsdtErc, withdrawUsdtAvax, withdrawUsdtBsc, withdrawUsdtTon, withdrawUsdtTron,
withdrawSwift, withdrawByVisa, buyCNB, payInvoiceInternally, sendUknown, sellUsdtMarket, sellUsdtMaker,
otcDeal, buyUsdtMarket, buyUsdtMaker, bankWithdrawlReq } from '../../data/app/limitedUser.js';
loadEnv();
const domain = process.env.DOMAIN;
let authData;
const availableServices = `${process.env.API_BASE_URL}${process.env.API_WL_SERVICES}`;
const sendTransfer = `${process.env.API_BASE_URL}${process.env.API_TRANSFER}`;
const sendCrypto = `${process.env.API_BASE_URL}${process.env.API_WITHDRAW_CRYPTO}`;
const sendSwift = `${process.env.API_BASE_URL}${process.env.API_SWIFT}`;
const sendVisa = `${process.env.API_BASE_URL}${process.env.API_VISA}`;
const buyInvestment = `${process.env.API_BASE_URL}${process.env.API_INVESTMENT_MY}`;
const payInvoice = `${process.env.API_BASE_URL}${process.env.API_INVOICE_PAY}`;
const exchange = `${process.env.API_BASE_URL}${process.env.API_EXCHANGE}`;
const otc = `${process.env.API_BASE_URL}${process.env.API_OTC}`;
const bankWith = `${process.env.API_BASE_URL}${process.env.API_BANK_WITHDRAW}`;
const withdrawCases = [
  { network: 'ERC20', data: withdrawUsdtErc, expectedCode: 'CurrencyNotAvailableToWithdraw' },
  { network: 'BSC', data: withdrawUsdtBsc, expectedCode: 'CurrencyNotAvailableToWithdraw' },
  { network: 'AVAX', data: withdrawUsdtAvax, expectedCode: 'CurrencyNotAvailableToWithdraw' },
  { network: 'TRON', data: withdrawUsdtTron, expectedCode: 'CurrencyNotAvailableToWithdraw' },
  { network: 'TON', data: withdrawUsdtTon, expectedCode: 'CurrencyNotAvailableToWithdraw' }
];

test.describe("Test of limited user in overdraft group with id 19", {
    tag: ['@app', '@groups', '@overdraft']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/OverdraftGroupAuth.json', 'utf-8'));
    });
    test('Get wl settings settings to make sure that services are not rendering', async ({ request }) => {
        const params = {  
            domain
        };
        const response = await request.get(availableServices, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },                
            params: params
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject(wlServices);
    });

    test('User shouldnt trasfer RUBN by using api', async ({ request }) => {
        const response = await request.post(sendTransfer, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: sendRubn
        });
        expect.soft(response.status()).toBe(400);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject({"code": "CurrencyNotAllowedToTransfer","data": {}});
    });

    test('User shouldnt trasfer USDT to other user by using api', async ({ request }) => {
        const response = await request.post(sendTransfer, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: sendUsdt
        });
        expect.soft(response.status()).toBe(400);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject({"code": "CurrencyNotAllowedToTransfer","data": {}});
    });

    test('User shouldnt trasfer USDT to not yet created account user by using api', async ({ request }) => {
        const response = await request.post(sendTransfer, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: sendUknown
        });
        expect.soft(response.status()).toBe(400);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject({"code": "CurrencyNotAllowedToTransfer","data": {}});
    });
    
    withdrawCases.forEach(({ network, data, expectedCode }) => {
    test(`User shouldnt withdraw USDT ${network} by using API`, async ({ request }) => {
        const response = await request.post(sendCrypto, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
        data
        });

        expect.soft(response.status()).toBe(400);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject({
        code: expectedCode,
        data: {}
        });
    });});
    test('User shouldnt withdraw SWIFT by using api', async ({ request }) => {
        const response = await request.post(sendSwift, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: withdrawSwift
        });
        expect.soft(response.status()).toBe(403);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject({"code": "UserForbiddenError","data": {}});
    });

    test('User shouldnt withdraw VISA by using api', async ({ request }) => {
        const response = await request.post(sendVisa, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: withdrawByVisa
        });
        expect.soft(response.status()).toBe(403);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject({"code": "UserForbiddenError","data": {}});
    });

    test('User shouldnt buy product CNB by using api', async ({ request }) => {
        const response = await request.post(buyInvestment, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: buyCNB
        });
        expect.soft(response.status()).toBe(403);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject({"code": "UserForbiddenError","data": {}});
    });

    test('User shouldnt able to pay invoice internally by using api', async ({ request }) => {
        const response = await request.post(payInvoice, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: payInvoiceInternally
        });
        expect.soft(response.status()).toBe(403);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject({"code": "UserForbiddenError","data": {}});
    });

    test('User shouldnt able sell usdt by market order', async ({ request }) => {
        const response = await request.post(exchange, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: sellUsdtMarket
        });
        expect.soft(response.status()).toBe(400);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject({"code": "CurrencyNotAvailableForTrading","data": {}});
    });
    test('User shouldnt able to buy usdt by market order', async ({ request }) => {
        const response = await request.post(exchange, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: buyUsdtMarket
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();

        expect.soft(responseBody.result).toEqual("success");
    });
    test('User shouldnt able sell usdt by maker order', async ({ request }) => {
        const response = await request.post(exchange, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: sellUsdtMaker
        });
        expect.soft(response.status()).toBe(400);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject({"code": "CurrencyNotAvailableForTrading","data": {}});
    });
    test('User should be able buy usdt by maker order', async ({ request }) => {
        const response = await request.post(exchange, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: buyUsdtMaker
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();

        expect.soft(responseBody.result).toEqual("success");
    });
    test('User shouldnt able to use OTC', async ({ request }) => {
        const response = await request.post(otc, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: otcDeal
        });
        expect.soft(response.status()).toBe(403);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject({"code": "UserForbiddenError","data": {}});
    });
    test('User shouldnt able to use bank withdraw', async ({ request }) => {
        const response = await request.post(bankWith, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
            data: bankWithdrawlReq
        });
        expect.soft(response.status()).toBe(403);
        const responseBody = await response.json();

        expect.soft(responseBody).toMatchObject({"code": "UserForbiddenError","data": {}});
    });
});
    