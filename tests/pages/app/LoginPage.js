const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passInput = page.locator('input[name="password"]');
    this.confirmPassInput = page.locator('input[name="confirmPassword"]');
    this.confirmationCode = page.locator('input[placeholder="123456"]');
    this.loginButton = page.locator('.button.is-primary.is-big');
    this.errorAlert = page.locator('.alert.is-error');
    this.input2fa = page.locator('input[placeholder="000000"]');
    this.errorNotification = page.locator('.notification.is-error');
    this.emailLink = (email) => `a[href='mailto:${email}']`;
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passInput.fill(password);
        await this.loginButton.click();
    }

    async signUP(email, password) {
        await this.emailInput.fill(email);
        await this.passInput.fill(password);
        await this.confirmPassInput.fill(password);
        await this.loginButton.click();
    }

    async clickAndType2faInput(code) {
        await this.input2fa.fill(code)
    }

    async getWrongCredentialsAlert() {
        return await this.errorAlert.textContent();
    }

    async getErrorNotification() {
        return await this.errorNotification.textContent();
    }

    getEmailLinkSelector(email) {
        return this.emailLink(email);
    }


  }