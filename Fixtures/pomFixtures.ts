import {test as myTest} from "@playwright/test"
import LoginPage from "../Pages/loginPage"
import HomePage from "../Pages/homePage";
import BasePage from "../Pages/BasePage";
import GlobalSearchPage from "../Pages/globalSearchPage";

type pages = {
loginPage: LoginPage;
homePage: HomePage;
basePage: BasePage;
globalSearchPage: GlobalSearchPage;
}

const testPages = myTest.extend<pages>({
    homePage: async ({page},use)=>{
        await use(new HomePage(page));
    },
    loginPage: async ({page},use)=>{
        await use(new LoginPage(page));
    },
    basePage: async ({page},use)=>{
        await use(new BasePage(page));
    },
    globalSearchPage: async ({page},use) =>{
        await use(new GlobalSearchPage(page))
    },
})

export const test = testPages;
export const expect = testPages.expect;