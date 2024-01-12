import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://di2.test.com/Login');
  await page.pause();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('hbhagwal');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('Test1234!');
  await page.getByLabel('Password').press('Enter');
  await page.getByLabel('open drawer').click();
  await page.getByRole('button', { name: 'Create Media Item' }).click();
  await page.locator('#react-select-3-placeholder').click();
  await page.locator('#react-select-3-input').fill('asmitademo');
  await page.getByText('AsmitaDemo45').click();
});