import {AdminLoginPage} from "./AdminLoginPage.js";
import {AdminPanelPage} from "./AdminPanelPage.js";
import {AdminInvestmentPage} from "./AdminInvestmentPage.js";
import {AnalyticsPage} from "./AnalyticsPage.js";
import {Helper} from "../../utils/helper.js";
import {GeneralPage} from "./GeneralPage.js";
import {SettingsPage} from "./SettingsPage.js"
import {UsersPage} from "./UsersPage.js";
import {OperationsPage} from "./OperationsPage.js"
import {NonOperationsPage} from "./NonOperationPage.js";
 

export default class AdminPomManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new AdminLoginPage(page);
        this.panelPage = new AdminPanelPage(page);
        this.investmentPage = new AdminInvestmentPage(page);
        this.analyticsPage = new AnalyticsPage(page);
        this.helper = new Helper(page);
        this.generalPage = new GeneralPage(page);
        this.settingsPage = new SettingsPage(page);
        this.usersPage = new UsersPage(page);
        this.operationsPage = new OperationsPage(page);
        this.nonOperationsPage = new NonOperationsPage(page);
    };
};