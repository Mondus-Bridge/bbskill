import { test, expect } from '../../../utils/auth';

test('placeholder e2e test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/.*/);
});