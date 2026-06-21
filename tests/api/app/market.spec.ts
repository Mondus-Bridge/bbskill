// POST https://api.aws.dev.bitbanker.org/latest/admin/magic-orders/spread/preview
// GET https://api.aws.dev.bitbanker.org/latest/admin/magic-orders/spread/prices?market_id=9&source=rapira
// POST https://api.aws.dev.bitbanker.org/latest/admin/magic-orders/spread
import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { marketsType1, marketsType2, marketsType3, sides  } from '../../data/app/market.js';
import { daysFromNowUnix } from '../../utils/date.js';
import fs from 'fs';
loadEnv();
let authData;

const postOrder = `${process.env.API_BASE_URL}${process.env.API_ORDERS}`;
const postMarketOrder = `${process.env.API_BASE_URL}${process.env.API_EXCHANGE}`;
const currentOrders = `${process.env.API_BASE_URL}${process.env.API_ORDERS_HISTORY}`;


test.describe("Admin placing magic order", {
    tag: ['@adminapp', '@app']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/AppAdminLoginAuth.json', 'utf-8'));
    });
 marketsType1.forEach(({ market, pair, sources }) => {
    sources.forEach((source) => {
      sides.forEach((side) => {
        test(`Place ${side} order on ${pair} using ${source}`, async ({ request }) => {
          const response = await request.post(postOrder, {
            headers: {
              Authorization: `Bearer ${authData.token}`,
            },
            data: {
              market,
              side,
              amount: 20,
              price: 0.3,
              is_market_maker: true,
              with_external_counterorders: false,
              is_auto_amount: false,
              amount_diff_pct: 10,
              rate_source: source,
            },
          });

          expect.soft(response.status()).toBe(200);
          const responseBody = await response.json();

          expect.soft(responseBody.result).toEqual("success");
        });
      });
    });
  });
marketsType2.forEach(({ market, pair, sources }) => {
    sources.forEach((source) => {
      sides.forEach((side) => {
        test(`Place ${side} order on ${pair} using ${source}`, async ({ request }) => {
          const response = await request.post(postOrder, {
            headers: {
              Authorization: `Bearer ${authData.token}`,
            },
            data: {
              market,
              side,
              amount: 0.1,
              price: 0.1,
              is_market_maker: true,
              with_external_counterorders: false,
              is_auto_amount: false,
              amount_diff_pct: 10,
              rate_source: source,
            },
          });

          expect.soft(response.status()).toBe(200);
          const responseBody = await response.json();

          expect.soft(responseBody.result).toEqual("success");
        });
      });
    });
  });
// marketsType3.forEach(({ market, pair, sources }) => {
//     sources.forEach((source) => {
//       sides.forEach((side) => {
//         test(`Place ${side} order on ${pair} using ${source}`, async ({ request }) => {
//           const response = await request.post(postOrder, {
//             headers: {
//               Authorization: `Bearer ${authData.token}`,
//             },
//             data: {
//               market,
//               side,
//               amount: 1,
//               price: 0.1,
//               is_market_maker: true,
//               with_external_counterorders: false,
//               is_auto_amount: false,
//               amount_diff_pct: 10,
//               rate_source: source,
//             },
//           });

//           expect.soft(response.status()).toBe(200);
//           const responseBody = await response.json();

//           expect.soft(responseBody.result).toEqual("success");
//         });
//       });
//     });
//   });
[1,2,3,4,5].forEach((run) => {
  test(`Delete all market orders (repeat ${run}/5)`, async ({ request }) => {
    const response = await request.get(`${currentOrders}?page=1&per_page=1000&is_active=true`, {
      headers: { Authorization: `Bearer ${authData.token}` }
    });
    const responseBody = await response.json();

    const ordersToDelete = responseBody.items.filter(item => item.id);

    for (const item of ordersToDelete) {
      const deleteResponse = await request.delete(`${postOrder}?order_id=${item.id}`, {
        headers: { Authorization: `Bearer ${authData.token}` },
      });
    }
  }); });
});

test.describe("User placing market order", {
    tag: ['@user1', '@app']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });
 marketsType1.forEach(({ market, pair }) => {
      sides.forEach((side) => {
        test(`Market order ${side} on ${pair}`, async ({ request }) => {
          const response = await request.post(postMarketOrder, {
            headers: {
              Authorization: `Bearer ${authData.token}`,
            },
            data: {
              market,
              side,
              amount: 15
            },
          });

          expect.soft(response.status()).toBe(200);
          const responseBody = await response.json();

          expect.soft(responseBody.result).toEqual("success");
        });
      });
  });
 marketsType2.forEach(({ market, pair }) => {
      sides.forEach((side) => {
        test(`Market order ${side} on ${pair}`, async ({ request }) => {
          const response = await request.post(postMarketOrder, {
            headers: {
              Authorization: `Bearer ${authData.token}`,
            },
            data: {
              market,
              side,
              amount: 0.05
            },
          });

          expect.soft(response.status()).toBe(200);
          const responseBody = await response.json();

          expect.soft(responseBody.result).toEqual("success");
        });
      });
  });
//  marketsType3.forEach(({ market, pair }) => {
//       sides.forEach((side) => {
//         test(`Market order ${side} on ${pair}`, async ({ request }) => {
//           const response = await request.post(postMarketOrder, {
//             headers: {
//               Authorization: `Bearer ${authData.token}`,
//             },
//             data: {
//               market,
//               side,
//               amount: 1
//             },
//           });

//           expect.soft(response.status()).toBe(200);
//           const responseBody = await response.json();

//           expect.soft(responseBody.result).toEqual("success");
//         });
//       });
//   });

[1,2,3,4,5].forEach((run) => {
  test(`Delete all market orders (repeat ${run}/5)`, async ({ request }) => {
    const response = await request.get(`${currentOrders}?page=1&per_page=1000&is_active=true`, {
      headers: { Authorization: `Bearer ${authData.token}` }
    });
    const responseBody = await response.json();

    const ordersToDelete = responseBody.items.filter(item => item.id);

    for (const item of ordersToDelete) {
      const deleteResponse = await request.delete(`${postOrder}?order_id=${item.id}`, {
        headers: { Authorization: `Bearer ${authData.token}` },
      });
    }
  }); });
});

test.describe("User placing time-limit order", {
    tag: ['@user1', '@app']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });
    marketsType1.forEach(({ market, pair, buyPrice, sellPrice }) => {
        ["buy", "sell"].forEach((side) => {
          test(`Market order on ${pair} (${side})`, async ({ request }) => {
            const price = side === "buy" ? buyPrice : sellPrice;

            const body = {
              market,
              side,
              amount: 11,
              price,
              is_market_maker: false,
              with_external_counterorders: false,
              is_auto_amount: false,
              expiration: daysFromNowUnix(3),
            };

            const response = await request.post(postOrder, {
              headers: { Authorization: `Bearer ${authData.token}` },
              data: body,
            });

            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect.soft(responseBody.result).toEqual("success");
          });
        });
    });
});

test.describe("User placing limit order", {
    tag: ['@user1', '@app']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });
    marketsType1.forEach(({ market, pair, buyPrice, sellPrice }) => {
        ["buy", "sell"].forEach((side) => {
          test(`Markets order on ${pair} (${side})`, async ({ request }) => {
            const price = side === "buy" ? buyPrice : sellPrice;

            const body = {
              market,
              side,
              amount: 11,
              price,
              is_market_maker: false,
              with_external_counterorders: false,
              is_auto_amount: false
            };

            const response = await request.post(postOrder, {
              headers: { Authorization: `Bearer ${authData.token}` },
              data: body,
            });

            expect.soft(response.status()).toBe(200);
            const responseBody = await response.json();
            expect.soft(responseBody.result).toEqual("success");
          });
        });
    });
});
