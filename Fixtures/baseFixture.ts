import { expect, test as baseSetup} from "../Fixtures/pomFixtures";
//import {test as baseSetup } from "@playwright/test";
import { Env } from "../.github/workflows/frameworkConfig/env";



export const base = baseSetup.extend<{testHook: void}>({
    testHook: async ({basePage, homePage}, use)=>{
        await basePage.navigateToPortal(Env.Base_URL);
        await basePage.acceptCookiePopup();
        await homePage.isHomePageDisplay();   
        await use();
    }
})