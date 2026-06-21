import {LendingMainPage} from "./LendingMainPage.js";
import {Helper} from "../../utils/helper.js";


export default class LendingPomManager {
    constructor(page) {
        this.page = page;
        this.lendingMainPage = new LendingMainPage(page);
        this.helper = new Helper(page);
    }
}