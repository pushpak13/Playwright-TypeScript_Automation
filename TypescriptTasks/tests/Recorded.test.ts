import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://ecommerce-playground.lambdatest.io/
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  // Click text=Login
  await page.hover("//a[@class='icon-left both nav-link dropdown-toggle']//span[contains(text(),'My account')]");
  await page.locator('text=Login').click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

  // Click [placeholder="E-Mail Address"]
  await page.locator('[placeholder="E-Mail Address"]').click();

  // Fill [placeholder="E-Mail Address"]
  await page.locator('[placeholder="E-Mail Address"]').fill('john.cena@ymail.com');

  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('123456!@#$%^');

  // Click input:has-text("Login")
  await page.locator('input:has-text("Login")').click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

});