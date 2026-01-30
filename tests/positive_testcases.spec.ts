import { test, expect, Page } from '@playwright/test';

test('Pos_Fun_001: Convert simple daily usage sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oya dhavalta kaevadha');
  await expect(page.getByText('ඔය දවල්ට කැවද')).toBeVisible();
});

test('Pos_Fun_002: Convert present tense daily sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('api raeta kaeema kanavaa');
  await expect(page.getByText('අපි රැට කෑම කනවා')).toBeVisible();
});

test('Pos_Fun_003: Convert simple interrogative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oyaata nidhimathadha?');
  await expect(page.getByText('ඔයාට නිදිමතද?')).toBeVisible();
});

test('Pos_Fun_004: Convert simple mixed Singlish–English sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('eyaa office ekata giyaa');
  await expect(page.getByText('එයා office එකට ගියා')).toBeVisible();
});

test('Pos_Fun_005: Convert compound sentence with condition', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama shri paadhe yanavaa, namuth vaessa vahinavaa');
  await expect(page.getByText('මම ශ්‍රි පාදෙ යනවා, නමුත් වැස්ස වහිනවා')).toBeVisible();
});

test('Pos_Fun_006: Convert compound sentence with mixed English words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('api hike ekak gihin raeta camping karamu');
  await expect(page.getByText('අපි hike එකක් ගිහින් රැට camping කරමු')).toBeVisible();
});

test('Pos_Fun_007: Convert complex sentence with condition', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oya laesthi nam mama dhaen ennam oyaava ganna');
  await expect(page.getByText('ඔය ලැස්ති නම් මම දැන් එන්නම් ඔයාව ගන්න')).toBeVisible();
});

test('Pos_Fun_008: Convert complex sentence with dependency', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oya anivaarayenma enavaanam mama balagena innavaa');
  await expect(page.getByText('ඔය අනිවාරයෙන්ම එනවානම් මම බලගෙන ඉන්නවා')).toBeVisible();
});

test('Pos_Fun_009: Convert past tense sentence with English words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('venadhata vadaa adha traffic thibbath mama office giyaa');
  await expect(page.getByText('වෙනදට වඩා අද traffic තිබ්බත් මම office ගියා')).toBeVisible();
});

test('Pos_Fun_010: Convert negative sentence with mixed English', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('hodhatama vaessa unath api trip eka cancel kalea naehae');
  await expect(page.getByText('හොදටම වැස්ස උනත් අපි trip එක cancel කලේ නැහැ')).toBeVisible();
});