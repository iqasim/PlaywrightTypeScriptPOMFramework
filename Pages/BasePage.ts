import { expect, Page } from "@playwright/test";
import { Env } from "../.github/workflows/frameworkConfig/env";
import { time } from "console";
import HomePage from "./homePage";

export default class BasePage {
    readonly page: Page;

constructor(page : Page) { 
    this.page = page;
}

//locators
cookiesPopup = () => this.page.getByRole('button', { name: 'Accept All Cookies' });

   async navigateToPortal(url : string){
      await this.page.goto(url, {waitUntil:"domcontentloaded", timeout: 10000});
       return this;
    }


    async acceptCookiePopup(){
        await expect( async() =>{
        try{
           await this.cookiesPopup().click();
        }catch(e:any){
            console.log(e.message);
        }
        return this;
    }).toPass(); 
    }

}