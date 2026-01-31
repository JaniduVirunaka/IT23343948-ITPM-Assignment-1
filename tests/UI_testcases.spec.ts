import { test, expect, Page } from '@playwright/test';

test('UI_Fun_001: Verify Sinhala output updates in real time while typing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama gedhara yanavaa');
  await page.waitForTimeout(2000);
  await expect(page.getByText('මම ගෙදර යනවා')).toBeVisible({ timeout: 15000 });
});

test('UI_Fun_002: Verify output clears when input field is cleared', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('api heta office enavaa');
  await page.waitForTimeout(2000);
  await expect(page.getByText('අපි හෙට office එනවා')).toBeVisible({ timeout: 15000 });
});