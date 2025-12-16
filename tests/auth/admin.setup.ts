import { test } from '@playwright/test';

test('login as admin', async ({ page }) => {
  await page.goto('/');
  await page.fill('input[type="email"]', process.env.ADMIN_EMAIL!);
  await page.click('input[type="submit"]');
  await page.fill('input[type="password"]', process.env.ADMIN_PASSWORD!);
  await page.click('input[type="submit"]');
  await page.waitForURL('**/home');
  await page.context().storageState({ path: 'auth/admin.json' });
});
