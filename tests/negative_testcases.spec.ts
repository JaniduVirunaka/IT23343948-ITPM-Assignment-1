import { test, expect, Page } from '@playwright/test';

test('Neg_Fun_001: Converting sentences with Missing spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mamagedharayanavaa');
  await expect(page.getByText('මම ගෙදර යනවා')).toBeVisible();
});

test('Neg_Fun_002: Converting sentences with Multiple spaces between words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama    gedhara     yanavaa. ');
  await expect(page.getByText('මම    ගෙදර    යනවා')).toBeVisible();
});

test('Neg_Fun_003: Converting informal slang', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('ela machan! supiri!!');
  await expect(page.getByText('එල මචං! සුපිරි!!')).toBeVisible();
});

test('Neg_Fun_004: Typo in standard Singlish', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama gedr yanava');
  await expect(page.getByText('මම ගෙදර යනව')).toBeVisible();
});

test('Neg_Fun_005: Mixed English with non-translatable text', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('Email ekk check karapanko.');
  await expect(page.getByText('Email එක check කරපන්කො.')).toBeVisible();
});

