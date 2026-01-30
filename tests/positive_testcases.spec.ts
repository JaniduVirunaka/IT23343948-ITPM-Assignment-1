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

test('Pos_Fun_011: Convert interrogative daily usage sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oyaata adha havasata vaedak thiyenavaadha?');
  await expect(page.getByText('ඔයාට අද හවසට වැඩක් තියෙනවාද?')).toBeVisible();
});

test('Pos_Fun_012: Convert past tense sentence with meeting context', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('oya kiyatadha meeting eka patan gaththea');
  await expect(page.getByText('ඔය කියටද meeting එක පටන් ගත්තේ')).toBeVisible();
});

test('Pos_Fun_013: Convert interrogative sentence for system behavior', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('meeka hariyata vaeda karanavaadha?');
  await expect(page.getByText('මේක හරියට වැඩ කරනවාද?')).toBeVisible();
});

test('Pos_Fun_014: Convert imperative command with English word', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('vahaama eyaata call ekak ganna !');
  await expect(page.getByText('වහාම එයාට call එකක් ගන්න !')).toBeVisible();
});

test('Pos_Fun_015:Convert simple imperative daily command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('malli issarahata poddak yanna');
  await expect(page.getByText('මල්ලි ඉස්සරහට පොඩ්ඩක් යන්න')).toBeVisible();
});

test('Pos_Fun_016: Convert polite imperative request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('karuNaakaralaa eeka mata dhenna puluvandha');
  await expect(page.getByText('කරුණාකරලා ඒක මට දෙන්න පුලුවන්ද')).toBeVisible();
});

test('Pos_Fun_017: Convert future tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('api heta hike ekak yanavaa');
  await expect(page.getByText('අපි හෙට hike එකක් යනවා')).toBeVisible();
});

test('Pos_Fun_018: Convert past tense daily activity sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama ehe kalin gihin thiyenavaa');
  await expect(page.getByText('මම එහෙ කලින් ගිහින් තියෙනවා')).toBeVisible();
});

test('Pos_Fun_019: Convert greeting with interrogative form', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('aayuboovan, oyaata kohomadha?');
  await expect(page.getByText('ආයුබෝවන්, ඔයාට කොහොමද?')).toBeVisible();
});

test('Pos_Fun_020: Convert polite request sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mata podi udhavvak karanna puLuvandha');
  await expect(page.getByText('මට පොඩි උදව්වක් කරන්න පුළුවන්ද')).toBeVisible();
});

test('Pos_Fun_021: Convert short present tense response', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('hari, mama dhaen karannam');
  await expect(page.getByText('හරි, මම දැන් කරන්නම්')).toBeVisible();
});

test('Pos_Fun_022: Convert past tense sentence with location', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('mama iiyee havasa hospital ekata giyaa');
  await expect(page.getByText('මම ඊයේ හවස hospital එකට ගියා')).toBeVisible();
});

test('Pos_Fun_023: Converting informal / slangs', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('ae bn mata ara video tika dhaapanko, thanks machan');
  await expect(page.getByText('ඇ බ්න් මට අර video ටික දාපන්කො, thanks මචන්')).toBeVisible();
});

test('Pos_Fun_024: Converting numbers with interrogative form', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill('dhaen time eka 7.30 AM, api office yanna oonee!');
  await expect(page.getByText('දැන් time එක 7.30 AM, අපි office යන්න ඕනේ!')).toBeVisible();
});

test('Pos_Fun_025: Converting paragraph', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });
  await singlishInput.fill(`adha suba udhaesanayak vunee naehae mokadha vaessa hariyata vahinavaa. 
traffic thibbath mama office enna hadhanavaa. 
adha Zoom meeting dhekak thiyenavaa saha documents tika kalin email karanna kiyalaa manager kiyuvvaa, 
mata aegata amaruii namuth vaeda hariyata karanna try karanavaa.`);
  await expect(page.getByText(`අද සුබ උදැසනයක් වුනේ නැහැ මොකද වැස්ස හරියට වහිනවා. 
traffic තිබ්බත් මම office එන්න හදනවා. 
අද Zoom meeting දෙකක් තියෙනවා සහ documents ටික කලින් email කරන්න කියලා manager කියුව්වා, 
මට ඇගට අමරුඊ නමුත් වැඩ හරියට කරන්න try කරනවා.`)).toBeVisible();
});

