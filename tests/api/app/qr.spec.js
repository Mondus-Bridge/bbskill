import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from "fs";
import { qrDetailResident, qrDetailCompany, qrDetailNonResident } from '../../data/qr.dev.js';
loadEnv();

const authorization = `${process.env.API_BASE_URL}${process.env.API_LOGIN_URL}`;
const getQrDetails = `${process.env.API_BASE_URL}${process.env.API_QR_DATA}`;
const getQrImage = `${process.env.API_BASE_URL}${process.env.API_QR_IMG}`;
const changeState = `${process.env.API_BASE_URL}${process.env.API_STATE}`;
const qrResident = fs.readFileSync("./tests/src/pervouralskQr.png");
const qrNonResident = fs.readFileSync("./tests/src/qr-codenoneresident.png");
const qrCompany = fs.readFileSync("./tests/src/qr-Company.png");
const password = process.env.PASSWORD;
const companyAccount = 'qa+lana7701793872bb@bitbanker.org'
test('Tests of QR settings for personal and company', { tag: ['@app', '@other']}, async ({ request }) => {
        let autData
        await test.step('Login', async () => {
        const params = {  
            domain: "app.dev.bitbanker.org"
            };
            const response = await request.post(authorization, {
            data: {
                email: companyAccount,
                password
            },           
                params: params
            });
            expect.soft(response.status()).toBe(200);
            autData = await response.json();
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        await test.step('Install personal mode', async () => {
            await request.post(changeState, {
                headers: {
                    Authorization: `Bearer ${autData.id_token}`
                },
                data: {"company_id":1530,"is_active":false}
            });
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        await test.step('GET QR setting for Resident', async () => {
            const paramsResident = {
                person_type: 'resident'
            }
            const response = await request.get(getQrDetails, {
            headers: {
                Authorization: `Bearer ${autData.id_token}`
            },
            params: paramsResident
            });
            const responseBody = await response.json();
            expect(responseBody).toMatchObject(qrDetailResident);

            const responseImg = await request.get(getQrImage, {
            headers: {
                Authorization: `Bearer ${autData.id_token}`
            },
            params: paramsResident
            });
            const responseBodyImg = await responseImg.body();
            expect(responseBodyImg.equals(qrResident)).toBeTruthy();
        });

        await test.step('GET QR setting for NonResident', async () => {
            const paramsResident = {
                person_type: 'non_resident'
            }
            const response = await request.get(getQrDetails, {
            headers: {
                Authorization: `Bearer ${autData.id_token}`
            },
            params: paramsResident
            });
            const responseBody = await response.json();
            expect(responseBody).toMatchObject(qrDetailNonResident);

            const responseImg = await request.get(getQrImage, {
            headers: {
                Authorization: `Bearer ${autData.id_token}`
            },
            params: paramsResident
            });
            const responseBodyImg = await responseImg.body();
            expect(responseBodyImg.equals(qrNonResident)).toBeTruthy();
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        await test.step('Install company mode', async () => {
            await request.post(changeState, {
                headers: {
                    Authorization: `Bearer ${autData.id_token}`
                },
                data: {"company_id":1530,"is_active":true}
            });
        });

        await test.step('GET QR setting for Company 1531', async () => {
            const response = await request.get(getQrDetails, {
            headers: {
                Authorization: `Bearer ${autData.id_token}`
            }
            });
            const responseBody = await response.json();
            expect(responseBody).toMatchObject(qrDetailCompany);

            const responseImg = await request.get(getQrImage, {
            headers: {
                Authorization: `Bearer ${autData.id_token}`
            }
            });
            const responseBodyImg = await responseImg.body();
            expect(responseBodyImg.equals(qrCompany)).toBeTruthy();
        });
});