import {Browser, chromium, Page} from "@playwright/test";
import { Env } from "./.github/workflows/frameworkConfig/env";


async function globalSetup({basePage, homePage}){
  const browser: Browser = await chromium.launch(
    {headless: false}
  );
  const context= await browser.newContext();
  const page: Page = await context.newPage();
  await basePage.navigateToPortal(Env.Base_URL);
  await basePage.acceptCookiePopup();
  await homePage.isHomePageDisplay();

  await page.context().storageState({path: "./initialState.json"});

  await browser.close();
}

export default globalSetup;