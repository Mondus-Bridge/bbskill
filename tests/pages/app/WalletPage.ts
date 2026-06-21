const { expect } = require('@playwright/test');

exports.WalletPage = class WalletPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    //Crypto wallet section:
    this.currencyDropdownList = page.locator('.input-container').first();
    this.networkDropdownList = page.locator('div[data-testid="networkSelector"]');
    this.networkTabList = page.locator('div[data-testid="networkTab"]');
    this.cryptoAddressInput = page.locator('.inline-flex.overflow-hidden.input');
    this.emailDropdownList = page.locator('input[name="email_suggest"]');
    this.submitButton = page.getByRole('button', {name: 'Confirm'});
    this.withdrawBtn = page.getByRole('button', {name: 'Withdraw'});
    this.submitTransferBtn = page.getByRole('button', { name: 'Confirm transfer' });
    this.quantityInput = page.locator("input[inputmode='decimal']");
    this.transferEmail = page.locator("input[type='email']");
    this.transferComment = page.locator("textarea.input[name='comment']");
    this.successEmail = page.locator("span[class='text-blue']");
    this.cryptoCheckbox = page.locator("div[class='input-checkbox-component is-vertical-start'] span[class='input-decorator']");
    this.cryptoMemoCheckbox = page.locator("div[class='input-checkbox-component'] span[class='input-decorator'] svg");
    this.cryptoAddressInputWithdraw = page.locator("input[name='address']");
    this.cryptoMemoInput = page.locator("input[placeholder='0123456789']");
    this.cryptoSavedAdress = page.locator(".text-nowrap");
    this.cryptoWithdrawalAmount = page.locator("div[class='text-right text-primary text-h4']");
    this.cryptoTotalWithdrawalAmount = page.locator(".text-right.text-primary.text-h4.font-bold");
    this.cryptoConnect2fa = page.locator("div[class='input-help'] span a");
    this.cryptoWithdrawErrorsOne = page.locator("div.input-error").nth(0);
    this.cryptoWithdrawErrorsTwo = page.locator("div.input-error").nth(1);
    this.cryptoToCheckUncheck = page.locator('input[name="confirmed"]');


    //VISA sections:
    this.visaInternationalWarning = page.locator("div[class='alert is-error'] div").nth(1);
    this.visaCannotWarning = page.locator(".whitespace-pre-line");
    this.ccInput = page.locator("input[placeholder='0000 0000 0000 0000']");
    this.ccCardHolder = page.locator("input[placeholder='JOHN SMITH']");
    this.visaCommission = page.locator("div[class='mt-5'] div.flex div").nth(0);
    this.visaRepayment = page.locator("div[class='mt-5'] div.flex div").nth(2);
    this.visaDeducted = page.locator("div[class='mt-5'] div.flex div").nth(4);
    this.visaCreateOperation = page.locator("button[class='button is-primary is-big md:w-fit mt-5']");
    this.visaContactUs = page.locator("button[class='button is-success is-normal w-fit']");
    this.visaTransactionHistory = page.locator(".button.is-outline.is-normal");
    this.contactUsInput = page.locator("textarea[placeholder='Type here']");
    this.notificationError = page.locator(".notification.is-error");

    //Cash sections:
    this.cashChoosePoint = page.locator("input[placeholder='Choose city']");
    this.cashDropdownList = page.locator('.list-el.is-small');
    this.cashAmount = page.locator('.text-right.text-h4').nth(0);
    this.cashTotalAmount = page.locator('.text-right.text-h4').nth(1);
    this.cashCreateOperation = page.locator("button[class='button is-primary is-big md:w-fit']");
    this.cashCreatedOperationTitle = page.locator(".h2");
    this.cashOperationNumber = page.locator(".bg-monochrome-low.rounded-xl.text-h2.px-4.py-2");
    this.cashCreatedOperationAdress = page.locator("div[class='group flex items-center gap-4'] span");
    this.cashCleanHistory = page.getByRole('button', { name: 'Transaction History' }).nth(1);
    this.cashAmountInput = page.locator("input[placeholder='Amount']");
    this.youCanAlert = page.getByText('You can top up your balance');
    this.nonDepositAlert = page.getByText('No available cash-out points');
    this.youCanWithdrawAlert = page.getByText('You can withdraw funds via');
  };

  //Cash methods:
  async withdrawMethod(text='In cash') {
    await this.page.waitForTimeout(2500);
    const oneMoreMethod = await this.page.locator("div.button-tab div[class='flex items-center gap-2']").getByText(text).isVisible();
    if (oneMoreMethod) {
      await this.page.locator("div.button-tab div[class='flex items-center gap-2']").getByText(text).click();
    }
  };

  async cashInputAmount(numb){
    await this.cashAmountInput.fill('');
    await this.cashAmountInput.fill(`${numb}`)
  }

  async cashOperNumber(){
    const text = await this.cashOperationNumber.textContent();
    const operNumber = parseInt(text, 10); 
    return operNumber;
  }

  async choosePoint(point) {
    await this.page.waitForTimeout(1500);
    const inCashVisible = await this.page.locator("div.button-tab div[class='flex items-center gap-2']").getByText('In cash').isVisible();
    if (inCashVisible) {
      await this.page.locator("div.button-tab div[class='flex items-center gap-2']").getByText('In cash').click();
      await this.cashChoosePoint.click();
      const drop = this.page.getByText(point);
      await drop.last().click();
    } else {
      await this.cashChoosePoint.click();
      const drop = this.page.getByText(point);
      await drop.last().click();
    }

  }
  async extractAmount(locator, expectedAmount, expectedCurrency) {
    const notificationText = await locator.textContent();
    const regex = /([\d,.]+)\s+([A-Z.a-z]+)/;
    const match = notificationText.match(regex);

    if (match) {
      let extractedAmount = match[1];
      let normalizedAmount = parseFloat(extractedAmount.replace(/,/g, ''));
      let extractedCurrency = match[2];
      expect(normalizedAmount).toBe(parseFloat(expectedAmount));
      expect(extractedCurrency).toBe(expectedCurrency);

    } else {
      throw new Error('Could not extract amount and currency from text.');
    }
  };

  //VISA Methods:
  async inputAmount(numb){
    await this.quantityInput.fill('');
    await this.quantityInput.fill(`${numb}`)
  }

  async typeVisaCC(cc, holder){
    await this.ccInput.fill(cc);
    await this.ccCardHolder.fill(holder);
  }

  //Transfer Methods:
  async mail(){
    return await this.successEmail.textContent()
  }
  async transfer(number, email, comment) {
    await this.quantityInput.fill(number.toString())
    await this.transferEmail.fill(email)
    await this.transferComment.fill(comment)
    await this.submitTransferBtn.click();
  }

  //Crypto Methods:
  async withdrawCryptoAdress(address){
    await this.cryptoAddressInputWithdraw.fill(`${address}`)
  }

  async cryptoWithdrawMemoInput(memo){
    await this.cryptoMemoInput.fill('');
    await this.cryptoMemoInput.fill(`${memo}`);
  }

  async cryptoWithdrawAmountInput(numb){
    await this.quantityInput.fill('');
    await this.quantityInput.fill(`${numb}`)
  }

  listElementByText(text) {
    return this.page.locator(`.list-el.is-small`).filter({ hasText: text });
  }

  tabElementByText(text) {
    return this.page.locator(`.button-tab`).filter({ hasText: text });
  }

  async clickCurrencyByText(text) {
    await this.currencyDropdownList.isVisible();
    await this.page.waitForTimeout(2000);
    await this.currencyDropdownList.click();
    await this.page.waitForTimeout(1000);
    // await this.page.getByText(text).click();
    // await this.page.locator('span').getByText(text, { exact: true }).click();
    await this.page.getByTestId('currencySelectorDropdown').getByText(text, { exact: true }).click();
  }

  async clickNetworkByText(text) {
    await this.networkDropdownList.click();
    await this.listElementByText(text).first().click();
  }


  async clickTabByTextForWithdraw(text) {
    await this.networkTabListForWithDraw.click();
    await this.tabElementByText(text).first().click();
  };

  async getCryptoAddress(){
    return await this.cryptoAddressInput.textContent();
  }

  async setTimeout(time) {
    return await this.page.waitForTimeout(time);
  }

  async reload(){
    return await this.page.reload();
  }

  async checkAndHandleSelectors(text) {
    const isTabListVisible = await this.networkTabList.isVisible();
    const isDropdownListVisible = await this.networkDropdownList.isVisible();
    if (isTabListVisible) {
        this.page.getByText(text);
        return await this.submitButton.click()
    }
    if (isDropdownListVisible) {
        await this.clickNetworkByText(text);
        return await this.submitButton.click();
    }
    return await this.submitButton.click();
  }

  async checkAndHandleSelectorsWithdraw(text) {
    const isTabListVisible = await this.networkTabList.isVisible();
    const isDropdownListVisible = await this.networkDropdownList.isVisible();
    if (isTabListVisible) {
        this.page.getByText(text);
        return await this.withdrawBtn.click()
    }
    if (isDropdownListVisible) {
        await this.clickNetworkByText(text);
        return await this.withdrawBtn.click();
    }
    return await this.withdrawBtn.click();
  }
}
