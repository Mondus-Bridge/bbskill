// import { test, expect } from '@playwright/test';
// import { loadEnv } from '../../utils/envLoader.js';
// import fs from 'fs';
// import { generate2FACode } from '../../utils/2fa.js';
// import { validateSchema } from '../../utils/schemaValidator.js';
// import { cardHolderInfo, orderedCardResponse, systemsSettings, cardPriceCurrency, 
// cardPriceAndFee, cardsDataType, singleCardInfo, sensitiveData, testCasesPrediction,
// freezeUnfreez, cardBalancesSchema, cardsCommonBalancesSchema, generalCardSettings } from '../../data/cards.dev.js';
// loadEnv();
// let authData;
// generate2FACode();
// const SECRET_2FA_CARDS = process.env.QA_CARDS_SECRET
// const codeCards = generate2FACode(SECRET_2FA_CARDS);

// const orderTheCard = `${process.env.API_BASE_URL}${process.env.API_CARDS_ORDER_CARD}`;
// const topUp = `${process.env.API_BASE_URL}${process.env.API_CARDS_TOP_UP}`;
// const cardsList = `${process.env.API_BASE_URL}${process.env.API_CARDS}`;

// test.describe("API tests to check 2fa for cards", {
//     tag: ['@2fa']
//   }, () => {
//     test.beforeEach(async () => {
//         authData = JSON.parse(fs.readFileSync('./auth/ApiCard2faUserAuth.json', 'utf-8'));
//     });
//         test('Get Banking platform settings', async ({ request }) => {
//             const response = await request.post(orderTheCard, {
//             headers: {
//                 Authorization: `Bearer ${authData.token}`
//             },                
//                 data: {
//                     currency_id: 6,
//                     platform_id: 2,
//                     code:codeCards
//                 }
//             });
//             expect.soft(response.status()).toBe(200);
//             const responseBody = await response.json();

//             expect.soft(responseBody).toEqual({"result": "success"});
//         });
// });