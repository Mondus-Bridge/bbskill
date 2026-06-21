require('dotenv').config();
import { loadEnv } from './envLoader';
loadEnv();

const { expect } = require('@playwright/test');

exports.Helper = class Helper {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loader = page.locator('.is-loading');
    this.page100Btn = page.locator('[data-test-id="page-100"]').nth(0);
    this.page50Btn = page.locator('[data-test-id="page-50"]').nth(0);
    this.page20Btn = page.locator('[data-test-id="page-20"]').nth(0);
    this.page10Btn = page.locator('[data-test-id="page-10"]').nth(0);
    this.pagePreviousBtn = page.locator('button[data-test-id="page-left"]').nth(0);
    this.pageNextBtn = page.locator('button[data-test-id="page-right"]').nth(0);
  };

  async findVisibleElementWithText(locator, text) {
    const filteredLocator = locator.filter({ hasText: text }).first();
    if (await filteredLocator.isVisible()) {
        return filteredLocator; 
    }
    throw new Error(`No visible element found with text: ${text}`);
}

  async assertVisibleAndDisabled(locator) {
    await expect(locator).toBeVisible();
    await expect(locator).toBeDisabled();
}

  async checkColumnValues(locator) {
    const count = await locator.count();
  
    for (let i = 0; i < count; i++) {
      const text = await locator.nth(i).textContent();
      const numericValue = parseFloat(text.replace(/,/g, ''));
      if (isNaN(numericValue) || numericValue === null) {
        console.error(`Invalid or null value detected at index ${i}: ${text}`);
        return false;
      }
    }
    console.log(`All ${count} values are valid numbers.`);
    return true;
  }

  async checkOneValueForColumn(locator, expectedValue) {
    const count = await locator.count();
    for (let i = 0; i < count; i++) {
      const text = await locator.nth(i).textContent();
      if (text.includes(expectedValue)) {
        const isVisible = await locator.nth(i).isVisible();
        if (isVisible) {
          return true; 
        }
      }
    }
    console.log(`Field '${expectedValue}' not found or not visible.`);
    return false; 
  }

  async checkTableHeaders(locator, expectedFields) {
    const count = await locator.count();
    for (const expectedField of expectedFields) {
        let fieldFound = false;
        for (let i = 0; i < count; i++) {
            const text = await locator.nth(i).textContent();
            if (text.includes(expectedField)) {
                const isVisible = await locator.nth(i).isVisible();
                if (isVisible) {
                    fieldFound = true;
                    break;
                }
            }
        }
        if (!fieldFound) {
            console.log(`Field '${expectedField}' not found or not visible.`);
            return false;
        }
    }
    return true;
};

async checkTableHeadersLim(locator, expectedFields, limit) {
  for (const expectedField of expectedFields) {
      let fieldFound = false;
      for (let i = 0; i < limit; i++) {
          const text = await locator.nth(i).textContent();
          if (text.includes(expectedField)) {
              const isVisible = await locator.nth(i).isVisible();
              if (isVisible) {
                  fieldFound = true;
                  break;
              }
          }
      }
      if (!fieldFound) {
          console.log(`Field '${expectedField}' not found or not visible.`);
          return false;
      }
  }
  return true;
};

async goto(url) {
  await this.page.goto(url);
}

async loaded() {
    try {
        await this.loader.waitFor({ state: 'attached', timeout: 5000 });
        await this.loader.waitFor({ state: 'detached' });
    } catch (e) {
        console.log("Loader did not appear, skipping wait.");
    }
  };

  validateSchema(object, schema) {
    const errors = [];
  
    for (const [key, expectedType] of Object.entries(schema)) {
      if (!(key in object)) {
        errors.push(`❌ Missing key: ${key}`);
      } else if (typeof object[key] !== expectedType) {
        errors.push(`❌ Invalid type for "${key}": expected "${expectedType}", got "${typeof object[key]}"`);
      }
    }
  
    return errors;
  }

};

export const addressPatterns = {
  eth: /^0x[a-fA-F0-9]{40}$/,                // ETH / ERC20 / BSC / AVAX-C
  bsc: /^0x[a-fA-F0-9]{40}$/,                // BEP20 (same as ERC20 format)
  tron: /^T[a-zA-Z0-9]{33}$/,                // TRC20
  ton: /^UQ[A-Za-z0-9_-]{46}$/,              // TON
  avax: /^0x[a-fA-F0-9]{40}$/,               // AVAX C-chain
  atom: /^cosmos1[a-z0-9]{38}$/,             // Cosmos (ATOM)
  btc: /^[13bc][A-HJ-NP-Za-km-z1-9]{25,39}$/, // BTC legacy, SegWit, Bech32 (basic check)
  memo: /^\d+$/,                             //memo
};
