import { expect, Page } from "@playwright/test";
import { Env } from "../.github/workflows/frameworkConfig/env";
import { time } from "console";
import BasePage from "./BasePage";


export default class HomePage extends BasePage{

    constructor(page : Page) {super(page)}

    //locator
    homePageDisplay = () => this.page.locator("//h5[contains(text(), 'Market Overview')]");

    
    async isHomePageDisplay(){
        await expect(async() => {
        await expect(this.homePageDisplay()).toBeVisible()}).toPass();

    }
}