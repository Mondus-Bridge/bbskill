import {LoginPage} from "./LoginPage.js";
import {MainPage} from "./MainPage.js";
import {OperationsPage} from "./OperationsPage.js";
import {P2Page} from "./P2Page.js";
import {WalletPage} from "./WalletPage.js";
import {InvestmentPage} from "./InvestmentPage.js";
import {AcquiringtPage} from "./AcquiringPage.js";
import {SBPage} from "./SBPage";
import {LendPage} from "./LendPage.js";
import {MarketPage} from "./MarketPage.js";
import {PersonalPage} from "./PersonalPage.js";
import {OtcPage} from "./OtcPage.js"

export default class PomManager {
    constructor(page) {
        this.page = page 
        this.loginPage = new LoginPage(page)
        this.mainPage = new MainPage(page)
        this.walletPage = new WalletPage(page)
        this.operationsPage = new OperationsPage(page)
        this.p2Page = new P2Page(page)
        this.investmentPage = new InvestmentPage(page)
        this.acquiringPage = new AcquiringtPage(page)
        this.sbPage = new SBPage(page);
        this.lendPage = new LendPage(page);
        this.marketPage = new MarketPage(page);
        this.personalPage = new PersonalPage(page);
        this.otcPage = new OtcPage(page);
    }
}