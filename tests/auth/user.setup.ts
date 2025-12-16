import { test } from '@playwright/test';

test('login as user', async ({ page }) => {
  await page.goto('/');
  await page.fill('input[type="email"]', process.env.USER_EMAIL!);
  await page.click('input[type="submit"]');
  await page.fill('input[type="password"]', process.env.USER_PASSWORD!);
  await page.click('input[type="submit"]');
  await page.waitForURL('**/home');
  await page.context().storageState({ path: 'auth/user.json' });
});
