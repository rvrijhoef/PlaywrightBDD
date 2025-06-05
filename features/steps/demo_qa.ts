import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';
import { DataTable } from 'playwright-bdd';

Given('I navigate to url {string}', async ({ page }, url: string) => {
  await page.goto(url);
})

When('I fill in the form fields with', async ({ page }, table: DataTable) => {
  const tableRows = table.hashes();

  const usernameField = page.locator('#userName');
  await usernameField.fill(tableRows[0]['username']);

  const emailField = page.getByRole('textbox', { name: 'name@example.com' });
  await emailField.fill(tableRows[0]['email']);
  
  const currentAddressField = page.getByRole('textbox', { name: 'Current Address' })
  await currentAddressField.fill(tableRows[0]['current address']);

  const permanentAddressField = page.locator('#permanentAddress');
  await permanentAddressField.fill(tableRows[0]['permanent address']);
})

When('I submit the form', async ({ page }) => {
  await page.locator('[id=submit]').click();
})

Then('the result window shows the submited values', async ({ page }, table: DataTable) => {
  const tableValues = table.raw().flat();  
  const resultWindowItems = page.locator('#output').getByRole('paragraph');
  
  await expect(resultWindowItems).toContainText(tableValues);
})