import {test, expect, Page, BrowserContext, Browser, chromium} from "@playwright/test";
import AddToCartPage_SwagLab from "../../pages/AddToCartPage_SwagLab";
import HomePage from "../../pages/HomePage";
import HomePage_SwagLab from "../../pages/HomePage_SwagLab";
import LoginPage from "../../pages/LoginPage";
import * as testData from "../../testData/login.cred.json";
import AssertionPage from "../../utils/AssertionPage";
import envConfig from "../../utils/envConfig";

test.describe("Cart Tests", async() =>{
   let page: Page;
   let login: LoginPage;
   let home: HomePage_SwagLab;
   let addToCart: AddToCartPage_SwagLab;
   let browser: Browser;
   let context: BrowserContext;
   let assert: AssertionPage;
   
   test.beforeAll(async({browser}) => {
      //browser = await chromium.launch({
        // headless: false
      //});
      context = await browser.newContext();
      page = await context.newPage();
      await page.goto(envConfig.baseUrl);
      login = new LoginPage(page);
      home = new HomePage_SwagLab(page);
      addToCart = new AddToCartPage_SwagLab(page);
      assert = new AssertionPage(page);
     
   });
   
   test.afterAll(async({browser}) => {
      await browser.close();
   })

   test("AddToCartTest", async() => {
    await login.login(envConfig.username, envConfig.password);
    await home.verifyProductHomePage();
    await addToCart.AddToCart();
    await assert.verifyProductCartPage();
    await addToCart.goToContinueShoppingLink();
    await assert.verifyNavigationContinueShoppingLink();
    await addToCart.goToCartPage();
    await addToCart.checkoutCartPage();
    await assert.verifyPageAfterCheckout();
    await login.logout();
    await assert.verifyPageAfterLogout();


   })
})

