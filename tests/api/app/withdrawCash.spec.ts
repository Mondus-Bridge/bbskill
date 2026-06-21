import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';

loadEnv();
const domain = process.env.DOMAIN;

const URLS = {
    auth: `${process.env.API_BASE_URL}${process.env.API_LOGIN_URL}`,
    deposit: `${process.env.API_BASE_URL}${process.env.API_CANCEL_FIAT_DEPOSIT}`,
    withdraw: `${process.env.API_BASE_URL}${process.env.API_CANCEL_FIAT_WITHDRAWAL}`
};

test('Login once and try to delete multiple blocked operations 869bf40y9', {tag: ['@auth', '@public']}, async ({ request }) => {
    let autData;

    await test.step('Login', async () => {
        const response = await request.post(URLS.auth, {
            data: { email: "qa+user2@bitbanker.org", password: process.env.PASSWORD },
            params: { domain }
        });
        expect(response.status(), 'Login failed, cannot proceed with rate-limited test').toBe(200);
        autData = await response.json();
    });

    const blockedOperations = [
        { name: 'Deposit', url: URLS.deposit, id: 608387, code: '4907613473' },
        { name: 'Withdraw', url: URLS.withdraw, id: 608389, code: '4326448624' }
    ];

    for (const op of blockedOperations) {
        await test.step(`Delete ${op.name} operation code ${op.id}`, async () => {
            const response = await request.post(op.url, {
                headers: { Authorization: `Bearer ${autData.id_token}` },
                data: { ledger_operation_id: op.id }
            });

            expect.soft(response.status()).toBe(400);
            
            const body = await response.json();
            expect.soft(body, `Operation ${op.id} did not return the expected error code`).toMatchObject({
                "code": "OperationIsBlocked",
                "data": {}
            });
            
            expect.soft(body.result).not.toBe("success");
        });
    }
});