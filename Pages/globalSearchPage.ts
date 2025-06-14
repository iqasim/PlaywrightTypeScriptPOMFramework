import { expect, Page } from "@playwright/test";
import BasePage from "./BasePage";

export default class GlobalSearchPage extends BasePage{

    constructor(page: Page){
        super(page);    
    }

    //locators

    searchIcon = () => this.page.locator("//li[@id='btn-search']");
    SearchCriteria = () => this.page.locator("//input[@name='search-input']");
    selectOptionFromPrediction = () => this.page.locator("//a[@href='/content/asx/company.html?symbol=CBA']");
    searchResults = () => this.page.locator("//span[contains(text(),'COMMONWEALTH BANK OF AUSTRALIA.')]");


    //Actions

    async clickOnSearchIcon(){
        await this.searchIcon().click();
    }

    async enterSearchCriteria(){
        await this.SearchCriteria().fill("CBA");
    }

    async selectSearchOptionFromPredictions(){
        await this.selectOptionFromPrediction().click({timeout:10000});
    }

    async searchResultsDisplay(){
        await expect(this.searchResults()).toBeVisible();
    }

}