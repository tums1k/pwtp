import { test } from '@playwright/test';

test('login as readonly', async ({ page }) => {
  await page.goto('/');
  await page.fill('input[type="email"]', process.env.READONLY_EMAIL!);
  await page.click('input[type="submit"]');
  await page.fill('input[type="password"]', process.env.READONLY_PASSWORD!);
  await page.click('input[type="submit"]');
  await page.waitForURL('**/home');
  await page.context().storageState({ path: 'auth/readonly.json' });
});
