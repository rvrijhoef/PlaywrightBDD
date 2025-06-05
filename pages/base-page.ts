import { Locator, Page } from '@playwright/test';

export class BasePage {
  //#region properties
  readonly page: Page;
  readonly progressBar: Locator;
 
  //#endregion
  constructor(page: Page) {
    this.page = page;

    //#region Locaters
    this.progressBar = page.locator('.nprogress-busy');
    
    //#endregion
  }

  //#region Pagefuntions
  async waitOnProgessBarToComplete() {
    await this.progressBar.waitFor({ state: 'hidden' });
  }

  //#endregion
}
