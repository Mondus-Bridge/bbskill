// GET    /investment/actions                Get investment actions  
// GET    /investment/assets                 Get active investment assets  
// GET    /investment/assets/{pk}            Get active investment assets  
// GET    /investment/assets/{pk}/rates      Get investment asset rates  
// PATCH  /investment/buy                    Change purchase amount for user  
// POST   /investment/buy                    Buy more investment for user  
// GET    /investment/my                     Get my investments  
// POST   /investment/my                     Create investment for user  
// GET    /investment/my/light               Get my investments (light)  
// GET    /investment/revenue-history        Get investment revenue history  
// PATCH  /investment/sell                   Change sell amount for user  
// POST   /investment/sell                   Sell investment for user  


import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { validateSchema } from '../../utils/schemaValidator.js';
import { assetsProduct, assetsProductType, investmentProduct, assetsInvestmentType, investCommonBalancesSchema,
balancesPLWR } from '../../data/playProduct.js';
loadEnv();
let authData;

const investBalances = `${process.env.API_BASE_URL}${process.env.API_INVESTMENT_BALANCE}`;
const investmentActions = `${process.env.API_BASE_URL}${process.env.API_INVESTMENT_ACTIONS}`;
const investmentAssets = `${process.env.API_BASE_URL}${process.env.API_INVESTMENT_ASSETS}`;
const investmentAssets106 = `${process.env.API_BASE_URL}${process.env.API_INVESTMENT_ASSETS}/106`;
const investmentAssets106Rates = `${process.env.API_BASE_URL}${process.env.API_INVESTMENT_ASSETS}/106/rates`;
const investmentBuy = `${process.env.API_BASE_URL}${process.env.API_INVESTMENT_BUY}`;
const investmentSell = `${process.env.API_BASE_URL}${process.env.API_INVESTMENT_SELL}`;
const investmentMy = `${process.env.API_BASE_URL}${process.env.API_INVESTMENT_MY}`;
const investmentRevenue = `${process.env.API_BASE_URL}${process.env.API_INVESTMENT_REVENUE}`;

test.describe("API tests of Investment", {
    tag: ['@app', '@investment', '@user1']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });
    test(`Get card balances for user: ${process.env.USER_1_EMAIL} `, async ({ request }) => {
        const response = await request.get(investBalances, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        }});
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const defaultBalance = responseBody.filter(b => b.is_default === true);
        defaultBalance.forEach((card, cardBalancesSchema ) => {
        const errors = validateSchema(card, cardBalancesSchema );
        expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        });

        const nonDefaultProducst = responseBody.filter(item => item.is_default === false);
        expect(nonDefaultProducst).toMatchObject([balancesPLWR])
        });
    test('Test actions api, cancel 1 action for buy & sale', async ({ request }) => {
        let lowestPendingId;
        let lowestPendingIdSale;
        await test.step('Get investment actions in /investment/actions', async ()=> {
            const params = {
                investment_id: 254,
                per_page: 10,        
                page: 1,             
            };
            const response = await request.get(investmentActions, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                params: params
            });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();

            expect.soft(responseBody.page).toBe(params.page);
            expect.soft(responseBody.per_page).toBe(params.per_page);
            expect.soft(responseBody.count).toBeGreaterThanOrEqual(1);
            expect.soft(Array.isArray(responseBody.items)).toBe(true);

            //this for test case for to cancel the purchase
            const items = responseBody.items;
            const pendingItems = items.filter(item => item.status === 'pending_withdrawal_to_pool');
            const sortedById = pendingItems.sort((a, b) => a.id - b.id);
            const lowestPending = sortedById[0];
            lowestPendingId = lowestPending.id;

            //this for test case for to cancel the selling
            const itemsSale = responseBody.items;
            const pendingItemsSale = itemsSale.filter(item => item.status === 'pending_deposit_from_pool');
            const sortedByIdSale = pendingItemsSale.sort((a, b) => a.id - b.id);
            const lowestPendingSale = sortedByIdSale[0];
            lowestPendingIdSale = lowestPendingSale.id;

            for (const item of responseBody.items) {
                expect.soft(item).toHaveProperty('id', expect.any(Number));                  
                expect.soft(item).toHaveProperty('action', expect.any(String));             
                expect.soft(item).toHaveProperty('dt_create', expect.any(String));          
                expect.soft(item).toHaveProperty('ledger_id', expect.any(Number));           
                expect.soft(item).toHaveProperty('amount', expect.any(Number));              
                expect.soft(item).toHaveProperty('cost', expect.any(Number));                
                expect.soft(item).toHaveProperty('currency_symbol', expect.any(String));     
                expect.soft(item).toHaveProperty('fees', expect.any(Number));                
                expect.soft(item).toHaveProperty('status', expect.any(String));             
            };

            if (responseBody.items.length > 0) {
                const firstItem = responseBody.items[0];
                expect.soft(firstItem.amount).toBe(1);
                expect.soft(firstItem.cost).toBe(10);
                expect.soft(firstItem.currency_symbol).toBe("USDT");
            }
        });
        await test.step('Cancel purchase request in /investment/buy', async ()=> {
            const cancelRes = await request.patch(investmentBuy, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                data: {
                    amount: 1,
                    action_id: lowestPendingId
                }
            });
            expect.soft(cancelRes.status()).toBe(200);
            const cancelBody =  await cancelRes.json();
            expect.soft(cancelBody.result).toBe("success");
        });
        await test.step('Cancel sale request in /investment/sell', async ()=> {
            const cancelRes = await request.patch(investmentSell, {
                headers: {
                    Authorization: `Bearer ${authData.token}`
                },
                data: {
                    amount: 1,
                    action_id: lowestPendingIdSale
                }
            });
            expect.soft(cancelRes.status()).toBe(200);
            const cancelBody = await cancelRes.json();
            expect.soft(cancelBody.result).toBe("success");
        });
    });
    test('Get active investment assets in /investment/assets', async ({ request })=> {
        const params = {
            per_page: 20,        
            page: 1,           
        };
        const response = await request.get(investmentAssets, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();

        expect.soft(responseBody.page).toBe(params.page);
        expect.soft(responseBody.per_page).toBe(params.per_page);
        expect.soft(responseBody.count).toBeGreaterThanOrEqual(3);
        expect.soft(Array.isArray(responseBody.items)).toBe(true);
        responseBody.items.forEach(item => {
            expect.soft(typeof item).toBe("object");
        });
        const targetItem = responseBody.items.find(item => item.id === 106);
        expect.soft(targetItem).toEqual(assetsProduct);

        responseBody.items.forEach(item => {
            expect.soft(item).toEqual(expect.any(Object));
        });

        const errors = validateSchema(targetItem, assetsProductType);
        expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);

        expect.soft(targetItem.description).toHaveProperty('en', expect.any(Object));
        expect.soft(targetItem.description.en).toHaveProperty('name', expect.any(String));
        expect.soft(targetItem.description.en).toHaveProperty('about', expect.any(String));
        expect.soft(targetItem.description.en).toHaveProperty('investment_idea', expect.any(String));

        expect.soft(Array.isArray(targetItem.asset_currencies)).toBe(true);
        targetItem.asset_currencies.forEach(asset => {
            expect.soft(asset).toHaveProperty('currency_id', expect.any(Number));
            expect.soft(asset).toHaveProperty('pct', expect.any(Number));
            expect.soft(asset).toHaveProperty('amount', expect.any(Number));
        });
    });
    test('Get active investment assets in /investment/assets/{pk}', async ({ request })=> {
        const response = await request.get(investmentAssets106, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);
        const responseBody106 = await response.json();
        expect.soft(responseBody106).toEqual(assetsProduct);

        const errors = validateSchema(responseBody106, assetsProductType);
        expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
    });
    test('Get investment asset rates in /investment/assets/{pk}/rates', async ({ request })=> {
        const response = await request.get(investmentAssets106Rates, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        });
        expect.soft(response.status()).toBe(200);
        const responseBody106rate = await response.json();
        expect.soft(responseBody106rate.result).toBe("success");
        expect.soft(Array.isArray(responseBody106rate.items)).toBe(true);

        for (const item of responseBody106rate.items) {
            expect.soft(item.price).toBe(10);
            expect(typeof item.dt_create).toBe("number");
            expect(typeof item.price).toBe("number");
        }
    });
    test('Buy more investment for user in /investment/buy', async ({ request })=> {
        const response = await request.post(investmentBuy, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {
                amount: 1,
                investment_id: 254
            }
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, assetsInvestmentType);
        expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
        expect.soft(responseBody.description).toHaveProperty('en', expect.any(Object));
        expect.soft(responseBody.description.en).toHaveProperty('name', expect.any(String));
        expect.soft(responseBody.description.en).toHaveProperty('about', expect.any(String));

        expect.soft(responseBody.description.en.additional).toHaveProperty('description_buying', expect.any(String));
        expect.soft(responseBody.description.en.additional).toHaveProperty('description_selling', expect.any(String));
        expect.soft(responseBody.description.en.additional).toHaveProperty('capital_protection_short', expect.any(String));

        expect.soft(responseBody.asset_currencies).toBeInstanceOf(Array);
        responseBody.asset_currencies.forEach(asset => {
            expect(asset).toHaveProperty('currency_id', expect.any(Number));
            expect(asset).toHaveProperty('pct', expect.any(Number));
            expect(asset).toHaveProperty('amount', expect.any(Number));
        });

        expect.soft(responseBody.actions).toBeInstanceOf(Array);
        responseBody.actions.forEach(action => {
            expect(action).toHaveProperty('id', expect.any(Number));
            expect(action).toHaveProperty('action', expect.any(String));
            expect(action).toHaveProperty('amount', expect.any(Number));
            expect(action).toHaveProperty('cost', expect.any(Number));
            expect(action).toHaveProperty('price', expect.any(Number));
            expect(action).toHaveProperty('revenue', expect.any(Number));
            expect(action).toHaveProperty('status', expect.any(String));
        });
        delete responseBody.accrued_income;
        delete responseBody.accrued_income_last_date;
        delete responseBody.actions;
        delete responseBody.amount_in_pool;
        delete responseBody.asset_amount; 
        expect.soft(responseBody).toEqual(investmentProduct);
    });
    test('Sell investment for user in /investment/sell', async ({ request })=> {
        const response = await request.post(investmentSell, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            data: {
                amount: 1,
                investment_id: 254
            }
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const errors = validateSchema(responseBody, assetsInvestmentType);
        expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);

        delete responseBody.accrued_income;
        delete responseBody.accrued_income_last_date;
        delete responseBody.actions;
        delete responseBody.amount_in_pool;
        delete responseBody.asset_amount; 
        expect.soft(responseBody).toEqual(investmentProduct);
    });
    test('Get my investments in /investment/my', async ({ request })=> {
        const params = {
            per_page: 10,        
            page: 1,             
        };
        const response = await request.get(investmentMy, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        function compareArrayObjects(responseBody, investmentProduct) {
            if (Array.isArray(responseBody.items) && responseBody.items.length > 0) {
              const item = responseBody.items[0];
              for (const key in investmentProduct) {
                if (investmentProduct.hasOwnProperty(key)) {
                  if (item[key] === investmentProduct[key]) {
                  } else {
                    console.warn(`❗ Mismatch for key "${key}": responseBody.item = "${item[key]}", investmentProduct = "${investmentProduct[key]}"`);
                  }
                }
              }
            } 
          }
          compareArrayObjects(responseBody, investmentProduct);
    });
    test('Get investment revenue history /investment/revenue-history', async ({ request })=> {
        const params = {
            investment_id: 254          
        };
        const response = await request.get(investmentRevenue, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params: params
        });
        expect.soft(response.status()).toBe(200);
    }); //Need to adjust after getting revenue
});