import { test, expect } from '@playwright/test';
import { loadEnv } from '../../utils/envLoader.js';
import { addUserWriteOff, bbWlSettings } from '../../data/admin/wlSettings.js'
import fs from 'fs';
loadEnv();
let authData;
const domain = process.env.DOMAIN;

const getUsersForWriteOff = `${process.env.API_BASE_URL}${process.env.API_ADMIN_WL_WRITEOFF}`;
const getWlSettings = `${process.env.API_BASE_URL}${process.env.API_ADMIN_WL}`;

test.describe("Super admin tests of WL settings", {
    tag: ['@admin', '@super', '@api']
  }, () => {
    test.beforeEach(async () => {
        authData = JSON.parse(fs.readFileSync('./auth/ApiSuperLoginAuth.json', 'utf-8'));
    });
  test('Get and delete WRITE_OFF user', async ({ request }) => {
    const params = { domain };
    let useForDelete;
    await test.step('Get add user for WRITE-OFF', async () => {
        const response = await request.post(getUsersForWriteOff, {
            headers: {
                Authorization: `Bearer ${authData.token}`
            },
            params,
            data: addUserWriteOff 
        });
        expect.soft(response.status()).toBe(200);  
    });
    await test.step('Get WRITE_OFF user', async () => {
      const response = await request.get(getUsersForWriteOff, {
        headers: { Authorization: `Bearer ${authData.token}` },
        params
      });
      expect.soft(response.status()).toBe(200);

      const responseBody = await response.json();
      useForDelete = responseBody.find((item) => item.user_id === 1731);
    });

    await test.step('Delete WRITE_OFF user', async () => {
      const response = await request.delete(
        `${getUsersForWriteOff}/${useForDelete.id}`,
        {
          headers: { Authorization: `Bearer ${authData.token}` },
          params
        }
      );
      expect.soft(response.status()).toBe(200);
    });
  });

  test('Get bitbanker wl settings', async ({request}) => {
    const params = { domain };
    const response = await request.get(getWlSettings, {
        headers: {
            Authorization: `Bearer ${authData.token}`
        },
        params,
    });
    expect.soft(response.status()).toBe(200);  
    const responseBody = await response.json();
    expect(responseBody).toMatchObject(bbWlSettings);
  });
});
 