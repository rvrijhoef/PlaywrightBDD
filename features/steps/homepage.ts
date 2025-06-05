import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';

Given('I am on Squerist home page', async ({ page }) => {
  await page.goto('https://www.squerist.nl/');
});

When('I click on the menu link {string}', async ({ page }, name: string) => {
  const topMenu = page.locator('[class^=menu__item]');
  await topMenu.getByRole('link', { name }).click();
});

Then('I see browser title {string}', async ({ page }, text: string) => {
  await expect(page).toHaveTitle(text);
});

Then('heading title {string}', async ({ page }, text: string) => {
   await expect(page.locator('h1[data-animation_class=animation-up]')).toHaveText(text);
})