// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require("fs");

test.skip('Weborder Login Functionality1', async ({ page }) => {
  await page.goto('https://admin-demo.nopcommerce.com/login');
  await page.getByLabel('Email:').clear()
  await page.getByLabel('Email:').fill('admin@yourstore.com')
  await page.getByLabel('Password:').clear()
  await page.getByLabel('Password:').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator("//a[normalize-space()='Logout']")).toHaveText('Logout');
});
let objects = fs.readFileSync('./tests/TestData/login.json')
const users = JSON.parse(objects);

for (const values of users) {
  test('Weborder Login Functionality', async ({ page }) => {
    await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
    await page.getByLabel("Username:").fill(values.username);
    await page.getByLabel("Password:").fill("test");
    await page.getByRole("button").click();
  });
}