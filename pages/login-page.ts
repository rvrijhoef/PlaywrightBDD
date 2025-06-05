import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  //#region properties
  readonly userName: Locator;
  readonly passWord: Locator;
  readonly SignBtn: Locator;

  //#endregion

  constructor(page: Page) {
    super(page);

    //#region Locaters
    this.userName = page.getByTestId('Username-id');
    this.passWord = page.getByTestId('password-id');
    this.SignBtn = page.getByTestId('signin-id');

    //#endregion
  }

  //#region Pagefuntions
  async Login(usernameValue: string, passwordValue: string) {
    await this.userName.fill(usernameValue);
    await this.passWord.fill(passwordValue);
    await this.SignBtn.click();
  }

  //#endregion
}
