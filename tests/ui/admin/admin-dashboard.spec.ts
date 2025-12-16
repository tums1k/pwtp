import { test, expect } from '@playwright/test';

test('admin sees admin dashboard', async ({ page }) => {
  await page.goto('/admin');
  await expect(page.getByText('Admin Dashboard')).toBeVisible();
});
