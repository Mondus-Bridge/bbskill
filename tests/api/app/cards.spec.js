// GET     /banking/accounts                      Get a list of user accounts  
// POST    /banking/accounts/exchange             Execute exchange transaction  
// GET     /banking/accounts/exchange-rate        Get an exchange rate for accounts  
// GET     /banking/balances                      Get card balances  - done
// DELETE  /banking/cards                         Delete card  - done 
// GET     /banking/cards                         Get a list of cards - done 
// POST    /banking/cards                         Freeze/unfreeze card  - done 
// POST    /banking/cards/auto_top_up             Auto top up card  - done
// POST    /banking/cards/order                   Order virtual payment card  - done
// GET     /banking/cards/order-prediction        Card order prediction  - done
// GET     /banking/cards/sensitive-info          Get card sensitive info  - done
// GET     /banking/cards/{pk}                    Get card info  - done
// GET     /banking/member                        Get Banking User   - done
// PATCH   /banking/member                        Edit Banking User  - done
// POST    /banking/member                        Fill Banking User Data  - no need
// GET     /banking/member/external               Get Banking User  - no need
// POST    /banking/member/external               Create Banking User  - no need
// GET     /banking/settings                      Get Banking platform settings  - done
// POST    /banking/top-up                        Top-up user account or card  - done
// GET     /banking/top-up-prediction             Top-up user account or card prediction  - done
// GET     /banking/transactions                  Get list of transactions  - done


import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import path from "path";
import { validateSchema } from '../../utils/schemaValidator.js';
import { cardHolderInfo, systemsSettings,
cardPriceAndFee, cardsDataType, singleCardInfo, sensitiveData, testCasesPrediction,
freezeUnfreez, cardBalancesSchema, bankingBalance, cardsCommonBalancesSchema, cardOneSettings,
topUpBase, topUpNew } from '../../data/cards.dev.js';
loadEnv();
let authData;
const domain = process.env.DOMAIN;

const cardTopUp = `${process.env.API_BASE_URL}${process.env.API_CARDS_TOPUP}`;
const cardTransactions = `${process.env.API_BASE_URL}${process.env.API_CARD_TRANSACTIONS}`;
const cardBalances = `${process.env.API_BASE_URL}${process.env.API_CARD_BALANCES}`;
const topUp = `${process.env.API_BASE_URL}${process.env.API_CARDS_TOP_UP}`;
const topUpPrediciton = `${process.env.API_BASE_URL}${process.env.API_CARD_TOPUP_PREDICTION}`;
const getSensetiveData = `${process.env.API_BASE_URL}${process.env.API_CARD_SENSETIVE_DATA}`;
const cardsMember = `${process.env.API_BASE_URL}${process.env.API_CARDS_MEMBER}`;
const orderTheCard = `${process.env.API_BASE_URL}${process.env.API_CARDS_ORDER_CARD}`;
const cardOrderPridiction = `${process.env.API_BASE_URL}${process.env.API_CARDS_PREDICTION}`;
const cardTypes = `${process.env.API_BASE_URL}${process.env.API_CARD_TYPES}`;
const cardsList = `${process.env.API_BASE_URL}${process.env.API_CARDS}`;
const now = new Date();
const loginUrl = `${process.env.API_BASE_URL}${process.env.API_LOGIN_URL}`;

const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const dt_from = Math.floor(startOfDay.getTime() / 1000);

const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
const dt_to = Math.floor(endOfDay.getTime() / 1000);

test.describe("API tests of cards", {
    tag: ['@cards', '@api', '@app', '@user1']
  }, () => {
    let cardIdForDeleting;
    let issuedCardForTopUp;
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });

        test('Get Banking platform settings', async ({ request }) => {
            const response = await request.get(`${cardTypes}/1`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
            });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();

            expect.soft(responseBody).toEqual(cardOneSettings);
        });

        test(`Get card balances for user: ${process.env.STANDART_EMAIL} `, async ({ request }) => {
            const response = await request.get(cardBalances, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }});
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
           const defaultCard = responseBody.filter(card => card.is_default === true);
            expect.soft(defaultCard).toMatchObject([cardsCommonBalancesSchema]);

            const nonDefaultCards = responseBody.filter(item => item.is_default === false);
            nonDefaultCards.forEach((card) => {
            const errors = validateSchema(card, cardBalancesSchema );
            expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
            });
        });
        test('Test about unable to change the user email and phone', async ({ request }) => {
        await test.step('Unable to edit Banking User info after having accoun in Pinto', async () => {
            const response = await request.patch(cardsMember, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                data: cardHolderInfo,
            });
            expect.soft(response.status()).toBe(400);
            const responseBody = await response.json();

            expect.soft(responseBody).toEqual({
                "code": "ExternalBankingUserAlreadyExists",
                "data": {}
            });
        });
        await test.step('Get Banking User static info', async () => {
            const params = {  
                platform_id: 2  
            };
            const response = await request.get(cardsMember, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
                params: params
            });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
    
            expect.soft(responseBody).toEqual(cardHolderInfo);
        });});

        test('Order virtual payment card will fail on the dev', async ({ request }) => {
            const response = await request.post(orderTheCard, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                data: systemsSettings
            });
            expect.soft(response.status()).toBe(400);
            const responseBody = await response.json();

            await new Promise(resolve => setTimeout(resolve, 5000));
            expect.soft(responseBody).toMatchObject({"code": "PintopayOrderCardError", "data": {}});
         });

        test('Card order prediction', async ({ request }) => {
            const params = systemsSettings;
            const response = await request.get(cardOrderPridiction, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                params: params
            });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();

            expect.soft(responseBody).toEqual(cardPriceAndFee);
         });
                              
        test('Get banks list and delete on of the cards', async ({ request }) => {
         await test.step('Get a list of cards', async () => {
            const skipIds = [138, 139];
            const params = {
                platform_id: 2,
                with_update: false
            };
            const response = await request.get(cardsList, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                params: params
            });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            const availableCard = responseBody.find(card =>
                card.is_locked === false &&
                card.card_status === 'ACTIVE' &&
                !skipIds.includes(card.id) 
            );
            const availableCardForTopUp = responseBody.find(card =>
                card.is_locked === false &&
                card.card_status === 'ISSUED'
            );
            expect.soft(availableCard).toBeTruthy();
            issuedCardForTopUp = availableCardForTopUp?.id
            cardIdForDeleting = availableCard?.id;
            const errors = validateSchema(responseBody, cardsDataType);
            expect(errors, `Schema validation errors:\n${errors.join('\n\n')}`).toEqual([]);
         });

            await test.step(`Top-up user account or card: ${issuedCardForTopUp}`, async () => {
            const response = await request.post(topUp, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                data: {
                    amount: 25,
                    card_id: issuedCardForTopUp,
                    currency_id: 6
                }
            });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();

            expect.soft(responseBody).toMatchObject({"currency": "USDT", "amount": 25.52});
         });

        await test.step(`Delete card: ${cardIdForDeleting}`, async () => {
            const params = { 
                id: cardIdForDeleting
            };
            const response = await request.delete(cardsList, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                params: params
            });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect.soft(responseBody).toEqual({"result": "success"});
        });});
        test('Cant top-up user card: 139', async ({ request }) => {
            const response = await request.post(topUp, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                data: {
                    amount: 25,
                    card_id: 139,
                    currency_id: 6
                }
            });
            expect.soft(response.status()).toBe(400);
            const responseBody = await response.json();

            expect.soft(responseBody).toMatchObject({"code": "PintopayTopUpCardError", "data": {}});
         });

         test('Get card balances', async ({ request }) => {
            const response = await request.get(cardBalances , {
            headers: {
                Authorization: `Bearer ${authData.token}`
            }});
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();

            expect.soft(responseBody).toMatchObject(bankingBalance);
         });
});

test.describe("API tests of specific card", {
    tag: ['@app', '@cards', '@api', '@user1']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    })
    const idOfCard = 139;
        test(`Get card info ${idOfCard}`, async ({ request }) => {
            const params = {  
                pk: idOfCard,
                with_update: false
            };
            const response = await request.get(`${cardsList}/${idOfCard}`, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                params: params
            });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();

            expect.soft(responseBody).toMatchObject(singleCardInfo);
        });
       test(`Cant get list of transactions for card: ${idOfCard}`, async ({ request }) => {
            const params = {  
                page: 1,
                per_page: 20,
                card_id: idOfCard,
                dt_from,
                dt_to
            };
            const response = await request.get(cardTransactions, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                params: params
            });
            expect.soft(response.status()).toBe(400);
            const responseBody = await response.json();

            expect.soft(responseBody).toEqual({"code": "PintopayGetCardTransactionsError", "data": {}});
        });

        test.skip(`Get card sensitive info ${idOfCard}`, async ({ request }) => {
            const params = {  
                id: idOfCard
            };
            const response = await request.get(getSensetiveData, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                params: params
            });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();

            expect.soft(responseBody).toEqual(sensitiveData);
        });
        
        test(`Get(post) card top up info ${idOfCard}`, async ({ request }) => {
            const response = await request.post(cardTopUp, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                data: topUpBase
            });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();

            expect.soft(responseBody).toEqual({"result": "success"});
        });

        test(`Change card top up limits ${idOfCard}`, async ({ request }) => {
            const response = await request.post(cardTopUp, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                data: topUpNew
            });
            expect.soft(response.status()).toBe(200);
            const responseBody =  await response.json();

            expect.soft(responseBody).toEqual({"result": "success"});
        });

        testCasesPrediction.forEach(({ input, expected }) => {
        test(`Top-up prediction for amount: ${input.amount}`, async ({ request }) => {
            const params = { 
                currency_id: 6, 
                amount: input.amount,
                card_id: idOfCard
            };
            const response = await request.get(topUpPrediciton, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },                
                params: params
            });
            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();

            expect.soft(responseBody).toEqual(expected);
        });});
       
        freezeUnfreez.forEach(({input, expected}) => {
        test(`Freeze/unfreeze card ${input.is_locked}`, async ({ request }) => {
            const response = await request.post(cardsList, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },         
                data: { 
                id: input.id,
                is_locked: input.is_locked
            }      
            });
            const responseBody = await response.json();

            expect.soft(responseBody).toEqual(expected);
        });});
});

test.describe("API tests of card from other accounts", {
    tag: ['@other', '@cards', '@api']
}, () => {
    test.beforeEach(async ({ request }) => {
        const params = {  
            domain
        };
        const response = await request.post(loginUrl, {
            data: {
            email: "qa+t869a38xyk@bitbanker.org",
            password: "qwertySUN123!"
            },
            params
        });

        const responseBody = await response.json();
        const authToken = { token: responseBody.id_token };
        const authPath = path.resolve(__dirname, "../../../auth/t869a38xykUserAuth.json");
        fs.mkdirSync(path.dirname(authPath), { recursive: true });
        fs.writeFileSync(authPath, JSON.stringify(authToken, null, 2));
        authData = JSON.parse(fs.readFileSync('./auth/t869a38xykUserAuth.json', 'utf-8'));
    });
    test("Get email error for user qa+t869a38xyk@bitbanker.org", async ({ request }) => {
        const data = systemsSettings;
        const response = await request.post(orderTheCard, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },                
            data
        });
        expect.soft(response.status()).toBe(400);
        const responseBody = await response.json();
        expect(responseBody).toEqual({"code": "BankingPhoneNumberAlreadyInUse", "data": {}} )
    });
});