import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import fs from 'fs';
import { typesOfOperationAdmin, typesOfOperationAdminCheck, ledgerActions} from '../../data/admin/ledger.js'
import { daysFromNowUnix } from '../../utils/date.js';
loadEnv();
let authData;

const domain = process.env.DOMAIN;
const getLedgerOperations = `${process.env.API_BASE_URL}${process.env.API_ADMIN_LEDGER}`;
const operationTypes = `${process.env.API_BASE_URL}${process.env.API_ADMIN_LEDGER_OPERATIONS}`;
const minus30today = daysFromNowUnix(-30)
const today = daysFromNowUnix(0)

test.describe("API full-admin ledger tests", {
    tag: ['@admin', '@fulladmin', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
  test('Get all operations types for full-admin', async ({ request }) => {
    const response = await request.get(operationTypes, {
    headers: {
        Authorization: `Bearer ${authData.token}`
    }});
    expect.soft(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toMatchObject(typesOfOperationAdmin);
  });

  typesOfOperationAdminCheck.forEach(({ id, name, shouldHaveOperations }) => {
    test(`Get ${name} ledger operation`, async ({ request }) => {
      const params = {
        page: 1,
        per_page: 10,
        operation_types: id,
        domain: domain,
        date_from: minus30today,
        date_to: today
      };

      const response = await request.get(getLedgerOperations, {
        headers: { Authorization: `Bearer ${authData.token}` },
        params
      });

      expect.soft(response.status()).toBe(200);
      const responseBody = await response.json();

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


Object.keys(ledgerActions).forEach((action) => {
  test(`Get ledger action: ${action} and check the response`, async ({ request }) => {
    const params = {
      page: 1,
      per_page: 10,
      domain: domain,
      date_from: minus30today,
      date_to: today,
      action
    };
    const response = await request.get(getLedgerOperations, {
      headers: {
        Authorization: `Bearer ${authData.token}`
      },
      params
    });
    expect.soft(response.status()).toBe(200);
    const responseBody = await response.json();
    expect.soft(responseBody.items.length, `No items found for action "${action}"`).toBeGreaterThan(0);
    if (Array.isArray(responseBody.items)) {
          responseBody.items.forEach((item, index) => {
            expect.soft(item.action, `Item at index ${index} has wrong action. Expected "${action}", got "${item.action}"`).toBe(action);
          });
      }
  });
});
});

test.describe("API full-admin ledger tests for external client SBP", {
    tag: ['@pokoadmin', '@invoice', '@fulladmin']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiAdminLoginAuth.json', 'utf-8'));
    });
  test('Get sbp invoice operation for full-admin by task 869c26820', async ({ request }) => {
    const params = {
      page:1,
      per_page:10,
      domain,
      date_from: minus30today,
      date_to: today,
      is_partner: true,
      operation_types: 29
    }
    const response = await request.get(getLedgerOperations, {
    headers: {
        Authorization: `Bearer ${authData.token}`
    },
    params
  });
    expect.soft(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body.items)).toBeTruthy();
    expect(body.items.length).toBeGreaterThan(0);
    body.items.forEach((item, index) => {
        const errorMsg = `Item at index ${index} (ID: ${item.id}) failed validation.`;
        expect.soft(item.operation_type_name, errorMsg).toBe('SBP');
        expect.soft(item.client_id, errorMsg).not.toBeNull();
        expect.soft(item.is_partner, errorMsg).toBe(true);
        expect.soft(item.partner_name, errorMsg).toBe('Внешний Партнер 1853');
      });
  });

test('Get sbp invoice operations by query client id', async ({ request }) => {
  const clientId = 'EXT1010'
    const params = {
      page:1,
      per_page:10,
      domain,
      date_from: minus30today,
      date_to: today,
      is_partner: false,
      client_id: clientId
    }
    const response = await request.get(getLedgerOperations, {
    headers: {
        Authorization: `Bearer ${authData.token}`
    },
    params
  });
    expect.soft(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body.items)).toBeTruthy();
    expect(body.items.length).toBeGreaterThan(0);
    body.items.forEach((item) => {
        expect.soft(item.client_id).toEqual(clientId)
      });
  });
 });