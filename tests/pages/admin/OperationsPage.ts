const { expect } = require('@playwright/test');

exports.OperationsPage = class OperationsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.ledgerArea = page.locator('.row');
    this.periodInput = page.locator('placeholder="Period"');
    this.periodModalArea = page.locator("div[role='dialog']");
    this.tableArea = page.locator('tbody');
    this.operationsTab = page.locator('a[href="/wl/1/operations/ledger"]');
    this.commissionsTab = page.locator('a[href="/wl/1/operations/commissions"]');
    this.tradesTab = page.locator('a[href="/wl/1/operations/trades"]');
    this.withdrawalsTab = page.locator('a[href="/wl/1/operations/withdrawals"]');
    this.bankTransferTab = page.locator('a[href="/wl/1/operations/bank-transfer"]');
    this.swiftTab = page.locator('a[href="/wl/1/operations/withdrawals/swift"]');
    this.swiftSortInpt = page.locator("input[placeholder='Sort by']");
    this.swiftTransStatusValue = page.locator('td[title="Transaction status"]');
    this.swfitParnershipColumnValueOne = page.locator('td[title="Sole proprietorship (SP)"]');
    this.swiftBanktDetailsText = page.locator('td[title="Bank"] a');
    this.swiftModalBtnCsv = page.locator('button[type="button"]').nth(0);
    this.swiftModalBtnPdf = page.locator('button[type="button"]').nth(1);
    this.swiftModalNameColumnValue = page.locator('td[title="First name"]');

    this.visaTab = page.locator('a[href="/wl/1/operations/withdrawals/visa"]');
    this.visaStatusDropdwn = page.locator('div[class="dropdown-content-body py-2 overflow-hidden"] div.list-el');
    this.p2pTab = page.locator('a[href="/wl/1/operations/p2p/deals"]');
    this.p2pStatusColumnValue = page.locator('td[title="Status"]')
    
    this.citezenshipDropdown = page.locator("input[placeholder='All citizenship']");
    this.residenceDropdown = page.locator("input[placeholder='All countries of residence']");
    this.periodInput = page.locator("input[placeholder='Period']");
    this.ledgerTitle = page.locator('.h1');
    this.allOpeartionsInput = page.locator("input[placeholder='All Operations']"); 
    this.allStatusesInput = page.locator("input[placeholder='All statuses']"); 
    this.removeStatus = page.locator('[data-test-id="remove-statuses"]');
    this.baseCurrencyinput = page.locator("input[placeholder='Base currency']"); 
    this.quoteCurInpt = page.locator("input[placeholder='Quote currency']"); 
    this.userEmailInpt = page.locator("input[placeholder='User ID / Email']"); 
    this.visaQueryInpt = page.locator("input[placeholder='User ID / Email']");
    this.tradeQueryInpt = page.locator("input[placeholder='User ID / Email']"); 
    this.transactionInpt = page.locator("input[placeholder='Transaction ID']"); 
    this.statusInput = page.locator("input[placeholder='Status']");
    this.orderInpt = page.locator("input[placeholder='Order ID']"); 
    this.orderColumnMarketValue = page.locator('div[class="whitespace-nowrap align-middle"]');
    this.tradeUserColumnValue = page.locator('div[class="flex flex-col justify-center lg:text-small my-2"] div');
    this.tradeInpt = page.locator("input[placeholder='Trade ID']");
    this.fillModalHeaderRow = page.locator('table[class="table is-responsive"] tr th')
    this.fillModalExchanges = page.locator('div[class="button-tabs__bg_container"] div.button-tab');
    this.fillButton = page.locator('td[title="Buyout/Profit"] button');
    this.tradeColumnValue = page.locator(".underline");
    this.onlyCheckbox = page.locator("div[class='input-checkbox-component w-full col-span-2'] label[class='input-wrapper']"); 
    this.downloadIco = page.locator(".button.is-icon.is-round.is-white.is-small"); 
    this.headers = page.locator("tr th");
    this.manualWlcolumn = page.locator('td[title="WL"]');
    this.manualCancelBtn = page.locator('button[class="button is-danger is-small"]');
    this.manualCancelModal = page.locator('.group');
    this.manualCancelCancelBtn = page.locator(".button.is-white");
    this.manualCancelYesCancelBtn = page.locator("button[class='button is-danger']");
    this.manualFirstId = page.locator('td[class="is-label-hidden"] span').nth(1);
    this.manualSbmtBtn = page.locator('button[class="button is-outline-success is-small"]')
    this.manualSbmtText = page.locator("div[class='group'] p");
    this.manualModalCancelBtn = page.locator(".button.is-outline.is-big");
    this.manualModalSubmitBtn = page.locator(".button.is-danger.is-big");
    this.manualConfirmBtn = page.locator('button[class="button is-success is-small"]').nth(0);
    this.manualStatusValue = page.locator('td[class="is-desktop-only"] span.pill');
    this.manualTransactionHash = page.locator("input[name='txId']");
    this.manualLastConfirmBtn = page.locator('.button.is-primary');
    this.manualTXValue = page.locator('span[class="text-rose-400"]');
    this.manualDropdownSelector = page.locator('div[class="dropdown-content-body py-2 overflow-hidden"] div[class="list-el is-small"]');
    this.allOpeartionsList = page.locator('body > div > div div[class="list-el is-small"] span');
    this.allStatusesList = page.locator('body > div:nth-child(9) > div div[class="list-el is-small"] span');
    this.baseCurrencyList = page.locator('body > div:nth-child(10) > div div[class="list-el is-small"] span');
    this.quoteCurrencyList = page.locator('body > div:nth-child(11) > div:nth-child(1) div div[class="list-el is-small"] span');
    this.statusesList = page.locator('div[class="list-el is-small"] div[class="flex items-center gap-2"]');
    this.citizenshipList = page.locator('body > div:nth-child(7) > div:nth-child(1) div div[class="list-el is-small"] span');
    this.countryList = page.locator('body > div:nth-child(8) > div:nth-child(1) div div[class="list-el is-small"] span');
    this.tableUserColumn = page.locator('td[title="User"]');

    this.transactionOne = page.locator('td[title="Transaction"]').nth(0);
    this.transactionTwo = page.locator('td[title="Transaction"]').nth(1);
    this.transctionsTitle = page.locator('td[title="Transaction"] div[class="flex flex-col whitespace-nowrap"]');
    this.currencyColumn = page.locator("td[title='Currency']");
    this.firstTransactionNumber = page.locator('tbody tr:nth-child(1) td:nth-child(3) div:nth-child(1) div:nth-child(1) span:nth-child(1)');
    this.removeIco = page.locator('[data-test-id="remove-operations"]');

    this.p2pDealInpt = page.locator("input[placeholder='Deal ID']");
    this.p2pEmailInpt = page.locator("input[placeholder='User ID / Email / User nickname']");
    this.p2pStatusColumnValueCanseled = page.locator('div.pill.is-small');
    this.p2p600id = page.locator('a[href="/operations/p2p/deals/600"]');
    this.p2pEmaiList = page.locator('div[class="flex flex-col"]');

    this.periodIcoBackward = page.locator("button[aria-label='Previous month'] span[class='dp__inner_nav']");
    this.periodIcoForward = page.locator("button[aria-label='Next month'] span[class='dp__inner_nav']");
    this.periodMonthsOverlay = page.locator("button[aria-label='May-Open months overlay']");
    this.juneMonth = page.locator("div[class='dp--header-wrap'] div:nth-child(3) div:nth-child(3) div:nth-child(1)");
    this.firstSeptember = page.locator("div[id='dp-2025-11-01']").first(); //change it every month
    this.endOctober = page.locator("div[id='dp-2025-12-31']"); //change it every month
    this.periodConfirBtn = page.locator("button[class='button is-primary is-normal']");
    this.statusText = page.locator('td[title="Transaction"] div span.pill');
    this.noData = page.locator(".flex-col.justify-center.text-gray.stretch");
    this.ourClients = page.locator("span[class='input-label'] div");
    this.currencyColumn = page.locator('td[title="Currency"]');
    this.removeBaseIco = page.locator('.shrink-0.button.is-icon.is-flat.is-round.is-tiny');
};


async chooseRightOne(locator, text) {
  const elements = await locator.filter({ hasText: text });
  const count = await elements.count();
  for (let i = 0; i < count; i++) {
      if (await elements.nth(i).isVisible()) {
          return elements.nth(i)
      }
  }
}


async clickRightOne(locator, text) {
  const elements = await locator.filter({ hasText: text });
  const count = await elements.count();
  for (let i = 0; i < count; i++) {
      if (await elements.nth(i).isVisible()) {
          await elements.nth(i).click();
          break;
      }
  }
};


async extractMarketNumber() {
  const text = await this.orderColumnMarketValue.textContent();
  const number = text.match(/#(\d+)/)[1];
  return number;
};

async getMatchingUsers(locator, text) {
  const orderElements = await locator.allTextContents();
  const totalElements = orderElements.length;
  const matchingElements = orderElements.filter(orderText => orderText.includes(text)).length;
  return { matchingElements, totalElements };
};

async getMatchingMarketUsers(text) {
  const orderElements = await this.tradeUserColumnValue.allTextContents();
  const totalElements = orderElements.length;
  const matchingElements = orderElements.filter(orderText => orderText.includes(text)).length;
  return { matchingElements, totalElements };
};

async getMatchingMarketNumbers(text) {
  const orderElements = await this.orderColumnMarketValue.allTextContents();
  const totalElements = orderElements.length;
  const matchingElements = orderElements.filter(orderText => orderText.includes(text)).length;
  return { matchingElements, totalElements };
}




async retrieveCurrency(curName) {
  const count = await this.currencyColumn.count();
  for (let i = 0; i < count; i++) {
    const textContent = await this.currencyColumn.nth(i).textContent();
    if (textContent.includes(curName)) {
      console.log(`Currency '${curName}' found at index ${i}`);
      return true; 
    }
  }
  console.log(`Currency '${curName}' not found.`);
  return false; 
}

async fillUserEmailInpt (text) {
  await this.userEmailInpt.fill('');
  await this.userEmailInpt.fill(text);
  await this.page.waitForTimeout(2500);
}

async retrieveStatus() {
  await this.page.waitForTimeout(3000);
  const count = await this.statusText.count();
  let statuses = [];
  
  for (let i = 0; i < count; i++) {
    const textContent = await this.statusText.nth(i).textContent();
    statuses.push(textContent);
  }
  return statuses;
}

async retrieveOperations() {
  const count = await this.transctionsTitle.count();
  let operations = [];
  
  for (let i = 0; i < count; i++) {
    const textContent = await this.transctionsTitle.nth(i).textContent();
    const operation = textContent.split('.')[0].trim();
    operations.push(operation);
  }
  return operations;
}

async installPeriod (){
  await this.periodInput.click();
  // await this.periodIcoForward.click();
  await this.firstSeptember.click();
  await this.endOctober.click();
  await this.periodConfirBtn.click();
  await this.page.waitForTimeout(2000);
};

async clickAndFillTrade(numb){
  await this.tradeInpt.fill("");
  await this.tradeInpt.fill(`${numb}`);
  await this.page.waitForTimeout(2500);
}



async clickAndFillOrder(numb){
  await this.orderInpt.fill("");
  await this.orderInpt.fill(`${numb}`);
  await this.page.waitForTimeout(2500);
}

async extractNumeric() {
  const value = await this.firstTransactionNumber.textContent();
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  return numericValue;
}

async clickAndChooseStatus(text) {
  await this.allStatusesInput.click()
  await this.page.waitForTimeout(500);
  await this.allStatusesList.getByText(`${text}`, { exact: true }).click();
  await this.page.waitForTimeout(3000);
}

async chooseStatusFromDropdown(text) {
  await this.allStatusesList.getByText(`${text}`, { exact: true }).click();
  await this.page.waitForTimeout(3000);
}

async clickAndChooseOperation(text) {
  await this.allOpeartionsInput.click()
  await this.page.waitForTimeout(500);
  await this.allOpeartionsList.getByText(`${text}`, { exact: true }).click();
  await this.page.waitForTimeout(3000);
}

async fillTheInput(locator, text) {
  await locator.fill("");
  await locator.fill(`${text}`);
  await this.page.waitForTimeout(2500);
}

async checkDropdownList(locator, expectedFields) {
  const count = await locator.count();
  
  for (const expectedField of expectedFields) {
    let fieldFound = false;
    
    for (let i = 1; i < count; i += 2) { 
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


};