import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';
import { HomePage } from '../../pages/home-page';

Given('I am on the home page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateTo();
})

When('I click on sofware testen banner', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goToSoftwareTestenPageFromDiensten();
})