
import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs'; 
import { rotation, limitedBanner} from '../../data/admin/banners.js'
loadEnv();
let authData;

const getBannersSets = `${process.env.API_BASE_URL}${process.env.API_BANNERS_SETS}`;
const getBanners = `${process.env.API_BASE_URL}${process.env.API_BANNERS}`;

test.describe.serial("Using overdraft limited user make a test for banner for group overdraft", {
    tag: ['@app', '@groups', '@overdraft']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/OverdraftGroupAuth.json', 'utf-8'));
    });
    test('Get banner settings', async ({ request }) => {
        const response = await request.get(getBannersSets, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(rotation);
    });
    test('Get banners', async ({ request }) => {
        const response = await request.get(getBanners, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody).toMatchObject(limitedBanner);
    });
    test('Make a click for available banner', async ({ request }) => {
        const response = await request.post(`${getBanners}/33/click`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody).toMatchObject({"result": "success"});
    });
    test('Close the available banner', async ({ request }) => {
        const response = await request.post(`${getBanners}/33/dismiss`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect(responseBody).toMatchObject({"result": "success"});
    });
});
