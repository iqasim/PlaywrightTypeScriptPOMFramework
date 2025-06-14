import { expect, FrameLocator, Locator, Page } from "@playwright/test";
import { Env } from "../.github/workflows/frameworkConfig/env";
import BasePage from "./BasePage";
//import BasePage from "../Pages/BasePage";


export default class LoginPage extends BasePage{
     
    /* readonly loginFrame : FrameLocator;
    readonly textLogin : Locator;
    readonly firstnameHeadingDashboard : Locator;
    readonly profileHover : Locator; */

 
    constructor( page : Page) {
        super(page);
    }

    //locators
    labelLogin = ()=> this.page.locator('#loginOrSignupLbl');
    loginFrame = () => this.page.frameLocator("#loginIframe");
    enterEmail = () => this.loginFrame().locator("#idToken1");
    passwordEnter = () => this.loginFrame().locator("#idToken2");
    loginButton = () => this.loginFrame().locator("//input[@id='loginButton_0']");
    dashboardDisplay = () => this.page.locator("#titleNFirstNameHeaderWideScreen");
    iconUser = () => this.page.locator('#showNavStateIcon');
    buttonLogout = () => this.page.locator("#logoutLinkWideScreen");


    //Actions

    async switchToLoginFrame(){
        await this.labelLogin().click();
    }

    async enterEmailAddress(emailAddress: string){
        await this.enterEmail().fill(emailAddress);
    }

    async enterPassword(password : string){
        await this.passwordEnter().fill(password);
    }

    async clickLoginButton(){
        await this.loginButton().click();
    }

    async isLoginSectionStillDisplay(){
        if(await this.labelLogin().isVisible()){
            await this.labelLogin().click();
        } 
    }    

    async isDashboardDisplay(){
       await expect(this.dashboardDisplay().isVisible());
    }

    async clickLogout(){
        await this.iconUser().hover();
        await this.buttonLogout().click();
    }
        
}