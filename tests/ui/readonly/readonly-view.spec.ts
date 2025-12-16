import { test, expect } from '@playwright/test';

test('readonly user cannot edit profile', async ({ page }) => {
  await page.goto('/profile');
  await expect(page.getByRole('button', { name: 'Save' })).toBeHidden();
});
