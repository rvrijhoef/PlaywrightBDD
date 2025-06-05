import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  //#region properties
  readonly softwareDienstenHeader: Locator;

  //#endregion

  constructor(page: Page) {
    super(page);

    //#region Locaters
    this.softwareDienstenHeader = page.locator('div[class=swiper-wrapper] > a').getByText('Software testen');

    //#endregion
  }

  //#region Pagefuntions
  async navigateTo() {
    await this.page.goto('https://www.squerist.nl/');
  }

  async goToSoftwareTestenPageFromDiensten() {
    await this.softwareDienstenHeader.click()
  }

  //#endregion
}
