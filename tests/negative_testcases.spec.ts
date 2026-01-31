import { test, expect, Page } from '@playwright/test';

test('Neg_Fun_001: Converting sentences with Missing spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mamagedharayanavaa');
  await expect(page.getByText('මම ගෙදර යනවා')).toBeVisible();
});

test('Neg_Fun_002: Repeated letters to express emotions. ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mata badaginiiiiiiiii');
  await expect(page.getByText('මට බඩගිනී…')).toBeVisible();
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
  await singlishInput.fill('Email ekkr check karapanko.');
  await expect(page.getByText('Email එක check කරපන්කො.')).toBeVisible();
});

test('Neg_Fun_006: Dropping vowels in interrogative forms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oyage nama mokkd');
  await expect(page.getByText('ඔයගෙ නම මොකක්ද')).toBeVisible();
});


test('Neg_Fun_007: Incorrect character mapping (w vs v)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('wassa nisa yanna beha');
  await expect(page.getByText('වැස්ස නිස යන්න බැහැ')).toBeVisible();
});


test('Neg_Fun_008: Incorrect character mapping of (ae)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mata eka hariyata therennena');
  await expect(page.getByText('මට ඒක හරියට තෙරෙන්නෙනැ')).toBeVisible();
});


test('Neg_Fun_009: Normal singlish used in day to day texting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mage purse eka nathi wuna');
  await expect(page.getByText('මගේ purse එක නැති වුනා')).toBeVisible();
});


test('Neg_Fun_010: Mixing singular and plural terms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('ape gedhara giyaa mama.');
  await expect(page.getByText('අපේ ගෙදර ගියා මම.')).toBeVisible();
});


