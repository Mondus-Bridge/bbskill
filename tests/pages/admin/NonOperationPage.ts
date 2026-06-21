const { expect } = require('@playwright/test');

exports.NonOperationsPage = class NonOperationsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailHeader = page.locator("h1[class='h1 flex flex-col md:flex-row items-baseline justify-between gap-3 mb-0'] span");
    this.emailTabs = page.locator("div.tab");
    this.emailSelectGroupInpt = page.locator("input[placeholder='Select subgroup']");
    this.emailCreateTemplate = page.locator(".button.is-primary.is-normal");
    this.emailBasicTemplate = page.locator(".button.is-white.is-normal");
    this.emailModalTypeInpt = page.locator("input[placeholder='Template type']");
    this.emailModalDescInpt = page.locator("input[placeholder='Template description']");
    this.emailModalTabs = page.locator('.button-tabs.is-stretch');
    this.emailModalAddBtn = page.locator('.button.is-link.is-normal');
    this.emailModalCreateBtn = page.locator('.button.is-primary.is-big.w-fit');
    this.emailModalCloseIco = page.locator('.button.is-round.is-flat');
    this.emailModalSubgrpInpt = page.locator("input[placeholder='Subgroup']");
    this.emailBasicTempltPageBtns = page.locator('div.button.is-small');
    this.emailBasicTemplatePreview = page.locator('iframe');
    this.emailBasicSaveTmplBtn = page.locator('.button.is-primary.is-big');
    this.emailBasicTempRedactorTitle = page.locator('.text-h3.flex.gap-3.items-center');
    this.emailTypeColumnValue = page.locator('td[title="Type"]');
    this.emailStatusColumnValue = page.locator('td[title="Status"]');
    this.emailDropdownList = page.locator('div[class="dropdown-content-body py-2 overflow-hidden"] div[class="list-el is-small"]');
    this.emailDescriptionColumn = page.locator('td[title="Description"]');
    this.paginatorBtn100 = page.locator('button[data-test-id="page-100"]').nth(0);
    this.paginatorBtn50 = page.locator('button[data-test-id="page-50"]').nth(0);
    this.paginatorBtn20 = page.locator('button[data-test-id="page-20"]').nth(0);
    this.paginatorBtn10 = page.locator('button[data-test-id="page-10"]').nth(0);

    this.rolesEmailInpt = page.locator("input[placeholder='Email, name, last name']");
    this.rolesTitleValues = page.locator('td[title="Title"]');
    this.createNewRoleList = page.locator('label[class="input-wrapper"]');
    this.rolesColumnValue = page.locator("td[title='Roles']");
    this.rolesEditRolesRndBtn = page.locator('div[class="button is-primary is-small"]');
    this.rolesDeleteBtn = page.locator('div[class="button is-gray is-small"]');
    this.rolesDeleteModalBtn = page.locator('.button.is-danger.is-big');
    this.rolesRoleNameInpt = page.locator("input[name='name']");
    this.addRoleBtn = page.getByRole('button', { name: 'Add role' });
    this.addAdmin = page.locator('.button.is-primary.is-normal');
    this.adminSaveBtn = page.locator('.button.is-primary.is-big');
    this.addAdminEnterAdminEmail = page.locator("input[placeholder='Enter email, name, or last name']");
    this.addAdminEmailList = page.locator('.list-el.is-small');
    this.adminModalRolesList = page.locator('label[class="input-wrapper"]');
    this.addContactBtn = page.locator("button[class='button is-primary is-big']");
    this.adminEditBtn = page.locator('button[class="button is-primary is-small"]');
    this.adminDeleteBtn = page.locator('button[class="button is-gray is-small"]');
    this.adminDeleteModalBtn = page.locator('.button.is-danger');
    this.headers = page.locator("tr th");
    this.rolesUserColumnValue = page.locator('td[title="User"]');
    this.rolesWlList = page.locator('div[class="dropdown-content-body py-2 overflow-hidden"] div[class="list-el is-small"]');
    this.rolesWLfilterInpt = page.locator("input[placeholder='All White Labels']");
    this.rolesUserNickValue = page.locator('td[title="User"] div.gap-2');
    this.rolesUserEmailValue = page.locator('td[title="User"] div.lg\\:text-small');
    this.rolesFirstEmail = page.locator("div[class='lg:text-small lg:text-gray']");
    this.rolesEditBtnDisbld = page.locator('td[title="Actions"] button.is-primary');
    this.rolesDeleteBtnDisbld = page.locator('td[title="Actions"] button.is-gray');
    this.wlColumnValues = page.locator('td[title="WL"]');

    this.userTitle = page.locator('.h1.mb-0');
    this.userEmailText = page.locator("div[class='flex gap-2 flex-wrap w-full'] span[class='truncate cursor-pointer text-blue-up']");
    this.userIdTxt = page.locator("div[class='text-gray']");
    this.userRegisterDate = page.locator("div[class='text-yellow-dark'] div b");
    this.userIdBbTxt = page.locator('div[class="flex flex-col gap-2"] div.flex.gap-2:nth-child(5) span:nth-child(2)');
    this.userTelegramName = page.locator("div[class='flex gap-2 flex-wrap items-center'] div").nth(0);
    this.accountType = page.locator("div[class='flex gap-2 flex-wrap items-center'] div").nth(1);
    this.refferLine = page.locator("div[class='flex gap-2 items-center'] span[class='truncate cursor-pointer text-blue-up']");
    this.userDisableSecBtn = page.locator(".button.is-outline.is-small.w-fit");
    this.userSecDisabledDateTxt = page.locator("div[class='text-yellow-dark'] div:nth-child(1)");
    this.userIsActiveToggl = page.locator("div[class='flex flex-wrap gap-6 items-center'] label[class='input-wrapper']");
    this.userBalanceToggl = page.locator('label').filter({ hasText: 'Include in balances and' }).locator('span').first();
    this.userAvailableTabsList = page.locator('a.button-tab');
    this.userKycPageTab = page.locator('data-testid="[object Object]"');
    this.userKycName = page.locator("input[placeholder='Ivan'][value='Михаил']");
    this.userKycLastName = page.locator("input[placeholder='Ivanov'][value='Перевозчиков']");
    this.userKycDate = page.locator("input[placeholder='YYYY-mm-dd']");
    this.userKycResidence = page.locator("input[placeholder='Select country of residence']");
    this.userKycDeclineBtn = page.locator(".button.is-outline-danger.is-normal.w-fit");
    this.userKycUpdateAppBtn = page.locator('.button.is-primary.is-normal');
    this.userKycHistoryAdmin = page.locator('td[title="Administrator"]');
    this.userKycApptoveBtn = page.locator('.button.is-outline-success.is-normal.w-fit');
    this.userBalanceRubBlockBtn = page.locator('button[class="button is-primary is-small"]').nth(3);
    this.userDebitBtn = page.locator('button[class="button is-primary is-small"]');
    this.userBlockBalanceInpt = page.locator("input[placeholder=' ']");
    this.userReasonForBlockInpt = page.locator("textarea[placeholder=' ']");
    this.userBalanceModalBlockBtn = page.locator(".button.is-primary.is-big");
    this.userBalanceActiveReason = page.locator("td[title='Reason']");
    this.userBalanceActiveOperator = page.locator("td[title='Operator']");
    this.userBalanceTitleText = page.locator('.text-h4.text-gray');
    this.userBalanceUnblckBtn = page.locator('.button.is-success.is-small').last();
    this.screenshotKYC = page.locator('.flex.flex-col.gap-3.divide-y-2.divide-disabled');

    this.ordersSearchInpt = page.locator("input[placeholder='Поиск']");
    
    this.commissionsPairColumn = page.locator('td[title="Pair"]');
    this.commissionsPairFirstPeriod = page.locator('td[title="End date"]').nth(0);
    this.commissionsPairFirstMakerFee = page.locator('td[title="Maker fee"] input').nth(0);
    this.commissionsPairFirstTakerFee = page.locator('td[title="Taker fee"] input').nth(0);
    this.commissionsPairFirstSaveBtn = page.locator('button[class="button is-primary is-normal"]').nth(0);
    this.commissionsPairFirstResetBtn = page.locator('button[class="button is-danger is-normal"]').nth(0);
    const today = new Date();
    today.setDate(today.getDate() + 1);
    this.createToday = page.locator(`div[id="dp-${this.formatDate(today)}"]`);
    this.commissionsConfirmPeriodBtn = page.locator("div[class='dp__action_buttons'] button[type='button']");

    this.invoiceTocolumn = page.locator('td[title="To"]');
    this.invoiceFirstPaymentLink = page.locator('td[title="Payment link"]').nth(0);

    this.addressCurrentOne = page.locator('td[title="Wallet"] div.cursor-pointer');
    this.addressNetworkDropdown = page.locator("input[name='network']");
    this.addressUpdateAllBtn = page.locator('.button.is-primary.is-big.w-fit');
    this.addressUpdateActiveBtn = page.locator('.button.is-outline.is-big.w-fit');

    this.loansNoDate = page.locator('.flex-col.justify-center.text-monochrome-medium.stretch');
    this.depositsStatus = page.locator('tbody tr');

    this.deviceAuthRowValue = page.locator('td[title="Authorized"]')

    this.p2pTogglIcon = page.locator("div[class='content'] span[class='input-decorator'] svg");
    this.regSourceTitle = page.locator('.text-h3');

    this.swfitPaymentProviderToggle = page.locator("span.input-label");
    this.swfitNoDataTxt = page.locator('.flex-col.justify-center.text-gray.stretch');
    this.swiftProviderDropdown = page.locator("input[placeholder='Provider not selected']");
    this.swiftDropdownNoDate = page.locator(".flex.flex-row.justify-center.text-small.text-gray");
    this.swiftUsdk10KPercent = page.locator('td[title="10 000+"] div.input-text-component input').nth(1);
    this.swiftUsdk100KFix = page.locator('td[title="100 000+"] div.input-text-component input').nth(0);
    this.swiftFirstSaveBtn = page.locator('button[class="button is-primary is-normal"]').nth(0);
    this.swiftFirstResetBtn = page.locator('button.button.is-danger').nth(0);

    this.tabs = page.locator('a.tab');
    this.bankCompanyDropdown = page.locator("input[placeholder='Select company']");
    this.bankCurrencyDropdown = page.locator("input[placeholder='Select currency']");
    this.bankCompanyColumnValue = page.locator('td[title="Company"]');
    this.bankCurrencyColumnValue = page.locator('td[title="Currency"]');

    this.bankOperatorUserIdInpt = page.locator("input[placeholder='Enter the number indicated in the payment reference']");
    this.bankOperatorFindUserBtn = page.locator("button[class='button is-primary is-big']");
    this.bankOperatorUploadInpt = page.locator("input[type='file']");
    this.bankOperatorSelCurInpt = page.locator("input[placeholder='Select currency']");
    this.bankOperatorDropdownList = page.locator('div[class="dropdown-content-body py-2 overflow-hidden"] div[class="list-el is-small"]');
    this.bankOperatoAmountInpt = page.locator("div[class='input-text-component is-normal is-invalid'] div[class='input-container']");
    this.bankOperatorCompanyInpt = page.locator("input[placeholder=' '][name='company_id']");
    this.bankOperatorBankInpt = page.locator("input[placeholder=' '][name='bank_id']");
    this.bankOperatorCommentInpt = page.locator("textarea[placeholder=' ']");
    this.bankOperatorTopUpBtn = page.locator('.button.is-primary.is-big.w-fit');
};
formatDate(date) {
  return date.toISOString().split('T')[0];
};



};