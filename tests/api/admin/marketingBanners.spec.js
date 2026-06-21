
import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs'; 
import { allBanners, specificBanner7, changeOrders, bannerCreate, bannerEdited, rotation} from '../../data/admin/banners.js'
loadEnv();
let authData;
const domain = process.env.DOMAIN;

const getBannersSets = `${process.env.API_BASE_URL}${process.env.API_ADMIN_BANNERS_SETS}`;
const getBanners = `${process.env.API_BASE_URL}${process.env.API_ADMIN_BANNERS}`;
const bannersOrder = `${process.env.API_BASE_URL}${process.env.API_ADMIN_BANNERS_ORDER}`;
const uploadImage = `${process.env.API_BASE_URL}${process.env.API_PUBLIC_ICON_FOR_BANNER}`;
test.describe("Super admin actions with banners", {
    tag: ['@super', '@banner', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
        await new Promise(resolve => setTimeout(resolve, 1000));
    });
    test('Get global banners settings', async ({ request }) => {
        const params = {
            domain 
        };
        const response = await request.get(getBannersSets, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(rotation);
    });
    test('Get all banners and change their orders', async ({ request }) => {
        await test.step("Get original banner order", async () => {
            const params = {
                domain 
            };
            const response = await request.get(getBanners, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            expect.soft(responseBody).toMatchObject(allBanners);
        });
        for (const { name, payload } of changeOrders) {
        await test.step(`Change banners order - ${name}`, async () => {
            const params = { domain };

            const response = await request.put(bannersOrder, {
            headers: { Authorization: `Bearer ${authData.token}` },
            params: params,
            data: payload
            });

            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect.soft(responseBody).toMatchObject({"result": "success"});
        });
        }
    });
    test('Get specific banner', async ({ request }) => {
        const params = {
            domain 
        };
        const response = await request.get(`${getBanners}/7`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(specificBanner7);
    });
    test('Upload image for banner 14', async ({ request }) => {
        const response = await request.post(uploadImage, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            multipart: {
                        files: {
                            name: 'app.dev.bitbanker.org/marketing/banners/14', 
                            mimeType: 'image/png',
                            buffer: fs.readFileSync('./tests/src/mobile-payment.png')
                        }
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"result": "success"});
    });

    test('CRUD banner by super admin', async ({ request }) => {
        let createdBannerId;
        await test.step("Create banner", async () => {
            const params = { domain};
            const response = await request.post(getBanners, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params,
                data: bannerCreate
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            createdBannerId = responseBody.id;
        });
        await test.step("Edit banner", async () => {
            const params = { domain};
            const response = await request.patch(`${getBanners}/${createdBannerId}`, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params,
                data: bannerEdited
            });
            expect.soft(response.status()).toBe(200); 
        });
        await test.step("Delete banner", async () => {
            const params = { domain};
            const response = await request.delete(`${getBanners}/${createdBannerId}`, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params,
                data: bannerCreate
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            expect(responseBody).toMatchObject({"result": "success"});
        });
    });
});

test.describe("Full admin actions with banners", {
    tag: ['@fulladmin', '@banner', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
        await new Promise(resolve => setTimeout(resolve, 1000));
    });
    test('Get global banners settings', async ({ request }) => {
        const params = {
            domain 
        };
        const response = await request.get(getBannersSets, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(rotation);
    });
    test('Get all banners and change their orders', async ({ request }) => {
        await test.step("Get original banner order", async () => {
            const params = {
                domain 
            };
            const response = await request.get(getBanners, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            expect.soft(responseBody).toMatchObject(allBanners);
        });
        for (const { name, payload } of changeOrders) {
        await test.step(`Change banners order - ${name}`, async () => {
            const params = { domain };

            const response = await request.put(bannersOrder, {
            headers: { Authorization: `Bearer ${authData.token}` },
            params: params,
            data: payload
            });

            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect.soft(responseBody).toMatchObject({"result": "success"});
            await new Promise(resolve => setTimeout(resolve, 2000));
        });
        }
    });
    test('Get specific banner', async ({ request }) => {
        const params = {
            domain 
        };
        const response = await request.get(`${getBanners}/7`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(specificBanner7);
    });
    test('Full admin can upload the image', async ({ request }) => {
        const response = await request.post(uploadImage, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            multipart: {
                        files: {
                            name: 'app.dev.bitbanker.org/marketing/banners/14', 
                            mimeType: 'image/png',
                            buffer: fs.readFileSync('./tests/src/online-banking.png')
                        }
            }
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"result": "success"});
    });
    test('CRUD banner by full-admin', async ({ request }) => {
        let createdBannerId;
        await test.step("Create banner", async () => {
            const params = { domain};
            const response = await request.post(getBanners, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params,
                data: bannerCreate
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            createdBannerId = responseBody.id;
        });
        await test.step("Edit banner", async () => {
            const params = { domain};
            const response = await request.patch(`${getBanners}/${createdBannerId}`, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params,
                data: bannerEdited
            });
            expect.soft(response.status()).toBe(200); 
        });
        await test.step("Delete banner", async () => {
            const params = { domain};
            const response = await request.delete(`${getBanners}/${createdBannerId}`, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params,
                data: bannerCreate
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            expect(responseBody).toMatchObject({"result": "success"});
        });
    });
});

test.describe("Read admin actions with banners", {
    tag: ['@readadmin', '@banner', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiReadAdminAuth.json', 'utf-8'));
        await new Promise(resolve => setTimeout(resolve, 1000));
    });
    test('Get global banners settings', async ({ request }) => {
        const params = {
            domain 
        };
        const response = await request.get(getBannersSets, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(rotation);
    });
    test('Get all banners and should able to change their orders', async ({ request }) => {
        await test.step("Get original banner order", async () => {
            const params = {
                domain 
            };
            const response = await request.get(getBanners, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params
            });
            expect.soft(response.status()).toBe(200);  
            const responseBody = await response.json();
            expect.soft(responseBody).toMatchObject(allBanners);
        });
        for (const { name, payload } of changeOrders) {
        await test.step(`Change banners order - ${name}`, async () => {
            const params = { domain };

            const response = await request.put(bannersOrder, {
            headers: { Authorization: `Bearer ${authData.token}` },
            params: params,
            data: payload
            });

            expect.soft(response.status()).toBe(404);
            const responseBody = await response.json();
            expect.soft(responseBody).toMatchObject({"code": "PageNotFound","data": {}});
        });
        }
    });
    test('Get specific banner', async ({ request }) => {
        const params = {
            domain 
        };
        const response = await request.get(`${getBanners}/7`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject(specificBanner7);
    });
    test('Upload image for banner 14', async ({ request }) => {
        const response = await request.post(uploadImage, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            multipart: {
                        files: {
                            name: 'app.dev.bitbanker.org/marketing/banners/14', 
                            mimeType: 'image/png',
                            buffer: fs.readFileSync('./tests/src/tap-to-pay.png')
                        }
            }
        });
        expect.soft(response.status()).toBe(404);  
        const responseBody = await response.json();
        expect.soft(responseBody).toMatchObject({"code": "PageNotFound","data": {}});
    });
    test('CRUD banner wont work with readadmin', async ({ request }) => {
        let createdBannerId;
        await test.step("Create banner", async () => {
            const params = { domain};
            const response = await request.post(getBanners, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params,
                data: bannerCreate
            });
            expect.soft(response.status()).toBe(404);  
            const responseBody = await response.json();
            createdBannerId = responseBody.id;
        });
        await test.step("Edit banner", async () => {
            const params = { domain};
            const response = await request.patch(`${getBanners}/${createdBannerId}`, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params,
                data: bannerEdited
            });
            expect.soft(response.status()).toBe(404); 
        });
        await test.step("Delete banner", async () => {
            const params = { domain};
            const response = await request.delete(`${getBanners}/${createdBannerId}`, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params,
                data: bannerCreate
            });
            expect.soft(response.status()).toBe(404);  
            const responseBody = await response.json();
            expect(responseBody).toMatchObject({"code": "PageNotFound","data": {}});
        });
    });
});