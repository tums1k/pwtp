import { test, expect } from '@playwright/test';

test('user cannot access admin page', async ({ page }) => {
  await page.goto('/admin');
  await expect(page.getByText('Access denied')).toBeVisible();
});
