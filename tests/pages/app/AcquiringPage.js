const { expect } = require('@playwright/test');

exports.AcquiringtPage = class AcquiringtPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.acquitingTitle = page.locator("h1[class='text-h2 md:text-h1']");
    this.createInvoiceButton = page.locator("button[class='button is-primary is-big shrink-1 md:w-fit']");
    this.acquiringGuide = page.locator('div').filter({ hasText: /^Accept payments from all over world$/ }).getByRole('button');
    this.acquiring100 = page.locator('[data-test-id="page-100"]');
    this.acquiringLastPage = page.locator('[data-test-id="last-page"]');
    this.acquiringPageRigt = page.locator('[data-test-id="page-right"]');
    this.acquiringFaq1 = page.getByRole('link', { name: 'Learn more about cryptocurrencies' });
    this.acquiringFaq2 = page.getByRole('link', { name: 'Learn more about crypto payment processing' });
    this.acquiringFaq3 = page.getByRole('link', { name: 'How do I know when my invoice' });
    this.acquiringFaq4 = page.getByRole('link', { name: 'How to create an invoice' });
    this.acquiringBinoculeImage = page.getByRole('main').getByText('FAQ');
    this.createInvoiceLanguageTab = page.locator(".button-tab");
    this.createConvertCheckbox = page.locator("div[class='input-checkbox-component is-touched'] span[class='input-decorator']");
    this.createName = page.locator("input[name='header']");
    this.createTo = page.locator("input[name='payer_fio']");
    this.createEmail = page.locator("input[name='payer_email']");
    this.createPurpose = page.locator("input[name='description']");
    this.createCurrency = page.locator("input[name='currency_id']");
    this.createCurrencyText = page.locator("div.list-el.is-small div.flex span.grow");
    this.createAmount = page.locator("input.input[inputmode='decimal']");
    this.createCanBePaid = page.locator("input[name='payment_currencies_ids']");
    this.createCanBePaidCurrency = page.locator("div:nth-child(1) > div:nth-child(2) > span");
    this.createCanBePaidEmpty = page.locator('.chips.is-normal');
    this.createPaymentDate = page.locator("input[name='payment_deadline_dt']");
    const today = new Date();
    this.createToday = page.locator(`div[id='dp-${this.formatDate(today)}']`);
    this.createSetDate = page.locator("button[class='button is-primary is-normal']");
    this.createInvoiceBut = page.getByRole('button', { name: 'Create invoice' });
    this.createdInvoiceTitle = page.locator('h1.h1');
    this.createBody = page.locator(".row.section.panel");
    this.copyInvoice = page.locator("button[class='button2 button-small button-outline-primary']");
    this.seeTheInvoice = page.locator("button[class='button2 button-small button-primary w-fit']");
    this.createdInvoiceFields = page.locator("div.content div.text-gray");
    this.createdInvoiceValues = page.locator("div.content.stretch.mb-14 div.text-right");
    this.loader = page.locator(".is-loading");
    this.noPaidInvoices = page.locator("div[class='text-center py-2 md:py-5 px-4 bg-gray-light rounded-xl']");
    this.filterNo = page.locator("input[placeholder='No.']");
    this.filterInvoiceSource = page.locator("input[placeholder='Invoice source']");
    this.filterInvoiceStatus = page.locator("input[placeholder='Status']");
    this.filterInvoiceRecipient = page.locator("input[placeholder='Invoice recipient']");
    this.filterReport = page.locator("button[class='button is-icon is-gray is-normal']").nth(0);
    this.listNoIvoice = page.locator("h3[class='h3']");
    this.listTableSource = page.locator("td div.md\\:text-center");
    this.filtersDropdownList = page.locator("div.list div.list-el span").first();
    this.invoiceContent = page.locator('.panel.row.section');
    this.firsRecipientName = page.locator("tbody tr:nth-child(1) td:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(1)").nth(0);
    this.invoiceBackButton = page.locator(".button.is-icon.is-round.is-flat.is-normal.absolute.top-2.left-2");
    this.invoiceFields = page.locator("div.content span.w-1\\/3.text-gray");
    this.invoiceValues = page.locator("div.content span.break-words");
    this.invoicePaymentCurrency = page.locator("div[class='option-content'] span");
    this.invoiceAddressInput = page.locator('.flex.flex-row.overflow-hidden.input');
    this.invoiceDropdownInput = page.locator("input[type='text']");
    this.networkTabOptions = page.locator('div.button-tabs  div.button-tab');
  }

  async assertCryptoAddress(network) {
    const cryptoAddress = await this.invoiceAddressInput.textContent();
    const regexPatterns = {
        "Bitcoin": /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,42}$/, 
        "Bep-20": /^0x[A-Fa-f0-9]{40}$/,
        "TRX": /^T[a-zA-Z0-9]{33}$/,
        "Ton": /^[EQ][A-Za-z0-9_-]{47}$/,
        "Atom": /^cosmos1[a-z0-9]{38}$/
    };
    const regex = regexPatterns[network];
    if (!regex) {
        throw new Error(`Network ${network} is not supported.`);
    }
    const isValid = regex.test(cryptoAddress.trim());
    if (!isValid) {
        throw new Error(`The address ${cryptoAddress} is not valid for the network ${network}.`);
    }
    return true;
}


  async tabElementByText(text) {
    const invoiceTabs = this.page.locator('.button-tabs.invisible-scrollbar.is-stretch.is-responsive');
    if (await invoiceTabs.isVisible()) {
        await this.networkTabOptions.filter({ hasText: text }).first().click();
    } else {
    await this.invoiceDropdownInput.click();
    await this.page.waitForTimeout(500);
    await this.page.getByText(text).click();
    };
  }

  async currencyTab(amountFrom, amountUntil, expectedCurrency) {
    const text = await this.invoicePaymentCurrency.textContent();
    const regex = /([\d\.]+)\s*([A-Z]+)/;
    const match = text.match(regex);
    if (!match) {
        throw new Error('No valid currency and amount found');
    }
    const extractedAmount = parseFloat(match[1]);
    const extractedCurrency = match[2];
    console.log(`Extracted Amount: ${extractedAmount}`);
    console.log(`Extracted Currency: ${extractedCurrency}`);
    if (extractedAmount < amountFrom || extractedAmount > amountUntil) {
        throw new Error(`Amount ${extractedAmount} is not within the expected range (${amountFrom} - ${amountUntil})`);
    }
    if (extractedCurrency !== expectedCurrency) {
        throw new Error(`Currency ${extractedCurrency} does not match expected currency ${expectedCurrency}`);
    }
    return true;
}



  async checkInvoiceOfFields(locator, expectedFields) {
    const count = await locator.count();
    for (const expectedField of expectedFields) {
        let fieldFound = false;
        for (let i = 0; i < count; i++) {
            const text = await locator.nth(i).textContent();
            if (text.includes(expectedField)) {
                const isVisible = await locator.nth(i).isVisible();
                if (isVisible) {
                    fieldFound = true;
                    break;
                }
            }
        }
        if (!fieldFound) {
            console.log(`Field '${expectedField}' not found or not visible.`);
            return false;
        }
    }
    return true;
}

  async showCreatedInvoice(){
    await this.seeTheInvoice.click();
  }
 

  async checkVisibilityOfValues(expectedValues) {
    const count = await this.createdInvoiceValues.count();
    for (let i = 0; i < expectedValues.length; i++) {
        const expectedValue = expectedValues[i];
        if (i === 6) continue; 
        let fieldFound = false;
        for (let j = 0; j < count; j++) {
            const text = await this.createdInvoiceValues.nth(j).textContent();
            if (text.includes(expectedValue)) {
                const isVisible = await this.createdInvoiceValues.nth(j).isVisible();
                if (isVisible) {
                    fieldFound = true;
                    break;
                }
            }
        }
        if (!fieldFound) {
            console.log(`Field '${expectedValue}' not found or not visible.`);
            return false;
        }
    }
    return true;
}


  async filterByRecipient(name){
    await this.filterInvoiceRecipient.fill(name);
  }

  async cleanByRecipientInput(){
    await this.filterInvoiceRecipient.fill('');
  }

  async countTextOccurrences(expectedText) {
    const elements = this.listTableSource;
    let count = 0;
    const totalElements = await elements.count();

    for (let i = 0; i < totalElements; i++) {
      const text = await elements.nth(i).textContent();
      if (text.trim() === expectedText) {
        count++;
      }
    }
    return count;
  }

  async chooseOneStatus(source){
    await this.filterInvoiceStatus.click();
    await this.filtersDropdownList.filter({hasText: source}).click()
  }

  async chooseOneSource(source){
    await this.filterInvoiceSource.click();
    await this.filtersDropdownList.filter({hasText: source}).click()
  }

  async cleanNoInput(){
    await this.filterNo.fill('');
  }

  async lookByFilterNo(num){
    await this.filterNo.fill(`${num}`);
  }

  async checkVisibilityOfFields(expectedFields) {
    const count = await this.createdInvoiceFields.count();
    for (const expectedField of expectedFields) {
        let fieldFound = false;
        for (let i = 0; i < count; i++) {
            const text = await this.createdInvoiceFields.nth(i).textContent();
            if (text.includes(expectedField)) {
                const isVisible = await this.createdInvoiceFields.nth(i).isVisible();
                if (isVisible) {
                    fieldFound = true;
                    break;
                }
            }
        }
        if (!fieldFound) {
            console.log(`Field '${expectedField}' not found or not visible.`);
            return false;
        }
    }
    return true;
}

formatDateforCreatedInvoice(date) {
  if (!(date instanceof Date)) {
    console.error("Invalid input: Expected a Date object.");
    return null;
}
  // Ensure we have a zero-padded day and month for consistency
  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear();
  return `${day}.${month}.${year}`; 
}
  
  formatDate(date) {
    return date.toISOString().split('T')[0];
}

  async createInvoice( name, to, email, purpose, currency, amount, canBePaid){
    await this.createName.fill(name);
    await this.createTo.fill(to);
    await this.createEmail.fill(email);
    await this.createBody.click()
    await this.page.keyboard.press('Space');
    await this.createPurpose.fill(purpose);
    await this.createCurrency.click();
    const invoiceCurrency = this.createCurrencyText.locator(`text=${currency}`).first();
    await invoiceCurrency.click(); 
    await this.createAmount.fill(amount);
    await this.createCanBePaid.click();
    const payCurrency = this.createCanBePaidCurrency.locator(`text=${canBePaid}`).first();
    await payCurrency.click(); 
    await this.createCanBePaidEmpty.click();
    await this.createPaymentDate.click();
    await this.createToday.click();
    await this.createSetDate.click();
    await this.createInvoiceBut.click();
  }

  async chooseLanguage(text = 'Russian') {
    const languageTab = this.createInvoiceLanguageTab.locator(`text=${text}`).first();
    await languageTab.click(); 
  }

  async loaded() {
    try {
        await this.loader.waitFor({ state: 'attached', timeout: 5000 });
        await this.loader.waitFor({ state: 'detached' });
    } catch (e) {
        console.log("Loader did not appear, skipping wait.");
    }
  }

}