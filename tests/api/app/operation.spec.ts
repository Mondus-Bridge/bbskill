import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { daysFromNowUnix } from '../../utils/date.js';
import { typesOfOperations, typesOfOperation, currencyForLedger, emailList } from '../../data/app/ledger.js'
loadEnv();
let authData;

const minus30today = daysFromNowUnix(-30)
const today = daysFromNowUnix(0)
const getLedger = `${process.env.API_BASE_URL}${process.env.API_LEDGER}`;
const searchEmail = `${process.env.API_BASE_URL}${process.env.API_LEDGER_EMAIL}`;
const deleteLedgerWith = `${process.env.API_BASE_URL}${process.env.API_CANCEL_FIAT_WITHDRAWAL}`;
const deleteLedgerDeposit = `${process.env.API_BASE_URL}${process.env.API_CANCEL_FIAT_DEPOSIT}`;
const operationTypes = `${process.env.API_BASE_URL}${process.env.API_OPERATION_TYPES}`;
const operationCurrencies = `${process.env.API_BASE_URL}${process.env.API_CURRENCIES}`;
const getPdf = `${process.env.API_BASE_URL}${process.env.API_LEDGER_PDF}`;
const getXls = `${process.env.API_BASE_URL}${process.env.API_LEDGER_XLS}`;


test.describe("Delete all fiat operations", {
    tag: ['@app', '@user1']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
    });
    test('Get user operations and delete withdraw and deposit fiat pending operation (will have errors)', async ({ request }) => {
        const response = await request.get(`${getLedger}?page=1&per_page=100`, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        }});
        expect.soft(response.status()).toBe(200);
        const responseBody = await response.json();
        const pendingItems = responseBody.items.filter(
        (item) => item.status === "pending" && item.operation_type === 2
    );
        const pendingItemsDeposit = responseBody.items.filter(
        (item) => item.status === "pending" && item.operation_type === 1
    );

    for (const item of pendingItems) {
      const deleteResponse = await request.post(deleteLedgerWith, {
        headers: {
          Authorization: `Bearer ${authData.token}`,
        },
        data: { ledger_operation_id: item.id },
      });

      expect.soft(deleteResponse.status()).toBe(200);
      const deleteBody = await deleteResponse.json();
      console.log(`Deleted operation ${item.id}`, deleteBody);
    }
    for (const item of pendingItemsDeposit) {
      const deleteResponse = await request.post(deleteLedgerDeposit, {
        headers: {
          Authorization: `Bearer ${authData.token}`,
        },
        data: { ledger_operation_id: item.id },
      });

      expect.soft(deleteResponse.status()).toBe(200);
      const deleteBody = await deleteResponse.json();
      console.log(`Deleted operation ${item.id}`, deleteBody);
    }
    });
 });

test.describe("Filter the operations", {
  tag: ['@app', '@user1']
}, () => {
  test.beforeEach(async () => {
      authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
  });
  test('Install time filter from now to - 30 days and in that range operaions', async ({ request }) => {
    const minus30today = daysFromNowUnix(-30)
    const today = daysFromNowUnix(0)
    const response = await request.get(`${getLedger}?page=1&per_page=100&date_from=${minus30today}&date_to=${today}`, {
    headers: {
        Authorization: `Bearer ${authData.token}`
    }});
    expect.soft(response.status()).toBe(200);
    const responseBody = await response.json();
    const itemsFirst = responseBody.items;
    const firstDtCreate = itemsFirst[0].dt_create;
    expect.soft(firstDtCreate).toBeLessThanOrEqual(today)

    const pages = Math.ceil((responseBody.count)/100);
    const responseLast = await request.get(`${getLedger}?page=${pages}&per_page=100&date_from=${minus30today}&date_to=${today}`, {
    headers: {
        Authorization: `Bearer ${authData.token}`
    }});
    expect.soft(responseLast.status()).toBe(200);
    const responseLastBody = await responseLast.json();
    const itemsLast = responseLastBody.items;
    const lastDtCreate = Math.floor(itemsLast[itemsLast.length - 1].dt_create);
    const minus30todayConverted = Math.floor(Date.now() / 1000) - (30 * 24 * 60 * 60);
    expect.soft(lastDtCreate).toBeGreaterThanOrEqual(minus30todayConverted)
  });

  typesOfOperations.forEach(({id, name, shouldHaveOperations}) => {
    test(`Get ${name} ledger operations`, async ({ request }) => {
      const params = {
        page: 1,
        per_page: 10,
        operation_types: id,
        date_from: minus30today,
        date_to: today
      }
      const response = await request.get(getLedger, {
        headers: { Authorization: `Bearer ${authData.token}`},
        params
      });
      expect.soft(response.status()).toBe(200);
      const responseBody = await response.json();
      expect.soft(responseBody.page).toEqual(1);
      expect.soft(responseBody.per_page).toEqual(10);
  
      if (shouldHaveOperations) {
        expect.soft(
          responseBody.items.length, 
          `Operation Type ${name} (ID: ${id}) is marked as mandatory, but returned 0 items.`
        ).toBeGreaterThan(0);
      }
      if (responseBody.items.length > 0) {
        responseBody.items.forEach((item, index) => {
          expect.soft(
            item.operation_type,
            `Item [${index}] has wrong ID. Expected ${id}, got ${item.operation_type}`
          ).toBe(id);
        });
      };
    });
  });
  typesOfOperations.forEach(({id, name, currencies = []}) => {
    if (currencies.length === 0) {
      test.skip(`No currencies defined for ${name}`, () => {});
      return;
    }
    currencies.forEach((currency)=>{
    test(`Get ${name} ledger operations for currency: ${currency}`, async ({ request }) => {
      const minus30today = daysFromNowUnix(-30)
      const today = daysFromNowUnix(0)
      const response = await request.get(`${getLedger}?page=1&per_page=10&operation_types=${id}&base_currencies=${currency}&date_from=${minus30today}&date_to=${today}`, {
        headers: {
          Authorization: `Bearer ${authData.token}`
    }});
      expect.soft(response.status()).toBe(200);
      const responseBody = await response.json();
    });
  })});
});

test.describe("Get operations settings", {
  tag: ['@app', '@user1']
}, () => {
  test.beforeEach(async () => {
      authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
  });
  test('Get all operations types', async ({ request }) => {
    const response = await request.get(operationTypes, {
    headers: {
        Authorization: `Bearer ${authData.token}`
    }});
    expect.soft(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toMatchObject(typesOfOperation);
});

  test('Get necessary currency settings', async ({ request }) => {
    const response = await request.get(operationCurrencies, {
    headers: {
        Authorization: `Bearer ${authData.token}`
    }});
    expect.soft(response.status()).toBe(200);
    const responseBody = await response.json();
    for (const expected of currencyForLedger) {
      const found = responseBody.find(item => item.id === expected.id);

    expect.soft(found).toMatchObject(expected);
  }
});
});

test.describe("Get pdf and xls reports from ledger", {
  tag: ['@app', '@user1']
  }, () => {
  test.beforeEach(async () => {
      authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
});
  const minus3today = daysFromNowUnix(-3)
  const today = daysFromNowUnix(0)

  test('Get PDF file', async ({ request }) => {
    const response = await request.get(`${getPdf}?date_from=${minus3today}&date_to=${today}`, {
    headers: {
        Authorization: `Bearer ${authData.token}`
    }});
    expect.soft(response.status()).toBe(200);
    expect.soft(response.headers()['content-type']).toContain('application/pdf');
  });

  test('Get XLS file', async ({ request }) => {
    const response = await request.get(`${getXls}?date_from=${minus3today}&date_to=${today}`, {
    headers: {
        Authorization: `Bearer ${authData.token}`
    }});
    expect.soft(response.status()).toBe(200);
    expect.soft(response.headers()['content-type']).toContain(
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ); 
  });
});

test.describe("Incoming, outgoing, email filters of operations", {
  tag: ['@app', '@user1']
}, () => {
  test.beforeEach(async () => {
    authData = JSON.parse(fs.readFileSync('./auth/ApiUser1Auth.json', 'utf-8'));
  });

  typesOfOperations.forEach(({id, name, shouldHaveOperations, incomingOperations}) => { 
    test(`Check operation: ${name} is in incoming operations`, async ({ request }) => {
      if (shouldHaveOperations === false) {
      test.skip(true, 'Skip: operations are not expected for this type');
    }
      const params = {
        page: 1,
        per_page: 10,
        operation_types: id,
        balance_operation: 'in'
      }
      const response = await request.get(getLedger, {
        headers: {
          Authorization: `Bearer ${authData.token}`
        },
        params
      });
      expect.soft(response.status()).toBe(200);
      const responseBody = await response.json();
      const isExpected = !!(shouldHaveOperations && incomingOperations);
        if (isExpected) {
              if (responseBody.items.length > 0) {
                expect.soft(responseBody.items[0].operation_type).toBe(id);
              } else {
                throw new Error(`Operation "${name}" expected in INCOMING but items[] is empty.`);
              }
            } else {
              expect.soft(responseBody.items.length, `Operation "${name}" should be empty in INCOMING`).toBe(0);
        };
    });
  });

  typesOfOperations.forEach(({id, name, shouldHaveOperations, outgoingOperations}) => { 
    test(`Check operation: ${name} is in outgoing operations`, async ({ request }) => {
    if (shouldHaveOperations === false) {
      test.skip(true, 'Skip: operations are not expected for this type');
    }
      const params = {
        page: 1,
        per_page: 10,
        operation_types: id,
        balance_operation: 'out'
      }
      const response = await request.get(getLedger, {
        headers: {
          Authorization: `Bearer ${authData.token}`
        },
        params
      });
      expect.soft(response.status()).toBe(200);
      const responseBody = await response.json();
      const isExpected = !!(shouldHaveOperations && outgoingOperations);
        if (isExpected) {
              if (responseBody.items.length > 0) {
                expect.soft(responseBody.items[0].operation_type).toBe(id);
              } else {
                throw new Error(`Operation "${name}" expected in OUTGOING but items[] is empty.`);
              }
            } else {
              expect.soft(responseBody.items.length, `Operation "${name}" should be empty in OUTGOING`).toBe(0);
        };
    });
  });

    test('Get an email in ledger search query', async ({ request }) => {
      const params = {
        page: 1,
        per_page: 10,
        search: ''
      }
      const response = await request.get(searchEmail, {
        headers: {
          Authorization: `Bearer ${authData.token}`
        },
        params
      });
      expect.soft(response.status()).toBe(200);
      const responseBody = await response.json();
      expect(responseBody.items).toMatchObject(emailList);
    });
});

