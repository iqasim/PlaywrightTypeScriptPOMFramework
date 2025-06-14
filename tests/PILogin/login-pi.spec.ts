import { expect, test } from "../../Fixtures/pomFixtures";
import { Env } from "../../.github/workflows/frameworkConfig/env";
import { beforeEach } from "node:test";

test.beforeEach( async ({basePage, homePage})=>{
    await basePage.navigateToPortal(Env.Base_URL);
    await basePage.acceptCookiePopup();
    await homePage.isHomePageDisplay();

})


test("Login/Logout Test Cases", async ({loginPage}) => {
  
   await loginPage.switchToLoginFrame(),
   await loginPage.enterEmailAddress(Env.emailAddress),
   await loginPage.enterPassword(Env.Password),
   await loginPage.clickLoginButton()
  
})

test("Global Search Test", async ({globalSearchPage}) => {
    
        await globalSearchPage.clickOnSearchIcon(),
        await globalSearchPage.enterSearchCriteria(),
        await globalSearchPage.selectSearchOptionFromPredictions(),
        await globalSearchPage.searchResultsDisplay()
});